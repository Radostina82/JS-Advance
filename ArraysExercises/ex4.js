function solve(arr, count) {
    for (let i = 0; i < count; i++) {
        let element = arr.pop();
        arr.unshift(element);
    }
    console.log(arr.join(" "));
}

solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
);