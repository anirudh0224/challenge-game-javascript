
let click = 1;
function box(inx) {
    let value = document.getElementsByTagName("button")[inx].innerHTML;
    if (!value) {
        document.getElementsByTagName("button")[inx].innerHTML =
            click % 2 == 0 ? '0' : 'x';
        click++;
        document.getElementsByTagName('button')[inx].style.backgroundColor = "white";
    }
    let btn0 = document.getElementsByTagName('button')[0].innerHTML;
    let btn1 = document.getElementsByTagName('button')[1].innerHTML;
    let btn2 = document.getElementsByTagName('button')[2].innerHTML;
    let btn3 = document.getElementsByTagName('button')[3].innerHTML;
    let btn4 = document.getElementsByTagName('button')[4].innerHTML;
    let btn5 = document.getElementsByTagName('button')[5].innerHTML;
    let btn6 = document.getElementsByTagName('button')[6].innerHTML;
    let btn7 = document.getElementsByTagName('button')[7].innerHTML;
    let btn8 = document.getElementsByTagName('button')[8].innerHTML;

    if (
        (btn0 == 'x' && btn1 == 'x' && btn2 == 'x') ||
        (btn3 == 'x' && btn4 == 'x' && btn5 == 'x') ||
        (btn6 == 'x' && btn7 == 'x' && btn8 == 'x') ||
        (btn0 == 'x' && btn3 == 'x' && btn6 == 'x') ||
        (btn1 == 'x' && btn4 == 'x' && btn7 == 'x') ||
        (btn2 == 'x' && btn5 == 'x' && btn8 == 'x') ||
        (btn0 == 'x' && btn4 == 'x' && btn8 == 'x') ||
        (btn2 == 'x' && btn4 == 'x' && btn6 == 'x')
    ) {
        alert("X is winner");
        // document.getElementById('winner').innerHTML=<></>
    }
    if (
        (btn0 == '0' && btn1 == '0' && btn2 == '0') ||
        (btn3 == '0' && btn4 == '0' && btn5 == '0') ||
        (btn6 == '0' && btn7 == '0' && btn8 == '0') ||
        (btn0 == '0' && btn3 == '0' && btn6 == '0') ||
        (btn1 == '0' && btn4 == '0' && btn7 == '0') ||
        (btn2 == '0' && btn5 == '0' && btn8 == '0') ||
        (btn0 == '0' && btn4 == '0' && btn8 == '0') ||
        (btn2 == '0' && btn4 == '0' && btn6 == '0')
    ) {
        alert("0 is winner");
    }
}

function reset() {
    document.getElementsByTagName("button")[0].innerHTML = "";
    document.getElementsByTagName("button")[1].innerHTML = "";
    document.getElementsByTagName("button")[2].innerHTML = "";
    document.getElementsByTagName("button")[3].innerHTML = "";
    document.getElementsByTagName("button")[4].innerHTML = "";
    document.getElementsByTagName("button")[5].innerHTML = "";
    document.getElementsByTagName("button")[6].innerHTML = "";
    document.getElementsByTagName("button")[7].innerHTML = "";
    document.getElementsByTagName("button")[8].innerHTML = "";
    document.getElementsByTagName("button").innerHTML = "";
    // document.getElementById("winner").innerHTML = "";   
}

