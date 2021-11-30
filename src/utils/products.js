export const countSubTotal = (cartProducts) =>
  cartProducts.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
