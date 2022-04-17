function solution(){
    let result = '';
    return{
        append: (string) => result += string,
        removeStart: (n) => result = result.slice(n),
        removeEnd: (n) => result = result.slice(0,-n),
        print: () => console.log(result)
    };
}

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();



