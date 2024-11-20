console.log("Functions");

//Normal Functions
function addNumbers(a, b) {
  return a + b;
}

console.log(addNumbers(5, 6));

let result = addNumbers(6, 6);
console.log("Result -", result);

// Function Expressions
const multiplyNumbers = function (a, b) {
  return a * b;
};

console.log("multiply", multiplyNumbers(10, 10));

// Arrow Functions
const square = (num) => num * num;

console.log("Square", square(2));

const themes = {
  light: "Light Theme",
  dark: "Dark Theme",
  green: "Greenish Theme",
};

console.log(Object.keys(themes));

//Cart Function

const button = document.getElementById("btn");

const cart = [
  {
    name: "Apple",
    price: 2000,
    quantity: 1,
  },
  {
    name: "Orange",
    price: 3000,
    quantity: 2,
  },
  {
    name: "Banana",
    price: 300,
    quantity: 1,
  },
];

const showCart = (cartItems) => {
  cartItems.forEach((item) => {
    console.log(`Product: \n name : ${item.name}, \n price : ${item.price}, \n quantity : ${item.quantity}`);
  });
};

const calculateTotal = (cartItems) => {
  return cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};


const addToCart = (cartItems, product) => {
  cartItems.push(product);
};


console.log("CartItems");
showCart(cart);

let total = calculateTotal(cart);
console.log(`Total Price: ${total} MMK`);


// Add to Cart Fucntion 

const promptForNewProduct = () => {
  const name = prompt("Enter Product name");
  if (!name) return null;

  const price = prompt("Enter Price");
  if (isNaN(price) || price <= 0){
    alert("စာသေချာထည့်")
    return null
  };

  const quantity = prompt("Enter Quantity");
  if (isNaN(quantity) || price <= 0){
    alert("စာသေချာထည့်")
    return null
  };


  return { name, price, quantity };
};


button.addEventListener("click", () => {
  const newProduct = promptForNewProduct();
  if (newProduct) {
    console.log("Adding to cart");
    addToCart(cart, newProduct);

    console.log("Updated Cart");
    console.log(cart);

    total = calculateTotal(cart);
    console.log(`Updated Total : ${total} MMK`);
  }
});
