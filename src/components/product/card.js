import { formatPrice } from "../../utils.js";

/**
 * Generates an HTML string for a product card.
 *
 * @param {Object} product - The product object.
 * @param {string} product.name - The name of the product.
 * @param {string} product.description - The description of the product.
 * @param {string} product.category - The category of the product.
 * @param {number} product.price - The price of the product.
 */
export default function ProductCard(product, isOnSale) {
  return `
      <article>
        <header>
          <h2>${product.name}</h2>
          ${isOnSale ? "<h3>On Sale!</h3>" : ""}
        </header>
        <section>
          <p>${product.description}</p>
          <p><strong>Category:</strong> ${product.category}</p>
          <p><strong>Price:</strong> ${formatPrice(product.price)}</p>
        </section>
        <footer>
          <button>Add to Cart</button>
        </footer>
      </article>
    `;
}
