function addItem() {
    document.querySelector('input[type="button"]').addEventListener('click', onClick);

    function onClick(ev){
        const parent = ev.target.parentElement;
        const text = document.getElementById('newItemText');
        const val = document.getElementById('newItemValue');
      /*  const obj = {
            text: val
        };*/

        const option = document.createElement('option');
        option.textContent = text.value + ' ' + val.value;
        document.getElementById('menu').appendChild(option);
        text.value = '';
        val.value = '';
    }
}