export function calcPriceWithTax(price, taxRate) {
  return price + price * taxRate;
}

export function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}
