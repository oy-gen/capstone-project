import useStore from '../hooks/useStore';

export function GetProductSum(id, WSprice) {
  const productsInCart = useStore(state => state.CART);
  const productFromCart = productsInCart.find(product => product.id === id);
  const quantity = productFromCart?.quantity ?? 0;
  const productSum = quantity * WSprice;
  return productSum;
}

export function GetTotals() {
  const productsInCart = useStore(state => state.CART);
  const products = useStore(state => state.products);
  const seller = useStore(state => state.seller);
  const buyer = useStore(state => state.buyer);

  let subTotalPrice = 0;
  let productSum = 0;
  productsInCart.forEach(productInCart => {
    const currentProduct = products.find(
      product => product.id === productInCart.id
    );
    productSum = currentProduct.WSprice * productInCart.quantity;
    subTotalPrice = subTotalPrice + productSum;
  });

  let totalProducts = 0;
  productsInCart.forEach(product => {
    totalProducts = totalProducts + product.quantity;
  });

  const totalParcels = Math.ceil(totalProducts / seller.ProductsInParcel);

  const totalShipping = !buyer.LocalPickup
    ? totalParcels * seller.ParcelPrice
    : 0;

  const subTotalPriceInclShipping = subTotalPrice + totalShipping;
  const totalTaxes = subTotalPriceInclShipping * (seller.Taxes / 100);
  const totalPrice = subTotalPriceInclShipping + totalTaxes;

  return {
    subTotalPrice,
    totalTaxes,
    totalPrice,
    subTotalPriceInclShipping,
    totalShipping,
    totalProducts,
    totalParcels,
  };
}

export function GetSubTotal() {
  const productsInCart = useStore(state => state.CART);
  const products = useStore(state => state.products);

  let price = 0;
  productsInCart.forEach(productInCart => {
    const currentProduct = products.find(
      product => product.id === productInCart.id
    );
    const productSum = currentProduct.WSprice * productInCart.quantity;
    price = price + productSum;
  });
  return price;
}

export function GetTotalQuantity() {
  const productsInCart = useStore(state => state.CART);
  let quantity = 0;
  productsInCart.forEach(product => {
    quantity += product.quantity;
  });
  return quantity;
}

export function GetFullInfo(id) {
  const productsInCart = useStore(state => state.CART);
  const products = useStore(state => state.products);

  const currentProductInCart = productsInCart.find(
    productInCart => productInCart.id === id
  );
  const currentProduct = products.find(product => product.id === id);

  return {
    id: id,
    quantity: currentProductInCart.quantity,
    name: currentProduct.name,
    WSprice: currentProduct.WSprice,
    sum: currentProductInCart.quantity * currentProduct.WSprice,
  };
}
