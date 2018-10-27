// COBI.init('this will all end in tears');

function deviceOrientationHandler() {

}

function deviceMotionHandler(e) {
    if (e.acceleration.x > 0.1 || e.acceleration.y > 0.1 || e.acceleration.z > 0.1) {
        console.log(e.acceleration.x + ',' + e.acceleration.y + ',' + e.acceleration.z);
    }
}

function init() {
    if (window.DeviceOrientationEvent) {
        console.log('haz orientation eventz');
        window.addEventListener('deviceorientation', deviceOrientationHandler, false);
    }

    if (window.DeviceMotionEvent) {
        console.log('haz device motion eventz');
        window.addEventListener('devicemotion', deviceMotionHandler);
        //setTimeout(stopJump, 3*1000);
    }

}

init();