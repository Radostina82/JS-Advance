function solution() {
   let input =document.querySelector('input');
   let ulElement = document.querySelector('.card ul');
   document.querySelector('div button').addEventListener('click', addGift);

   function addGift(ev){
    ev.preventDefault();

    const liElement = document.createElement('li');
    liElement.setAttribute('class', 'gift');
    liElement.textContent = input.value;
    const btnSend = document.createElement('button');
    btnSend.textContent = 'Send';
    btnSend.setAttribute('class', 'sendButton');
    const btnDiscard = document.createElement('button');
    btnDiscard.textContent = 'Discard';
    btnDiscard.setAttribute('class', 'discardButton');

    liElement.appendChild(btnSend);
    liElement.appendChild(btnDiscard);

    ulElement.appendChild(liElement);

    let listOfGifts = Array.from(ulElement.querySelectorAll('li'));
    listOfGifts.sort((g1,g2)=> g1.textContent.localeCompare(g2.textContent));
    while(ulElement.firstChild){
        ulElement.firstChild.remove();
    }

    for(const gift of listOfGifts){
        ulElement.appendChild(gift);
    }
    input.value = '';

    btnSend.addEventListener('click', ev=>{
        ev.preventDefault();

        const ulSendElement = document.getElementsByTagName('section')[2].children[1];
        ev.target.remove();
        btnDiscard.remove();
        ulSendElement.appendChild(liElement);

        
    });
    btnDiscard.addEventListener('click', ev=>{
        ev.preventDefault();
        const ulDiscardElement = document.getElementsByTagName('section')[3].children[1];
        //ev.target.remove();
        btnDiscard.remove();
        btnSend.remove();
        ulDiscardElement.appendChild(liElement);
    });
   }
}