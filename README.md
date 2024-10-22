# E-Commerce Elements

[Start here](./recap.md)

## Broken Sale Catalog

We want to generate a sale catalog that puts all of our items in the [catalog](./src/db/catalog.js) at a 10% discount. However, the catalog is broken and we need to fix it before we can generate the sale catalog.

Run the code in `src/index.js` and troubleshoot the error message. Once you have fixed the error, you should see the sale catalog printed to the console. The correct output should look like this (the comments would not be printed):

```js
[
  {
    id: 1,
    name: "Wireless Mouse",
    description: "A high-precision wireless mouse with ergonomic design.",
    price: 26.99, // 29.99 - 10%
    category: "Electronics",
    stock: 150,
  },
  {
    id: 2,
    name: "Bluetooth Headphones",
    description: "Noise-cancelling over-ear headphones with long battery life.",
    price: 80.99, // 89.99 - 10%
    category: "Electronics",
    stock: 75,
  },
  {
    id: 3,
    name: "Smartphone Stand",
    description: "Adjustable stand for smartphones and tablets.",
    price: 13.49, // 14.99 - 10%
    category: "Accessories",
    stock: 200,
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    description: "RGB backlit mechanical keyboard with customizable keys.",
    price: 107.99, // 119.99 - 10%
    category: "Electronics",
    stock: 50,
  },
  {
    id: 5,
    name: "USB-C Hub",
    description: "Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader.",
    price: 35.99, // 39.99 - 10%
    category: "Accessories",
    stock: 100,
  },
];
```

## Update the Product Card to Reflect the Sale

Add a 2nd **optional parameter** to the [`ProductCard`](./src/components/product/card.js) component called, `isOnSale`. If desired we can pass in `true` as the argument for this parameter. If we do that, then Product Card should render an `h3` inside of the `header` with the text "On Sale!". If we don't pass in `true`, then the `h3` should not be rendered.

For instance, `catalog.map(product => ${ProductCard(product)})` should render the product card as it is now. However, `catalog.map(product => ${ProductCard(product, true)})` should render the product card with the "On Sale!" text.

---

Finish with the `createCart` TODO in [`utils.js`](./src/utils.js)
