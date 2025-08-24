const input = document.querySelector("#input");
const allItems = document.querySelector("#items");

function addItem() {
const item = document.createElement("h2")
item.textContent = `— ${input.value}`;

item.addEventListener("click", function () {
item.classList.toggle("done");
});

if (input.value != "") {
allItems.appendChild(item);
}
      input.value = "";
}

input.addEventListener("keydown", function(event) {
if (event.key == "Enter") {
addItem();
}
});
     
            
            
/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */
