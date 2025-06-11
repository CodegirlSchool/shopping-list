const container = document.querySelector(".container");
const input = document.querySelector("#input");
const items = document.querySelector("#items");

function addItem() {
    const itemText = input.value.trim();
    if (itemText !== '') {
        const listitem = document.createElement('li');
        listitem.textContent = itemText;
        listitem.addEventListener('click', function() {
            listitem.classList.toggle('done');
        });
        items.appendChild(listitem);
        input.value = '';
    }
}

input.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        addItem();
    }

});
