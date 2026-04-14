// Write your code here
const products = ["Laptop", "Phone", "Headphones", "Monitor"];

function logFirstProduct() {
  function logFirstProduct() {
    console.log(products[0]);
  }
}

function updateProductName(index, newName) {
const oldName = products[index];
products[index] = newName;
console.log(`Updated product at index ${index} from "${oldName}" to "${newName}".`);
}

function removeLastProduct() {
  products.pop();
  console.log("products");
}

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
