function create(words) {
  const element = document.getElementById('content');

  for(let word of words){
     let div = document.createElement('div');
     let para = document.createElement('p');
     para.textContent = word;
     
     div.appendChild(para);
     para.style.display = 'none';
     element.appendChild(div);
  }
  element.addEventListener('click', onClick);

function onClick(ev){
    ev.target.children[0].style.display = '';
   }
}