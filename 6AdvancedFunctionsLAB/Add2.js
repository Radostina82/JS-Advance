function solution(a){
    function add(b){
return a+b;
    }
    return add;
}


let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
