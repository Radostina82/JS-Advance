function addItem() {
   const item = document.getElementById('newItemText').value;
   const li = document.createElement('li');
   li.textContent = item;
   document.getElementById('items').appendChild(li);
   document.getElementById('newItemText').value = '';
}