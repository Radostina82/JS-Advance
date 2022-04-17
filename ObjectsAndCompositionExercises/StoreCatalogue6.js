function storeCatalog(arr){
    const productCataloge = {};
  arr.forEach((element) => {
       let [product, price] = element.split(' : ');
       price = Number(price);

       const index = product[0];
       if(!productCataloge[index]){
            productCataloge[index] = {};
       }
       productCataloge[index][product] = price;
  });
  let initialSort = Object.keys(productCataloge).sort((a,b) => a.localeCompare(b));
  
  for(const key of initialSort){
       let products = Object.entries(productCataloge[key]).sort((a,b) => a[0].localeCompare(b[0]));
       console.log(key);
       products.forEach(el => {
            console.log(`  ${el[0]}: ${el[1]}`);
       });

  }
}

storeCatalog(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);