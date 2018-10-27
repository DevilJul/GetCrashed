COBI.init('this will all end in tears');

function setCrashed() {
    let elem = document.getElementById("txtSimCrash");
    if (elem.style.display === "none") {
        elem.style.display = "block";
    } else {
        elem.style.display = "none";
    }
}