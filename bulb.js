// const bton = document.getElementById('onbulb');
// const bton1= document.getElementById('offbulb');

// function onclick(){
//     document.querySelector('img').src='onb.jpg'
// }

// function offclick() {
//     document.querySelector('img').src='offb.png'
// }

// bton.addEventListener('click',onclick);
// bton1.addEventListener('click',offclick);



// 2nd

function light(show) {
    var picture;
    if (show == 0) {
        picture = "./img/offb.png";
    }
    else {
        picture = "./img/onb.jpg";
    }
    document.getElementById('bulb').src = picture;
}