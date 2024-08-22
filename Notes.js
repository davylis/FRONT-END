
//Temrinology:
-Conditional rendering=Html modifying by adding text as p, div and etc. with js React


//Lecture 1:
Node is powerful js runtime
React is js library for building interfaces. React is component based and they are js functions.

'Component tree:
Root component > Search component/Table component > Table row component
Data in tree flows in one direction from parent to child component

'Virtual DOM' is interface for web document so that scripting languages, such as js can access, manipulate, and programmatically interact with the document's content. 

'Modern js:'
ES6 = ECMAScript in scripting language 
Many new features from ECMA2015

'We don't use classes anymore in new version of js. Nowadays, React components are created using functions, and in this material, we use only functional components.

'Inheritance:
using the extends keyword. The following example demonstrates how to create a subclass Circle that inherits from the parent class Shape.

class Circle extends Shape { 
  constructor (id, x, y, radius) { 
    super(id, x, y) 
    this.radius = radius 
  } 
}								

scope of let = global
scope of const = block-scoped local constant variable
-it must be initialized
-it can't be changed
-expect if it's not an object. Then properties can be added,updated, or removed.


'String interpolation:
let person = { firstname: 'Jack', lastname: 'Russell' };

Traditional way
let msg = "Hello " + person.firstname + " " + person.lastname;

 Using ES6 template literals
let msg = `Hello ${person.firstname} ${person.lastname}`;(REMEMBER BACKSTICKS)


'Arrow functions:

 anonymous arrow function
x => x + 1;

 equivalent to
function(x) {
  return x + 1;
}

'In the case of multiple parameters, you have to use parenthesis:
(x, y) => x * y;

'If there are no parameters, you have to use empty parenthesis.

() => "Hello World";

'Many statements in body

(x, y) => {
  console.log(x, y);
  return x * y;
}

'To call an arrow function, you can save function to a variable.

const calc = (x, y) => x * y;

 Call function
calc(5, 3);  Returns 15

'Object destructuring

// Object destructuring assignment
const coords = {
  latitude: 61.4977517,
  longitude: 23.7609533
};

 define variables latitude and longitude
 assign values from the similarly named attributes of object coords
const { latitude, longitude } = coords;

 Array destructuring assignment
const myArray = ["first", "second", "third"];

const [a, b, c] = myArray; // const a = "first", b = "second", c = "third";

'Spread operator:

Q for V:
-Postman?
-Destructuring in arrays and etc.
-Virtual DOM

