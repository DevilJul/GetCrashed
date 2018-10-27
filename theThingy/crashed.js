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
const log = false;

let timeStampStart = Date.now();
let amountSamples = 0;
const maxAmountSamples = 10;

let stabilitySamples = [];
let stability = 0;

let sampleLast = {x: 0, y: 0, z: 0, gx: 0, gy: 0, gz: 0 };
let samplesTaken = 0;
let samplingRate = 0; // samples per 1s
let samplingTestTime = 1000;
let samplingRateCalculating = true;

let thresholdStabilityCrash = 5;
let thresholdStabilityStability = 0.9;
let lastPossibleCrashTstamp;
const crashTimeInMsec = 3000;

const titltedThreshold = 4;

function deviceOrientationHandler() {

}

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

    document.getElementById('fancycrash').innerHTML = '<img src="crash_img.jpg" />';

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
}

init();
