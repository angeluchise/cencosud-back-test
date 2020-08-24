const products = [
  { code: "BT", name: "blue t-shit", price: 100, discount: 20, images: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg' },
  { code: "RT", name: "red t-shit", price: 100, discount: 0, images: 'https://i.ebayimg.com/images/g/3YgAAOSwcZ1cHLMj/s-l300.jpg' },
  { code: "BJX", name: "blue jeans X", price: 100, discount: 5, images: 'https://store.juventus.com/data/store/product/3/37813/product.jpg' },
  { code: "BJY", name: "blue jeans Y", price: 100, discount: 30, images: 'https://store.juventus.com/data/store/product/3/37813/product.jpg' },
  { code: "BJZ", name: "blue jeans Z", price: 100, discount: 0, images: 'https://store.juventus.com/data/store/product/3/37813/product.jpg' },
];

const getAllProduct = () => products;

const getProductByCode = (code) =>
  products.find((product) => product.code === code);
  
const getProductByCodes = (codes) => {
  let products = [];
  if (typeof codes === 'string') {
    products.push(getProductByCode(codes));
  } else {
    codes.map((code)=> {
      products.push(getProductByCode(code));
    });
  }
  return products;
}

module.exports = { getAllProduct, getProductByCode, getProductByCodes };
