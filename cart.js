///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/

//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
  {
    name: "pizza",
    price: 9.99,
  },
  {
    name: "pasta",
    price: 8.99,
  },
  {
    name: "salad",
    price: 7.99,
  },
];

const priceOnly = (obj) => obj.price;

const summedPrice = cart.reduce((accumulator, currentValue) => {
  return accumulator + priceOnly(currentValue);
}, 0);
console.log(summedPrice);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//tax = cartTotal * (1 + tax)

const calcFinalPrice = (cartTotal, couponValue, tax) => {
  return cartTotal * (1 + tax) - couponValue;
};
const checkoutTotal = calcFinalPrice(summedPrice, 5, 0.06);

console.log(checkoutTotal);

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/
class Customer {
  constructor(custID, firstName, lastName, birthday, email, phone) {
    this.custID = custID;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
    this.email = email;
    this.phone = phone;
  }
}
/*
    A customer ID will help us with a database. It makes it easy to code.
    We need identifying information like name. We'll want their birthday so we can send them birthday deals, and so we know if they can legally order alcohol.
    We need their email address so we can add them to a mailing list and send deals. We'll want their phone number so we can call or text them when their table is ready.


*/

/*
    Now, create a customer object following your own
    guidelines.
*/
let pGLr = newCustomer(
  `pGLr`,
  `Amity`,
  `Blight`,
  `10/12/2001`,
  `ablight@blightindustries.org`,
  `9094390116`
);
//CODE HERE
