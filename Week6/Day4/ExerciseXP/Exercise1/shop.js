const products = require('./products');

function findProductByName(productName) {
  const product = products.find(p => p.name.toLowerCase() === productName.toLowerCase());
  
  if (product) {
    console.log(`Product Found:\nName: ${product.name}\nPrice: $${product.price}\nCategory: ${product.category}\n`);
  } else {
    console.log(`Product "${productName}" not found.\n`);
  }
}

findProductByName("Laptop");
findProductByName("Desk Chair");
findProductByName("Smartphone"); 
