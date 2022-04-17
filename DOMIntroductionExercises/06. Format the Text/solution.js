function solve() {
  const text = document.getElementById('input').value;
  const splittedText = text.split('.').filter((el)=> el.length >= 1);

  let result = '<p>';

  for(let i = 0; i < splittedText.length; i++){
    if(i==0){
      result += splittedText[i] + '.';
    }else{
      if(i % 3 == 0){
        result += '</p>';
        result += splittedText[i] + '.';
      }else{
        
        result += splittedText[i] + '.';
      }}
  }
  result += '</p>';
  document.getElementById('output').innerHTML = result;
  
}