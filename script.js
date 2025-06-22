/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */

const input = document.querySelector('#input');
const massagesContainer = document.querySelector('.items');    


input.addEventListener('keydown', function (event){
if (event.key == 'Enter') {
const messageText = input.value;

const newElement = document.creatElement('p');
newElement.addEventListener('click', function(){
  newElement.classList.add('done');
  newElement.classList.toggle('done');

})
newMessage.classList.add('items');
newMessage.textContent = messageText;

if(messageText != '') {
massagesContainer.append(newMessage);
}


input.value = '';   


}})






                

