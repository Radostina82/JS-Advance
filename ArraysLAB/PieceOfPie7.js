function pieceOfPie(arr, str1, str2){
    let firstIndex = arr.indexOf(str1);
    let secondIndex = arr.indexOf(str2);

    const newArr = arr.slice(firstIndex, secondIndex +1);
    return newArr;
}

console.log(pieceOfPie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
));