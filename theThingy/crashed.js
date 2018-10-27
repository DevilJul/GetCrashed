// COBI.init('this will all end in tears');

function deviceOrientationHandler() {

}

function deviceMotionHandler(e) {
    if (e.acceleration.x > 0.1 || e.acceleration.y > 0.1 || e.acceleration.z > 0.1) {
        //let sum = Math.abs(e.acceleration.x) + Math.abs(e.acceleration.y) + Math.abs(e.acceleration.z);
        //console.log('möp ' + sum);
        document.getElementById('accelX').innerHTML = 'x: ' +e.acceleration.x;
        document.getElementById('accelY').innerHTML = 'y: ' + e.acceleration.y;
        document.getElementById('accelZ').innerHTML = 'z: ' + e.acceleration.z;

        document.getElementById('accelGX').innerHTML = 'x: ' + e.accelerationIncludingGravity.x;
        document.getElementById('accelGY').innerHTML = 'y: ' +e.accelerationIncludingGravity.y;
        document.getElementById('accelGZ').innerHTML = 'z: ' +e.accelerationIncludingGravity.z;

    }
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