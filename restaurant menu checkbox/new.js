var bodyline = document.querySelector("#main-line");
var totalline = document.querySelector("#total-line");
var buttons = document.querySelectorAll(".btn");
var total = 0;
var j = 1;
var array = [];

function addcart() {
    total = 0;
    array = [];
    bodyline.innerHTML = "";
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].checked) {
            var name = buttons[i].name;
            var price = buttons[i].value;
            var idx = buttons[i].id;
            var object = {
                Name: name,
                Price: price,
                Id: idx,
                Qun: j,
                // Sum: price * j,
            };

            array.push(object);
            console.log(array);
        }
        display();
    }
}

function display() {
    total = 0;
    bodyline.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        bodyline.innerHTML += `
        <tr class="table-row" height="35px">
        <td>${array[i].Name}</td>
        <td>${array[i].Price}</td>
        <td><button onclick="substract(${i})" class="qunbtn"> -- </button> <span>${array[i].Qun}</span> <button onclick="addition(${i})" class="qunbtn"> + </button></td> 
        <td><button class="delete-btn" onclick="removeitem(${i})">Delete</button></td>
        </tr>
        `;
        total += array[i].Price * array[i].Qun;
        // total+=array[i].Sum*array[i].Qun;
        // console.log(total);

        totalline.innerHTML = `
        <tr class="table-row" height="35px">
        <td><u>TOTAL</u></td>
        <td><u>${total}</u></td> 
        </tr>
        `
    }
}

function addition(i) {
    array[i].Qun++;
    display();
}

function substract(i) {
    if (array[i].Qun > 1) {
        array[i].Qun--;
        display();
    }
}

function removeitem(i) {
    // console.log(i);
    // console.log(array[i].Id);
    document.getElementById(array[i].Id).checked = false;
    array.splice(i, 1);
    display();
}
