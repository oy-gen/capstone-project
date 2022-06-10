import useStore from '../hooks/useStore';

export function GetProductSum(id, price) {
  const productsInCart = useStore(state => state.CART);
  const products = useStore(state => state.products);
  const productFromCart = productsInCart.find(product => product.id === id);
  const quantity = productFromCart?.quantity ?? 0;
  const productSum = quantity * price;
  return productSum;
}

export function GetSubTotal() {
  const productsInCart = useStore(state => state.CART);
  const products = useStore(state => state.products);

  let price = 0;
  productsInCart.forEach(product => {
    const currentProduct = products.find(
      product_ => product_.id === product.id
    );
    const productSum = currentProduct.WSprice * product.quantity;
    price += productSum;
    // same as: price = price + productSum
  });
  return price;
}
