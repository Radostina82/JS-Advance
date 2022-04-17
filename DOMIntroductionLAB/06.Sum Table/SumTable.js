function sumTable() {
//const rows = document.getElementsByTagName('tr');
const rows = document.querySelectorAll('table tr');

let sum = 0;

for(let i = 1; i < rows.length; i++){
    let element = rows[i].children[1].textContent;
    sum += Number(element);
}
    document.getElementById('sum').textContent = sum;
}