
const btn = document.getElementById('Click');
const btns = document.getElementsByTagName('button');
// function box(val) {
//     // console.log('call mee');
//    
// }

let arr = [];
function onClick() {


    for (let i = 0; arr.length != 8; i++) {
        let num = Math.floor(Math.random() * 8) + 1;
        // console.log(num);
        if (!arr.includes(num)) {

            arr.push(num);
        }
    }
    console.log(arr);

    for (let i = 0; i < arr.length; i++) {
        btns[i].innerText = arr[i];
    }
}

function fun7() {
    let a = document.getElementById('8').innerText;
    let b = document.getElementById('6').innerText;
    let c = document.getElementById('7').innerText;
    let d = document.getElementById('4').innerText;
    if (b == '') {
        document.getElementById('6').innerText = c;
        document.getElementById('7').innerText = b;

    } else if (a == '') {
        document.getElementById('8').innerText = c;
        document.getElementById('7').innerText = a;
    }
    else if (d == '') {
        document.getElementById('4').innerText = c;
        document.getElementById('7').innerText = d;
    }

}

function fun3() {
    let a = document.getElementById('0').innerText;
    let b = document.getElementById('4').innerText;
    let c = document.getElementById('3').innerText;
    let d = document.getElementById('6').innerText;
    if (b == '') {
        document.getElementById('4').innerText = c;
        document.getElementById('3').innerText = b;

    } else if (a == '') {
        document.getElementById('0').innerText = c;
        document.getElementById('3').innerText = a;
    }
    else if (d == '') {
        document.getElementById('6').innerText = c;
        document.getElementById('3').innerText = d;
    }

}


function fun1() {
    let a = document.getElementById('0').innerText;
    let b = document.getElementById('2').innerText;
    let c = document.getElementById('1').innerText;
    let d = document.getElementById('4').innerText;
    if (b == '') {
        document.getElementById('2').innerText = c;
        document.getElementById('1').innerText = b;

    } else if (a == '') {
        document.getElementById('0').innerText = c;
        document.getElementById('1').innerText = a;
    }
    else if (d == '') {
        document.getElementById('4').innerText = c;
        document.getElementById('1').innerText = d;
    }

}

function fun5() {
    let a = document.getElementById('2').innerText;
    let b = document.getElementById('4').innerText;
    let c = document.getElementById('5').innerText;
    let d = document.getElementById('8').innerText;
    if (b == '') {
        document.getElementById('4').innerText = c;
        document.getElementById('5').innerText = b;

    } else if (a == '') {
        document.getElementById('2').innerText = c;
        document.getElementById('5').innerText = a;
    }
    else if (d == '') {
        document.getElementById('8').innerText = c;
        document.getElementById('5').innerText = d;
    }

}

function fun6() {
    let a = document.getElementById('3').innerText;
    let b = document.getElementById('7').innerText;
    let c = document.getElementById('6').innerText;
    if (a == '') {
        document.getElementById('3').innerText = c;
        document.getElementById('6').innerText = a;
    }
    else if (b == '') {
        document.getElementById('7').innerText = c;
        document.getElementById('6').innerText = b;
    }
}

function fun8() {
    let a = document.getElementById('5').innerText;
    let b = document.getElementById('7').innerText;
    let c = document.getElementById('8').innerText;
    if (a == '') {
        document.getElementById('5').innerText = c;
        document.getElementById('8').innerText = a;
    }
    else if (b == '') {
        document.getElementById('7').innerText = c;
        document.getElementById('8').innerText = b;
    }
}

function fun0() {
    let a = document.getElementById('1').innerText;
    let b = document.getElementById('3').innerText;
    let c = document.getElementById('0').innerText;
    if (a == '') {
        document.getElementById('1').innerText = c;
        document.getElementById('0').innerText = a;
    }
    else if (b == '') {
        document.getElementById('3').innerText = c;
        document.getElementById('0').innerText = b;
    }
}

function fun2() {
    let a = document.getElementById('1').innerText;
    let b = document.getElementById('5').innerText;
    let c = document.getElementById('2').innerText;
    if (a == '') {
        document.getElementById('1').innerText = c;
        document.getElementById('2').innerText = a;
    }
    else if (b == '') {
        document.getElementById('5').innerText = c;
        document.getElementById('2').innerText = b;
    }
}


function fun4(){
    let a = document.getElementById('1').innerText;
    let b = document.getElementById('3').innerText;
    let c = document.getElementById('5').innerText;
    let d = document.getElementById('7').innerText;
    let e = document.getElementById('4').innerText;

    if(a == ''){
        document.getElementById('1').innerText = e;
        document.getElementById('4').innerText = a;
    }
    else if(b == ''){
        document.getElementById('3').innerText = e;
        document.getElementById('4').innerText = b;
    }
    else if(c == ''){
        document.getElementById('5').innerText = e;
        document.getElementById('4').innerText = c;
    }
    else if(d == ''){
        document.getElementById('7').innerText = e;
        document.getElementById('4').innerText = d;
    }
}

btn.addEventListener('click', onClick);


document.getElementById('7').addEventListener('click', fun7);
document.getElementById('6').addEventListener('click', fun6);
document.getElementById('8').addEventListener('click', fun8);
document.getElementById('0').addEventListener('click', fun0);
document.getElementById('2').addEventListener('click', fun2);
document.getElementById('1').addEventListener('click', fun1);
document.getElementById('3').addEventListener('click', fun3);
document.getElementById('5').addEventListener('click', fun5);
document.getElementById('4').addEventListener('click', fun4);


