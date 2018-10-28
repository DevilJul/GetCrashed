package de.haxolotl;

import java.io.IOException;
import java.io.InputStream;
import java.util.concurrent.Executor;
import java.util.concurrent.Executors;

import com.nexmo.client.NexmoClient;
import com.nexmo.client.NexmoClientException;
import com.nexmo.client.auth.AuthMethod;
import com.nexmo.client.auth.TokenAuthMethod;
import com.nexmo.client.sms.SmsSubmissionResult;
import com.nexmo.client.sms.messages.TextMessage;

import io.undertow.Handlers;
import io.undertow.Undertow;
import io.undertow.server.HttpHandler;
import io.undertow.server.HttpServerExchange;
import io.undertow.server.handlers.resource.ClassPathResourceManager;
import io.undertow.util.Headers;

public class TheShizzle {

	public static void main(String... args) {

		int port = 8080;
		String host = "localhost";
		if (args.length < 4 || args.length > 6) {
			System.err.println("Use program arguments: <apiKey> <apiSecret> <telnumber> <enableSms|disableSms> [<host>] [<port>]");
			System.exit(1);
		}

		String apiKey = args[0];
		String apiSecret = args[1];
		String telnumber = args[2];
		Boolean enableSms = args[3].equals("enableSms");

		if (args.length > 4) {
			host = args[4];
		}
		if (args.length > 5) {
			port = Integer.parseInt(args[5]);
		}

		Executor exec = Executors.newFixedThreadPool(1);

		HttpHandler staticResource = Handlers.resource(new ClassPathResourceManager(TheShizzle.class.getClassLoader()));

		HttpHandler smsHandler = new HttpHandler() {
			@Override
			public void handleRequest(final HttpServerExchange exchange) throws Exception {
				String requestPath = exchange.getRequestPath();
				if (requestPath.startsWith("/theThingy/")) {
					System.out.println("requestPath: " + requestPath);
					if (requestPath.equals("/theThingy/")) {
						exchange.setRelativePath("index.html");
					} else {
						exchange.setRelativePath(requestPath.substring("/theThingy".length()));
					}
					staticResource.handleRequest(exchange);
				} else {
					exec.execute(() -> {
						try {
							exchange.startBlocking();
							String request = readStream(exchange.getInputStream());
							System.out.println("request: " + request);

							if (enableSms) {
								sendSms(apiKey, apiSecret, telnumber, request);
							}
						} catch (Exception e) {
							e.printStackTrace();
						}
					});

					exchange.getResponseHeaders().put(Headers.CONTENT_TYPE, "text/plain");
					exchange.getResponseSender().send("Ok");
				}
			}
		};

		Undertow server = Undertow.builder().addHttpListener(port, host).setHandler(smsHandler).build();
		server.start();
	}

	private static String readStream(InputStream in) throws IOException {
		byte[] buffer = new byte[4096];
		int read = 0;
		StringBuilder asString = new StringBuilder();
		while ((read = in.read(buffer, 0, buffer.length)) >= 0) {
			asString.append(new String(buffer, 0, read));
		}
		in.close();
		return asString.toString();
	}

	private static void sendSms(String apiKey, String apiSecret, String telnumber, String message)
			throws IOException, NexmoClientException {
		AuthMethod auth = new TokenAuthMethod(apiKey, apiSecret);
		NexmoClient client = new NexmoClient(auth);

		SmsSubmissionResult[] responses = client.getSmsClient()
				.submitMessage(new TextMessage(telnumber, telnumber, message));
		for (SmsSubmissionResult response : responses) {
			System.out.println("nexmo result: " + response);
		}
	}
}
