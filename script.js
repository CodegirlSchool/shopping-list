document.addEventListener('DOMContentLoaded', function() {
  const input = document.getElementById('input');
  const itemsContainer = document.getElementById('items');
  
  input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      addItem();
    }
  });

  function addItem() {
    const itemText = input.value.trim();
    
    if (itemText === '') return;
    
    const newItem = document.createElement('div');
    newItem.textContent = itemText;
    newItem.classList.add('item');
    
    newItem.addEventListener('click', function() {
      this.classList.toggle('done');
    });
    
    itemsContainer.appendChild(newItem);
    
    input.value = '';
  }

  document.querySelector('.fa-pencil-alt').addEventListener('click', addItem);
});