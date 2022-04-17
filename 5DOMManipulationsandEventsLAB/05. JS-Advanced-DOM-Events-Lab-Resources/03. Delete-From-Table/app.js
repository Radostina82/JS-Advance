function deleteByEmail() {
    const text = document.getElementsByName('email')[0];
    const table = document.querySelector('tbody').children;
    const result = document.getElementById('result');
    let isFound = false;
    for(row of Array.from(table)){
    if(row.children[1].textContent == text.value){
    row.remove();
    isFound = true;
    }
}
if(isFound){
    result.textContent = 'Deleted';
}else{
    result.textContent = 'Not found.';

}
}