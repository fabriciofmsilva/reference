Reference
==========

Under construction. Always!

##1. HTML

###Comment
```html
<!-- This is comment text -->
```

###Doctype
```html
<!DOCTYPE html>
```

###Basic
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Document Title</title>
</head>
<body>
  <h1>Main heading in my document</h1>
  <!-- Note that it is "h" + "1", not "h" + the letters "one" -->
  <p>Look Ma, I am coding <abbr title="Hyper Text Markup Language">HTML</abbr>.</p>
</body>
</html>
```

###Tags

####a
```html
<a class="text" id="text" href="URI" hreflang="language code" rel="link type keyword" target="text">text</a>
```

##2. CSS

##3. JavaScript

###Comment
####Single-line
```javascript
// I'm about to declare a variable and give it a value
```

####Multi-line
```javascript
/* I just declared a variable named myVariable and assigned
  the value "Hello, world." to it. I preceded it with a
  comment stating that I was about to do just that, and then
  followed it with another comment on the same line stating
  that I just did it. I'm now writing a really long comment
  that needs more than one line, so I've made this one a
  multiline comment.
*/
```

###Variables

```javascript
var task = "Write the first chapter.";
```

###Types

####Number

```javascript
12
```

####String

```javascript
"Hello, world!"
```

####Boolean

```javascript
true
false
```

####Undefined

####Null

###Object

###Operations

####Concatenating strings

```javascript
var fname, lname, fullName;
fname = "John";
lname = "Doe";
fullName = fname + " " + lname; // fullName is "John Doe"
```

####Math operations

```javascript
var widgets, gizmos, inventory;
widgets = 1043;
gizmos = 2279;
inventory = widgets + gizmos; // inventory is 3322
```

###Comparison Operators

####Equal (==)

```javascript
1 == 1 // returns true
"1" == 1 // returns true ("1" converts to 1)
1 == true // returns true
0 == false // returns true
"" == 0 // returns true ("" converts to 0)
" " == 0 // returns true (" " converts to 0)
0 == 1 // returns false
1 == false // returns false
0 == true // returns false
var x, y; // declare x and y
x = {}; // create an object and assign it to x
y = x; // point y to x
x == y; // returns true (refers to same object in
```

####Not Equal (!=)

```javascript
1 != 1 // returns false
"1" != 1 // returns false ("1" converts to 1)
1 != true // returns false
0 != false // returns false
"" != 0 // returns false ("" converts to 0)
" " != 0 // returns false (" " converts to 0)
0 != 1 // returns true
1 != false // returns true
0 != true // returns true
var x, y; // declare x and y
x = {}; // create an object and assign it to x
y = x; // point y to x
x != y; // returns false (refers to same object in memory)
x != {}; // returns true (not the same object)
```

####Strict Equal (===)

```javascript
1 === 1 // returns true
"1" === 1 // returns false ("1" is not converted)
1 === true // returns false
0 === false // returns false
"" === 0 // returns false ("" is not converted)
" " === 0 // returns false (" " is not converted)
0 === 1 // returns false
1 === false // returns false
0 === true // returns false
var x, y; // declare x and y
x = {}; // create an object and assign it to x
y = x; // point y to x
x === y; // returns true (refers to same object in memory)
x === {}; // returns false (not the same object)
```

####Strict Not Equal (!==)

```javascript
1 !== 1 // returns false
"1" !== 1 // returns true ("1" is not converted)
1 !== true // returns true
0 !== false // returns true
"" !== 0 // returns true ("" is not converted)
" " !== 0 // returns true (" " is not converted)
0 !== 1 // returns true
1 !== false // returns true
0 !== true // returns true
var x, y; // declare x and y
x = {}; // create an object and assign it to x
y = x; // point y to x
x !== y; // returns false (refers to same object in memory)
x !== {}; // returns true (not the same object)
```

####Greater than (>)

```javascript
0 > 1 // returns false
1 > 1 // returns false
2 > 1 // returns true
2 > "" // returns true ("" converts to 0)
```

####Greater than or Equal to (>=)

```javascript
0 >= 1 // returns false
1 >= 1 // returns true
"1" >= 1 // returns true ("1" converts to 1)
```

####Less than (<)

```javascript
0 < 1 // returns true
1 < 1 // returns false
2 < 1 // returns false
2 < "" // returns false ("" converts to 0)
```

####Less than or Equal to (<=)

```javascript
0 <= 1 // returns true
1 <= 1 // returns true
"1" <= 1 // returns true ("1" converts to 1)
2 <= 1 // returns false
"2" <= 1 // returns false ("2" converts to 2)
```

###Logic Flow

####AND
```javascript
true && true; // returns true
true && false; // returns false
false && true; // returns false
0 && 1; // returns 0
0 && 2; // returns 0
1 && 0; // returns 0
2 && 0; // returns 0
"foo" && "bar" // returns "bar"
```

####OR

```javascript
true || true; // returns true
true || false; // returns true
false || true; // returns true
0 || 1; // returns 1
0 || 2; // returns 2
1 || 0; // returns 1
2 || 0; // returns 2
"foo" || "bar"; // returns foo
```

####NOT

```javascript
!true; // returns false
!false; // returns true
!0; // returns true
!1; // returns false
!"foo"; // returns false
```
###Arrays

####Creating an Array

```javascript
var myArray = new Array();
```

```javascript
var myArray = [];
```

####Adding to an Array
```javascript
var myArray = [];
myArray[0] = "Hello";
myArray[1] = "World";
```

####Reading from an Array
```javascript
var myValue,
myArray = ["Hello", "World", "I", "am", "an", "array"];
myValue = myArray[4]; // returns "an"
```

####Nested Arrays
```javascript
var yusuf, dreamers;
yusuf = [];
dreamers = ["cobb", "arthur", "ariadne", "saito", "fischer"];
```

###Objects

####Creating an Object
```javascript
var myObject = new Object();

var myObject = {};
```

####Adding to an Object
```javascript
var obj = {};
obj["firstName"] = "Hugo";
obj["lastName"] = "Reyes";

var obj = {};
obj.firstName = "Hugo";
obj.lastName = "Reyes";
```

####Reading from an Object

####Nested Objects

####Prototype Chain

####Looping over an Object

###Functions
```javascript
function sayHello() {
  alert("Hello, world!");
}

sayHello();

function sayHello(msg) {
  alert(msg);
}

sayHello("Howdy, y'all!");
```

####Scope
```javascript
function hi() {
var hello = "hello"
};
hi();
alert(hello);
```

####Hoisting

####Declaration

####Arguments

####Object-oriented Programming with Functions

####this

####Properties

####Methods

###Loops

####The while Loop
```javascript
while (condition) {
  statement
}
```
```javascript
var tasksToDo = 3;

while (tasksToDo > 0) {
  console.log('There are ' + tasksToDo + ' tasks to do');
  tasksToDo--;
}
```

####The do while Loop
```javascript
do {
statement
} while(expression);
```
```javascript
do {
console.log('This will print at least once');
}
while (false);
```

####The for Loop
```javascript
for (initialization; condition; end-expression ) {
  statement
}
```

```javascript
for (var i = 0; i < 3; i++) {
  console.log(i);
}
```

####The for in Loop
```javascript
var agents = {
  '005': "Michael Harp",
  '006': "John Smith",
  '007': "James Bond"
};

for (key in agents) {
  if ('007' === key) {
    console.log('Bond, ' + agents[key] + 'has been found!');
  } else {
    console.log('Standard spy, ' + agents[key] + 'has been found');
  }
}
```

###Jumps

####break
```javascript
var tasks = [
{name: 'Buy milk', complete: false},
{name: 'Trash', complete: false},
{name: 'Pay bills', complete: true},
{name: 'Repairs', complete: false},
{name: 'Plumber', complete: true}
];
var firstComplete;
for (var i = 0; i < tasks.length; i++) {
if (tasks[i].complete) {
firstComplete = tasks[i];
break;
}
}
console.log(firstComplete);
```

####continue
```javascript
for (var i = 0; i < tasks.length; i++) {
if (!tasks[i].complete) {
continue;
}
console.log(i, tasks[i].name);
}
```

####Labeled Statements
```javascript
identifier: statement
```

####return
```javascript
return expression;
return;
```

###Exception Handling

####throw
```javascript
throw expression;
```

####try
```javascript
try {
  // code which may throw an error
} catch (identifier) {
  // error handling
} finally {
  // clean up code
}
```

###The Document Object Model

####DOM Level 1

#####Creating DOM Elements and Attributes
```javascript
var myDiv = document.createElement("div");
```

#####insertBefore

#####getElementsByTagName

###DOM Level 2

####getElementById

####hasAttributes

####hasAttribute

###DOM Level 3
```javascript
var el = document.getElementById("greeting");
el.textContent = "Good morning!";
```

###DOM Level 4

####getElementsByClassName

####Data Attributes

###The style Attribute

###Events

####DOM Events

####Event Propagation

####Event Handlers

#####HTML Attribute

#####addEventListener

#####DOM Element Properties

####Event Context

####Custom Events

###Canvas

####Preparing the Data

####Setting up the Canvas

#####The Most Basic Drawing

#####Text and the Coordinate System

#####A Further Rotation Example

#####Y-axis Numbering

#####“Hello World” Canvas-style

#####Grid Lines

#####Rectangles

#####Arcs

#####Bar Chart Labels

#####Shadows

#####Making Images

#####Summary

##5. References

- [Mozilla Developer Network](https://developer.mozilla.org)

##6. License

Pay me a beer...


