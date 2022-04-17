function search() {
  const elements =Array.from(document.getElementById('towns').children);
  const text = document.getElementById('searchText').value;
  let count = 0;
  for(let element of elements){
     if(element.innerHTML.includes(text)){
        element.style.fontWeight = 'bold';
        element.style.textDecoration = 'underline';
        count++;
     }else{
        element.style.fontWeight = 'normal';
        element.style.textDecoration = '';
     }
  }
  document.getElementById('result').textContent = `${count} matches found`;
}
