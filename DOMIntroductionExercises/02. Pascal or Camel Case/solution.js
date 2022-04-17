function solve() {
  const text = document.getElementById('text').value;
  const converting = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');
  let output = '';
  if(converting == "Camel Case"){
    let arr = text.split(' ');
    for(let i=0; i<arr.length; i++){
      if(i==0){
        output += arr[i].toLowerCase();
      }else{
        output += arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
      }
    }
  }else if(converting == "Pascal Case" ){
    let arr = text.split(' ');
    for(let i=0; i<arr.length; i++){
        output += arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
  }
}else{
    output = 'Error!';
  }
  result.textContent = output;
}
