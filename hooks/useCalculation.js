import useStore from './useStore';

export function GetQuantity(id) {
  const cart = useStore(state => state.cart);
  const productsInCart = cart.filter(product => product.quantity > 0);
  const currentProductInCart = productsInCart.find(
    productInCart => productInCart.id === id
  );
  const quantity = currentProductInCart?.quantity ?? 0;
  return quantity;
}

export function GetName(id) {
  const products = useStore(state => state.products);
  const currentProduct = products.find(product => product.id === id);
  const name = currentProduct.name;
  return name;
}

export function GetWSprice(id) {
  const prices = useStore(state => state.prices);
  const products = useStore(state => state.products);
  const currrentReducedProduct = prices.find(product => product.id == id);
  const productWithNoWSprice = products.find(product => product.id == id);
  const WSprice =
    currrentReducedProduct?.WSprice ?? productWithNoWSprice.RRPprice;
  return WSprice;
}

export function GetSum(id) {
  const sum = GetQuantity(id) * GetWSprice(id);
  return sum;
}

export function GetCleanNumber(number) {
  const commaToDot = number.includes(',') ? number.replace(',', '.') : number;
  const inputToTwoDezimals = parseFloat(commaToDot).toFixed(2);
  const stringToNumber = parseFloat(inputToTwoDezimals);
  return stringToNumber;
}

export function GetTotals() {
  const cart = useStore(state => state.cart);
  const productsInCart = cart.filter(product => product.quantity > 0);
  const products = useStore(state => state.products);
  const seller = useStore(state => state.seller);
  const user = useStore(state => state.user);
  const prices = useStore(state => state.prices);

  let subTotalPrice = 0;
  let productSum = 0;
  productsInCart.forEach(productInCart => {
    const currrentReducedProduct = prices.find(
      product => product.id === productInCart.id
    );
    productSum = currrentReducedProduct.WSprice * productInCart.quantity;
    subTotalPrice = subTotalPrice + productSum;
  });

  let totalProducts = 0;
  productsInCart.forEach(product => {
    totalProducts = totalProducts + product.quantity;
  });

  const totalParcels = Math.ceil(totalProducts / seller.productsPerParcel);

  const totalShipping = !user.localPickup
    ? totalParcels * seller.domesticShipping
    : 0;

  const subTotalPriceInclShipping = subTotalPrice + totalShipping;
  const totalTaxes = subTotalPriceInclShipping * (seller.VAT / 100);
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
