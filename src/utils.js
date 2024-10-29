export function calcPriceWithTax(price, taxRate) {
  return price + price * taxRate;
}

export function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}

/**
 * Return a new array of product objects with a discounted price.
 *
 * @param {Object} catalog - An array of product objects. Each product object has a `price` property.
 * @param {Number} discountPct - A flat discount to apply to all products.
 * @returns {Object} - A new array of product objects. Each product object has a `price` property that has been discounted.
 */
export function generateSaleCatalog(catalog, discountPct) {
  return catalog.map((product) => {
    product.price -= product.price * (discountPct / 100);
    return product;
  });
}

/**
 * Create a new cart object.
 *
 * @returns {Object} - A new cart object.
 */
export function createCart() {
  return {
    id: crypto.randomUUID(),
    items: [],
  };
}
