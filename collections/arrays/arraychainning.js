const products = [
    {name: 'gold star', price: 30},
    {name: 'red flower', price: 10},
    {name: 'red dress', price: 40},
    {name: 'red scarf', price: 5},
    {name: 'gold mirror', price: 50}
  ];
  
  // const filtered = products.filter(product => product.price > 20);
  
  // const promos = filtered.map(product => {
  //   return `the ${product.name} is ${product.price / 2} pounds`;
  // });
  
  const promos = products
    .filter(product => product.price > 20)
    .map(product => `the ${product.name} is ${product.price / 2} pounds`);
  
  console.log(promos);