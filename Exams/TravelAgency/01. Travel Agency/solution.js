window.addEventListener('load', solution);

function solution() {
const fullName = document.getElementById('fname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const address = document.getElementById('address');
const postCode = document.getElementById('code');
const buttonSubmit = document.getElementById('submitBTN');
const infoPreview = document.getElementById('infoPreview');
const idBlock = document.getElementById('block');
const btnEdit = document.getElementById('editBTN');
const btnContinue = document.getElementById('continueBTN');

buttonSubmit.addEventListener('click', onSubmit);

function onSubmit(ev){
  ev.preventDefault();
  if(fullName.value.trim() == '' || email.value.trim() == '' ){
    return;
  }
  buttonSubmit.disabled = true;
  btnEdit.disabled = false;
  btnContinue.disabled = false;

  const liFullName = document.createElement('li');
  liFullName.textContent = 'Full Name: ' + fullName.value.trim();
  const liEmail = document.createElement('li');
  liEmail.textContent = 'Email: ' + email.value.trim();
  const liPhone = document.createElement('li');
  liPhone.textContent = 'Phone Number: ' + phone.value.trim();
  const liAdress = document.createElement('li');
  liAdress.textContent ='Address: ' + address.value.trim();
  const liCode = document.createElement('li');
  liCode.textContent = 'Postal Code: ' + postCode.value.trim();

  infoPreview.appendChild(liFullName);
  infoPreview.appendChild(liEmail);
  infoPreview.appendChild(liPhone);
  infoPreview.appendChild(liAdress);
  infoPreview.appendChild(liCode);

  fullName.value = '';
  email.value = '';
  phone.value = '';
  address.value = '';
  postCode.value = '';

  btnEdit.addEventListener('click', (ev)=>{
    ev.preventDefault();
    const ulArr = Array.from(infoPreview.children);
    fullName.value = ulArr[0].textContent.split(': ')[1];
    email.value = ulArr[1].textContent.split(': ')[1];
    phone.value = ulArr[2].textContent.split(': ')[1];
    address.value = ulArr[3].textContent.split(': ')[1];
    postCode.value = ulArr[4].textContent.split(': ')[1];

  
    while(infoPreview.firstChild){
      infoPreview.removeChild(infoPreview.firstChild)
    }    

    buttonSubmit.disabled = false;
    btnEdit.disabled = true;
    btnContinue.disabled = true;
  });

  btnContinue.addEventListener('click', (ev)=>{
    ev.preventDefault();
    
    while(idBlock.firstChild){
      idBlock.removeChild(idBlock.firstChild);
    }

    const h3 = document.createElement('h3');
    h3.textContent = 'Thank You For Yuor Reservation!'
    idBlock.appendChild(h3);  
  });

  
}

}
