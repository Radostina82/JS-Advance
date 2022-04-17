function previousDay(year, month, day){
    let newDay =new Date(year, month-1, day);
    newDay.setDate(newDay.getDate() - 1);
    let m = newDay.getMonth()+1;
    let result = newDay.getFullYear() + '-' + m + '-' + newDay.getDate();
    
    console.log(result);
}

previousDay(2016, 9, 30);