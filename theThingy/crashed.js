// COBI.init('this will all end in tears');

let timeStampStart = Date.now();
let amountSamples = 0;
const maxAmountSamples = 10;

let stabilitySamples = [];
let stability = 0;

let sampleLast = {x: 0, y: 0, z: 0 };
let samplesTaken = 0;
let samplingRate = 0; // samples per 1s
let samplingTestTime = 1000;
let samplingRateCalculating = true;

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
    sampleLast = {x: x, y: y, z: z };
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
    let now = Date.now() - timeStampStart;

    // if (now > 10000) return;

    console.log(now + ' x:' + e.acceleration.x + ' y:' + e.acceleration.y + ' z:' + e.acceleration.z);
    document.getElementById('accelX').innerHTML = 'x: ' + e.acceleration.x;
    document.getElementById('accelY').innerHTML = 'y: ' + e.acceleration.y;
    document.getElementById('accelZ').innerHTML = 'z: ' + e.acceleration.z;

    document.getElementById('accelGX').innerHTML = 'x: ' + e.accelerationIncludingGravity.x;
    document.getElementById('accelGY').innerHTML = 'y: ' + e.accelerationIncludingGravity.y;
    document.getElementById('accelGZ').innerHTML = 'z: ' + e.accelerationIncludingGravity.z;

    document.getElementById('stability').innerHTML = 'sampleRate: ' + samplingRate + ' stability: ' + stability  ;

    //}
}


function init() {

    if (window.DeviceMotionEvent) {
        console.log('haz device motion eventz');
        window.addEventListener('devicemotion', deviceMotionHandler);
        //setTimeout(stopJump, 3*1000);
    } else {
        console.log('crash detection is not supported')
    }

}

init();