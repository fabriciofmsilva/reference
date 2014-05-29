#Reference

##JavaScript

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

####Object

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

```javascript
var myArray = new Array();
```

```javascript
var myArray = [];
```
