COBI.init('this will all end in tears');

function crash() {
    setCrashed();
    countDownStopCall();
}

function setCrashed() {
    let elem = document.getElementById("txtSimCrash");
    if (elem.style.display === "none") {
        elem.style.display = "block";
    } else {
        elem.style.display = "none";
    }
}

function sendSms() {
    $.ajax({
        url: 'https://rest.nexmo.com/sms/json',
        data:'api_key=e8901200\r\napi_secret=R27HlB3Bm3hYcOU1\r\nto=491726003723\r\nfrom="NEXMO"\r\ntext="Hello from Nexmo"',
        success: function(data){
            alert(data);
            console.log("shits been done")
            //process the JSON data etc
        }
    })
}

function countDownStopCall() {
    let elem = document.getElementById("progressStop");

    var downloadTimer = setInterval(function(){
        elem.value --;
        if(elem.value <= 0) {
            clearInterval(downloadTimer);
            sendSms();
        }
    },1000);
}