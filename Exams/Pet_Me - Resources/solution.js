function solve() {
    document.querySelector('#container button').addEventListener('click', onClick);
    const [name, age, kind, currentOwner] = 
    document.getElementsByTagName('input');
    const pepList = document.getElementById('adoption').children[1];
    const adoptedList = document.querySelector('#adopted ul');
    function onClick(e){
        e.preventDefault();

        if (!(name.value && Number(age.value) && kind.value && currentOwner.value)) {
            return;
        }   

            const li = document.createElement('li');
            const para = document.createElement('p');
            const strongName = document.createElement('strong');
            strongName.textContent = name.value;
            para.appendChild(strongName);

            const strongText = document.createElement('strong');
            strongText.textContent = ` is a `;
            para.appendChild(strongText);

            const strongAge = document.createElement('strong');
            strongAge.textContent = age.value;
            para.appendChild(strongAge);

            const strongText1 = document.createElement('strong');
            strongText1.textContent = ` year old `;
            para.appendChild(strongText1);

            const strongkind = document.createElement('strong');
            strongkind.textContent = kind.value;
            para.appendChild(strongkind);

            li.appendChild(para);

            const span = document.createElement('span');
            span.textContent = `Owner: ${currentOwner.value}`;

            li.appendChild(span);

            let contactBtn = document.createElement('button');
            contactBtn.textContent = 'Contact with owner';

            li.appendChild(contactBtn);
            pepList.appendChild(li);

            name.value = '';
            age.value = '';
            kind.value = '';
            currentOwner.value = '';
            contactBtn.addEventListener('click', makeContact);
    }

    function makeContact(e){
       const parent = e.target.parentElement;
       e.target.remove();
      
       
       const div = document.createElement('div');
        const input = document.createElement('input');
        input.setAttribute('placeholder', 'Enter yuor names');
        div.appendChild(input);
        const btnTake = document.createElement('button');
        btnTake.textContent = 'Yes! I take it!';

        div.appendChild(btnTake);

        parent.appendChild(div);

        btnTake.addEventListener('click', (e) => {
            if(!input.value){
                return;
            }
            e.target.textContent = 'Checked';
          // console.log(e.target.parentElement.parentElement);
            //console.log(e.target.parentElement)
         adoptedList.appendChild(e.target.parentElement.parentElement);
           //const newBtn = e.target;
          // console.log(newBtn);
           //e.target.parentElement.parentElement.getElementsByTagName('p')[0].appendChild(newBtn);
          // console.log(p);
           
           const span = e.target.parentElement.parentElement.querySelector('span');
            span.textContent = `New Owner: ${input.value}`;
            const chekedBtn = document.createElement('button');
            chekedBtn.textContent = 'Checked';
            e.target.parentElement.parentElement.appendChild(chekedBtn); 
            e.target.parentElement.remove();

            chekedBtn.addEventListener('click', (ev)=>{
                ev.target.parentElement.remove();
            })
        })

    }
}

