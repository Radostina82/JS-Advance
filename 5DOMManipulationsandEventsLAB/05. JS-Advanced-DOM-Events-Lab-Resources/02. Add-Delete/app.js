function addItem() {
    const item = document.getElementById('newItemText').value;
    const li = document.createElement('li');
    li.textContent = item;
    const button = document.createElement('a');
    button.href = '#';
    button.textContent = '[Delete]';
    button.addEventListener('click', removeElement);

    li.appendChild(button);

    document.getElementById('items').appendChild(li);
    document.getElementById('newItemText').value = '';

    function removeElement(ev){
        const parent = ev.target.parentNode;
        parent.remove();
    }
}