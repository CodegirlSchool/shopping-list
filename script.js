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
/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */