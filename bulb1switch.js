i = 0;
function light() {
    if (i % 2 == 0) {
        document.getElementById('bulb').src = "./img/onb.jpg";
        i++;
        document.getElementById('btnbulb').innerHTML = "OFF";
    }
    else {
        document.getElementById('bulb').src = "./img/offb.png";
        i++;
        document.getElementById('btnbulb').innerHTML = "ON";
    }
}