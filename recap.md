# Starter Code Recap

Before you start on this project, let's recap a bit about how we arrived at this point.

## Function Components

In `src/components`, we have created two components:

- **Product Card**: A card that shows the product image, name, price, and a button to add the product to the cart.
- **User Table**: A table of users, with their name, email, and a button to delete the user.

Each of these is a **function component**. They are functions that return out HTML strings. Well, really, just strings, as Node has no concept of HTML.

These function components leverage **template literals** to create the HTML strings. This is a powerful feature of JavaScript that allows us to create multi-line strings with ease. We are also able to interpolate the dynamic data into the strings.

In `src/components/user/table.js`, we see the usage of a `map` method. Specifically, this component expects to receive an array of users, and it maps over that array to create a table row for each user. Whenever we are mapping over an array, we are running a ➿, taking in each individual item in that array and returning a new item. In this case, we are returning a table row for each user.

Just for comparison, here's how that would have looked using a `for` loop:

```javascript
function UserTable({ users }) {
  let tableRows = "";
  for (let i = 0; i < users.length; i++) {
    tableRows += `
      <tr>
        <td>${users[i].name}</td>
        <td>${users[i].email}</td>
        <td><button>Delete</button></td>
      </tr>
    `;
  }

  return `
        <table>
        <thead>
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
            ${tableRows}
        </tbody>
        </table>
    `;
}
```

We can observe that using a `.map` method is much cleaner and easier to read. It also allows us to separate the logic of creating the table rows from the logic of creating the table itself.

## Utility Functions

In `src/utils.js`, we have created two utility functions:

- **`formatPrice`**: A function that takes a number and returns a string formatted as a price. For example, `formatPrice(10)` should return `"$10.00"`.
- **`calcPriceWithTax`**: A function that takes a price and a tax rate, and returns the price with tax included. For example, `calcPriceWithTax(10, 0.1)` should return `11`.

`formatPrice` was one of the few parts of the codebase that introduce something not seen before: `.toFixed`. Upon [reviewing MDN examples](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed#examples), we can see that this method is used to format a number by replacing it with a string that represents the number rounded to a fixed number of decimal points, which we specify as an argument.

### Everything in JS is an Object Except Primitive Types (and even some of those can behave like objects at times)

Ordinarily, a primitive number, say `10` is fixed and immutable. It cannot 'change' into `"10"` or `"10.00"`. However, when we call a method on it, like `10.toFixed(2)`, JavaScript temporarily 'wraps' the primitive number in a `Number` object, which has a method `toFixed`. This is called **boxing**. After the method is called, the object is discarded, and we are left with the primitive number again. Yeah, it's confusing 😕, but this will be covered again in the future.

## Your Turn

### Review Questions

To help you reflect on what you've learned so far, here are some review questions:

1. **Function Components**

   - What are the benefits of using function components in your project?
   - How do template literals enhance the readability and maintainability of your HTML strings?
   - Can you explain the difference between using a `for` loop and the `.map` method for iterating over arrays in JavaScript?

2. **Utility Functions**

   - How does the `formatPrice` function utilize the `.toFixed` method to format numbers as prices?
   - What is the purpose of the `calcPriceWithTax` function, and how does it calculate the final price?

3. **JavaScript Concepts**

   - What is the concept of **boxing** in JavaScript, and how does it apply to primitive types like numbers?
   - Can you think of other scenarios where JavaScript might temporarily convert a primitive type to an object?

4. **Project Structure**
   - Why is it beneficial to organize your components into separate directories within the `src/components` folder?
   - How does the use of `default` exports simplify the import statements in your project?

Reflecting on these questions will help solidify your understanding of the concepts and practices used in this project. Cross reference MDN and/or chat with AI 🤖 to help you answer the above questions. Be specific and try to use your own words to convey the meanings! You may add your answers below. When finished, add and commit this file. Suggested commit message: `"Answer code recap questions"`.
