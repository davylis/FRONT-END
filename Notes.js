
//Good to know:
-Conditional rendering=Html modifying by adding text as p, div and etc. with js React
-React developer Tools: Installation in browser to see React components in web inspector
-In React,'batching' refers to the process of grouping multiple state updates into a single re-render to improve performance. 
-'rendering' refers to the process of creating a visual representation of a component and its children in the user interface (UI). This process involves converting React components into DOM (Document Object Model) nodes that the browser can display.


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

-----
//Lecture 2

'State
-is component specific "memory" and triggers component re-render when its value is changed

-state refers to a built-in object that stores data or information about the component. The state object is mutable, meaning that it can be updated over time in response to user actions or other changes within the application

initializing:

const [firstName, setFirstName] = React.useState("John");

updating: State is always updated by using function that you define in your useState hook
// Update value of the state
setFirstName("Jim");

Counter example:
function Counter() {
  const [count, setCount] = React.useState(0);
  // Continue...

onclick:
return (
  <div>
    <p>You clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>+</button>
  </div>
);

Change the counter app and render Counter component three times:
function Counters(){

  return (
    <div>
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

-State updates are asynchronous and batched. 
-To make sure that the state is always updated correctly, you should pass a function that updates the state like shown in the following example.

return (
  <div>
    <p>You clicked {count} times</p>
    <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
  </div>
);

-In React,'batching' refers to the process of grouping multiple state updates into a single re-render to improve performance. 
-'rendering' refers to the process of creating a visual representation of a component and its children in the user interface (UI). This process involves converting React components into DOM (Document Object Model) nodes that the browser can display.

- State updates are batched to minimize re-renders for better performance.
-Before React 18 only state updates in the event handlers are batched.
-In React 18+ all updates are batched.

function App() {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState("");

  function handleClick() {
    setCount((prevCount) => prevCount + 1); // Does not re-render yet
    setMsg("Counter: " + count); // Does not re-render yet
    // Now, React re-render
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Next</button>
    </div>
  );
}

'Multiple states:
-just call useState hook function multiple times
const [firstName, setFirstName] = React.useState("John");
const [lastName, setLastName] = React.useState("Johnson");

-Or you can use an object state. That is recommended if the values are related to each others. For example, you have to store information about user (first name, last name, address, email, etc.).

const [name, setName] = React.useState({
  firstName: "John",
  lastName: "Johnson",
});


- If you use an object state, you can update values by using the setName function and passing new object as parameter.

setName({ firstName: "Jim", lastName: "Brown" });


- If only one value is updated, you have to use the object spread syntax (there is no auto merging) and pass new object as an argument to state update function (partial update).

setName({ ...name, lastName: "Smith" });
// New value is now firstName: John, lastName: Smith

'When to use State?
- There are some differencies between states and variables that is good to understand. You should avoid unnecessary states. The more states a component has, the more complex its code becomes. It might also affect to performance.

'State

-The value of state persist between re-renders
-Component is re-rendered if state value changes.

'Variable

-The value of variable doesn't persist between re-renders.
-Component is not re-rendered if variable value changes.

Variables can be used to data that doesn't impact component's output directly.

'ref
-If you need variable that persist between re-renders but it is not needed for rendering, you can use React ref. You can create a ref by calling the useRef hook function and pass initial value as an argument.

const myRef = useRef(0) // Call useRef hook in the top level of your component

'User input
-You can use input element’s onChange event attribute and value attribute to read user input
-The onChange is invoked in every keystroke and it calls handleChange function that saves user input to react state

<input type="text" value={name} onChange={handleChange} />


-Next, create handleChange function to update state. The event.target.value is now the value from the input element that causes the onChange DOM event.

const handleChange = (event) => {
  setName(event.target.value);
};

//Lecture-3


//Lecture-4
'map()

First, it is good to learn JavaScript function that is really useful with arrays.
The map() function creates a new array with the results of calling a function for every array element.

let arrA = [1, 2, 3];
let arrB = arrA.map(x => x * 2);
// arrB = [2, 4, 6]


'List handling

The following example creates a state that is an array of numbers.
In the return statement, the map function is used to iterate over the numbers array state, and for each item, it creates a li element with the content of the item.

Note! key string attribute is needed in the lists. That helps React to identify which rows have changed. The map method has a second argument, that is running index and we use that in the following example.


function MyList() {
  const [numbers, setNumbers] = React.useState([1, 2, 3, 4, 5]);

  return (
    <div>
      <ul>
        { numbers.map((number, index) =>
          <li key={index}>Listitem {number}</li>) }
      </ul>
    </div>
  );
}

//Output
    Listitem 1
    Listitem 2
    Listitem 3
    Listitem 4
    Listitem 5


'List handling example


-The next example fetches an array of listitems from the REST API and store it to React state.
-The REST API to be used is Reqres.in fake API, and the following URL returns a list of fake users (https://reqres.in/api/users).

-We need an array to store a list of persons; therefore, we create a state called listItems and initialize that to an empty array. Then, we use the useEffect hook to send a request once after the first render.

const [listItems, setListItems] = React.useState([]);

React.useEffect(() => {
  fetch('https://reqres.in/api/users')
  .then(response => { 
    if (!response.ok)
      throw new Error("Error in fetch: " + response.statusText);  
    
    return response.json();
  }) 
  .then(responseData => { 
    setListItems(responseData.data)
  }) 
  .catch(err => console.error(err)
}, [])



The return statement looks the following:

return (
  <div>
    <h2>Persons</h2>
    <table>
      <tbody>
        <tr><th>First name</th><th>Last name</th><th>Email</th></tr>
        { listItems.map((person) => 
            <tr key={person.id}>
              <td>{person.first_name}</td>
              <td>{person.last_name}</td>
              <td>{person.email}</td>
            </tr>) }
      </tbody>
    </table>
  </div>
);


Output:
Persons

FN    LN      Email
name name   jsncjs@jndcj
...
...
...
...

//Lecture 5
Book to read: Full Stack development by using Spring Boot

'Third-Party Component'
The good news is that you don't' have to do everything from the scratch. You can find a lot of third-party components or libraries for React, that are developed and maintained by some developers or organizations.

Sources to find third-party components:

-Google
-Awesome React: https://github.com/enaqx/awesome-react

When you are using third-party libraries in your React project, you should know how to install them. The installation is done in the project folder using the npm.

commands:
npm install <package-name>
npm uninstall <package-names>

 By default, the latest stable version is installed. If needed, you can specify the version number that you want to install.

npm install <package-name>@1.2.3


Q for V:
-Postman?
-Virtual DOM
-re-renders and renders
-props
-state
-code uncaught browser

