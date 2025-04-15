export const getTotalPrice = (products = []) =>
  products.reduce((acc, product) => acc + product.price, 0);
