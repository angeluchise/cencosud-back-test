const products = require('../products/product-service');

getCheckout = () => {
    let getProducts = products.getAllProduct();
    let total = 0;
    let totalDiscount = 0;
    for (let product of getProducts) {
        total += product.price;
        totalDiscount += product.discount;
    }
    return {
        totalProducts: getProducts.length,
        total,
        totalDiscount
    }
}

module.exports = { getCheckout };
  