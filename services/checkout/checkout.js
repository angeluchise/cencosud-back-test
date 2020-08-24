const products = require('../products/product-service');


calcPercentage = (price, percentage) => {
    return price - Math.ceil(price * (percentage / 100));
}

getCheckout = (ids) => {
    let getProducts = products.getProductByCodes(ids);
    let total = 0;
    let totalDiscount = 0;
    for (let product of getProducts) {
        total += product.price;
        totalDiscount += product.discount;
    }
    return {
        product: getProducts,
        total,
        totalDiscount,
        totalToPay: calcPercentage(total, totalDiscount),
    }
}

module.exports = { getCheckout };
  