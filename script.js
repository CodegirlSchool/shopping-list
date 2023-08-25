/* Новые элементы должны добавляться в список по нажатию на Enter */
const sendInput = document.querySelector('#input');
const sendItems = document.querySelector('#items');

sendInput.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        const itemText = sendInput.value;
    
        const itemNew = document.createElement('div');
        itemNew.classList.add('element');
        itemNew.textContent = itemText;

}
});


        // itemNew.addEventListener('click', function () {
        // itemNew.classList.toggle('done'); 

        // sendInput.value = '';
    
       

    




/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */
