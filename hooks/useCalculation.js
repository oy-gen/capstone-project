import useStore from './useStore';

export function useFullInfo(id) {
  const cart = useStore(state => state.cart);
  const productsInCart = cart.filter(product => product.quantity > 0);
  const products = useStore(state => state.products);
  const productPrices = useStore(state => state.prices);

  const discountedProduct = productPrices.find(product => product.id === id);
  const currentProduct = products.find(product => product.id === id);
  const currentProductInCart = productsInCart.find(
    productInCart => productInCart.id === id
  );
  const WSprice = discountedProduct?.WSprice ?? currentProduct.RRPprice;
  const quantity = currentProductInCart?.quantity ?? 0;
  const name = currentProduct.name;
  const sum = quantity * WSprice;
  return {
    id,
    quantity,
    name,
    WSprice,
    sum,
  };
}

export function GetCleanNumber(input) {
  const commaToDot = input.includes(',') ? input.replace(',', '.') : input;
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
    const currentWSprice = prices.find(
      product => product.id === productInCart.id
    );
    productSum = currentWSprice.WSprice * productInCart.quantity;
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
