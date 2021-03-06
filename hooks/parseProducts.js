export default function parseProducts(data) {
  
  return Object.values(data).map(product => ({
    id: product.id,
    name: product.title,
    description: product.description,
    image: product.images[0].src,
    RRPprice: product.variants[0].price,
  }));
}
