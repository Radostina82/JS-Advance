let arr = [{productName:'Oshav', productList: ['Med', 'Plodove']}, {productName:'ja;d', productList : ['a', 'b', 'c']},
 {productName:'pile', productList: ['kartofi', 'piper', 'morkovi']}];
let result = arr.filter(p => p.productName == 'Oshav');
console.log(result);
let {productName, productList} = result[0];
let product = productList

console.log(product);