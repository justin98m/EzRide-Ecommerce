import data from '../products.json' assert {type: 'json'};

let products = data.products;
console.log(products);
products.forEach(product => {
  console.log(product.name);
  console.log(product.description);
  console.log(product.price);
});
