export async function fetchProducts() {
  return fetch('/product.json').then((data) => data.json());
};
