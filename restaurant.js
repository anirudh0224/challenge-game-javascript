document.querySelectorAll('.item-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        const row = this.closest('tr');
        const price = parseInt(row.querySelector('td[data-price]').getAttribute('data-price'));
        const imgSrc = row.querySelector('img').src;
        const name = row.querySelector('.item-menu').innerText;
        const description = row.querySelectorAll('td')[3].innerText;

        if (this.checked) {
            addToBill(imgSrc, name, price, description);
        } else {
            removeFromBill(name, price);
        }
    });
});

function addToBill(imgSrc, name, price, description) {
    const billTable = document.getElementById('billTable');
    const totalRow = document.getElementById('totalRow'); // Add an id to the total row in your HTML
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
<td align='center'><img src="${imgSrc}" width="100px" height="100px" alt=""></td>
<td align='center'>${name}</td>
<td align='center' data-price="${price}">${price}</td>
<td align='center'>${description}</td>
<td align='center'><button class="remove-btn">Remove</button></td>
`;
    billTable.insertBefore(newRow, totalRow); // Insert the new row above the total row

    newRow.querySelector('.remove-btn').addEventListener('click', function () {
        removeFromBill(name, price);
        newRow.remove();
    });

    updateTotal(price);
}

function removeFromBill(name, price) {
    const checkboxes = document.querySelectorAll('.item-checkbox');
    checkboxes.forEach(checkbox => {
        const row = checkbox.closest('tr');
        if (row.querySelector('.item-menu').innerText === name) {
            checkbox.checked = false;
        }
    });
    updateTotal(-price);
}

function updateTotal(amount) {
    const totalPriceElement = document.getElementById('total-price');
    let total = parseInt(totalPriceElement.innerText);
    total += amount;
    totalPriceElement.innerText = total;
}