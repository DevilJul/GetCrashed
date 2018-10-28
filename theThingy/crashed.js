COBI.init('this will all end in tears');

let downloadTimer;

function showCrashScreen() {
    document.getElementById("screen_crash").style.display = 'block';
    document.getElementById("screen_cycler").style.display = 'none';
    document.getElementById("screen_notification").style.display = 'none';
}

function switchBatteryState() {
    COBI.__receiveMessage({action: 'NOTIFY', path: 'battery/state', payload: {batteryLevel: 20, state: "CHARGING"}})
}

function hideCrashScreen() {
    document.getElementById("screen_crash").style.display = 'none';
    document.getElementById("screen_cycler").style.display = 'block';
    document.getElementById("screen_notification").style.display = 'none';

    cyclerIsOk = true;

    resetInterval();
}

function showEmergencyScreen() {
    document.getElementById("screen_notification").style.display = 'block';
    document.getElementById("screen_crash").style.display = 'none';
    document.getElementById("screen_cycler").style.display = 'none';
}

function emergencyCall() {
    sendSms();

    resetInterval();

    showEmergencyScreen();
}

function resetInterval() {
    clearInterval(downloadTimer);
    document.getElementById("progressStop").value = 360;
}

function sendSms() {
    $.ajax({
        url: '/',
        data: 'geolocation',
        success: function (data) {
            alert(data);
            console.log("shits been done")
            //process the JSON data etc
        }
    })
}


function countDownStopCall() {
    let elem = document.getElementById("progressStop");
    elem.style.display = 'block';
    downloadTimer = setInterval(function () {
        elem.value--;
        if (elem.value <= 0) {
            if (!cyclerIsOk) {
                emergencyCall();
            }
        }
    }, 1000);
}

let HOST = '172.16.1.104';
let PORT = 4280;
let UID = '6QGaJa'; // Change XXYYZZ to the UID of your Servo Brick
const vertical = 9000;
const horizontal = -6816;
let orientation = vertical;

function moveMotor() {
    if (orientation === vertical) {
        orientation = horizontal;
    } else {
        orientation = vertical;
    }

    let ipcon = new Tinkerforge.IPConnection(); // Create IP connection
    let servo = new Tinkerforge.BrickServo(UID, ipcon); // Create device object

    ipcon.connect(HOST, PORT,
        function (error) {
            console.log('Error: ' + error);
        }
    ); // Connect to brickd
    // Don't use device before ipcon is connected
    ipcon.on(Tinkerforge.IPConnection.CALLBACK_CONNECTED,
        function (connectReason) {
            servo.setOutputVoltage(5500);

            servo.setDegree(0, -9000, 9000);
            servo.setPulseWidth(0, 1000, 2000);
            servo.setPeriod(0, 19500);
            servo.setAcceleration(0, 65535); // Slow acceleration
            servo.setVelocity(0, 65535); // Full speed

            servo.enable(0);
            servo.setPosition(0, orientation);

            ipcon.disconnect();
        }
    );
}

const log = false;

let timeStampStart = Date.now();
let amountSamples = 0;
const maxAmountSamples = 10;

let stabilitySamples = [];
let stability = 0;

let sampleLast = {x: 0, y: 0, z: 0, gx: 0, gy: 0, gz: 0};
let samplesTaken = 0;
let samplingRate = 0; // samples per 1s
let samplingTestTime = 1000;
let samplingRateCalculating = true;

let thresholdStabilityCrash = 5;
let thresholdStabilityStability = 0.9;
let lastPossibleCrashTstamp;
const crashTimeInMsec = 3000;

const titltedThreshold = 4;
let cyclerIsOk = true;

function updateStability(x, y, z) {

    let forgetSample = 0;
    if (amountSamples < maxAmountSamples) {
        amountSamples++;
    } else {
        forgetSample = stabilitySamples.shift();
    }
    let newSample = (Math.abs(x - sampleLast.x) + Math.abs(y - sampleLast.y) + Math.abs(z - sampleLast.z)) / amountSamples;
    stabilitySamples.push(newSample);

    stability = stability + newSample - forgetSample;
    sampleLast = {x: x, y: y, z: z};

    if (stability > thresholdStabilityCrash) {
        lastPossibleCrashTstamp = Date.now();
        if (log) document.getElementById('lastPossibleCrashTstamp').innerHTML = '' + lastPossibleCrashTstamp;
        setTimeout(isCrash, crashTimeInMsec);
    }
}


function updateSamplingRate() {
    if (Date.now() - samplingTestTime < timeStampStart) {
        samplesTaken++;
    } else {
        samplingRateCalculating = false;
        samplingRate = samplesTaken * 1000 / samplingTestTime;
    }
}

function deviceMotionHandler(e) {
    if (samplingRateCalculating) {
        updateSamplingRate();
    }

    updateStability(e.acceleration.x, e.acceleration.y, e.acceleration.z);
    sampleLast.gx = e.accelerationIncludingGravity.x;
    sampleLast.gy = e.accelerationIncludingGravity.y;
    sampleLast.gz = e.accelerationIncludingGravity.z;

    let now = Date.now() - timeStampStart;

    if (log) {
        console.log(now + ' x:' + e.acceleration.x + ' y:' + e.acceleration.y + ' z:' + e.acceleration.z);
        document.getElementById('accelX').innerHTML = 'x: ' + e.acceleration.x;
        document.getElementById('accelY').innerHTML = 'y: ' + e.acceleration.y;
        document.getElementById('accelZ').innerHTML = 'z: ' + e.acceleration.z;

        document.getElementById('accelGX').innerHTML = 'x: ' + e.accelerationIncludingGravity.x;
        document.getElementById('accelGY').innerHTML = 'y: ' + e.accelerationIncludingGravity.y;
        document.getElementById('accelGZ').innerHTML = 'z: ' + e.accelerationIncludingGravity.z;

        document.getElementById('stability').innerHTML = 'sampleRate: ' + samplingRate + ' stability: ' + stability;
    }
}

function crashDetected() {
    cyclerIsOk = false;

    showCrashScreen();
    countDownStopCall();
}

function isTilted() {

    let tilteDiff = Math.abs(sampleLast.gx - sampleLast.gy);

    let isTilted = tilteDiff > titltedThreshold;

    if (isTilted) {
        crashDetected();
    }

    if (log) {
        if (isTilted) {
            document.getElementById('titlted').innerHTML = "tilted: " + tilteDiff + " => " + isTilted;
            document.getElementById('titlted').style.color = 'red';
            document.getElementById('titlted').style.fontSize = 50;
        } else {
            document.getElementById('titlted').innerHTML = "tilted: " + tilteDiff + " => " + isTilted;
            document.getElementById('titlted').style.color = 'green';
        }
    }

}

function isCrash() {

    if (stability < thresholdStabilityStability) {
        isTilted();

    } else {
        lastPossibleCrashTstamp = 0;
        if (log) {
            document.getElementById('lastPossibleCrashTstamp').innerHTML = '0';
            document.getElementById('crash').innerHTML = 'nope...';
        }
    }

}


function init() {

    if (window.DeviceMotionEvent) {
        console.log('haz device motion eventz');
        window.addEventListener('devicemotion', deviceMotionHandler);
    } else {
        console.log('crash detection is not supported')
    }

    //document.getElementById('break_emergency').addEventListener('click', hideCrashScreen);
}

init();
