function generateReport() {
   const table = Array.from(document.getElementsByTagName('input')); 
   const rows = Array.from(document.getElementsByTagName('tr'));
    let result = [];
    let cols = [];//си пазя индексите на чекнатите колони

   for(const tabl of table){
    if(tabl.checked){
        let indx = table.indexOf(tabl);
        cols.push(indx);
    }   
   }
  for(let i = 1; i < rows.length; i++){
      let rowChild = rows[i].children;
      let obj = {};
      for(const col of cols){
        let propertyName = table[col].name;
        obj[propertyName] = rowChild[col].textContent;  
      }
      result.push(obj);
  }
  document.getElementById('output').value = JSON.stringify(result);
}

