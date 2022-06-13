import useStore from './useStore';

export function GetTotals() {
  const cart = useStore(state => state.CART);
  const productsInCart = cart.filter(product => product.quantity > 0);
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

export function GetFullInfo(id) {
  const cart = useStore(state => state.CART);
  const productsInCart = cart.filter(product => product.quantity > 0);
  const products = useStore(state => state.products);

  const currentProductInCart = productsInCart.find(
    productInCart => productInCart.id === id
  );
  const quantity = currentProductInCart?.quantity ?? 0;
  const currentProduct = products.find(product => product.id === id);
  const WSprice = currentProduct.WSprice;
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
