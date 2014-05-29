#Reference

##JavaScript

###Comment
####Single-line

<pre>// I'm about to declare a variable and give it a value</pre>

####Multi-line

<pre>/* I just declared a variable named myVariable and assigned
  the value "Hello, world." to it. I preceded it with a
  comment stating that I was about to do just that, and then
  followed it with another comment on the same line stating
  that I just did it. I'm now writing a really long comment
  that needs more than one line, so I've made this one a
  multiline comment.
*/</pre>

###Variables

<pre>var task = "Write the first chapter.";</pre>

###Types

####Number

<pre>12</pre>

####String

<pre>"Hello, world!"</pre>

####Boolean

<pre>true</pre>
<pre>false</pre>

####Undefined

####Null

####Object

###Operations

####Concatenating strings

<pre>var fname, lname, fullName;
fname = "John";
lname = "Doe";
fullName = fname + " " + lname; // fullName is "John Doe"</pre>

####Math operations

<pre>var widgets, gizmos, inventory;
widgets = 1043;
gizmos = 2279;
inventory = widgets + gizmos; // inventory is 3322</pre>

###Comparison Operators

####Equal (==)

<pre>1 == 1 // returns true
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
x == y; // returns true (refers to same object in</pre>

####Not Equal (!=)

<pre>1 != 1 // returns false
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
x != {}; // returns true (not the same object)</pre>

####Strict Equal (===)

<pre>1 === 1 // returns true
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
x === {}; // returns false (not the same object)</pre>

####Strict Not Equal (!==)

<pre>1 !== 1 // returns false
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
x !== {}; // returns true (not the same object)</pre>

####Greater than (>)

<pre>0 > 1 // returns false
1 > 1 // returns false
2 > 1 // returns true
2 > "" // returns true ("" converts to 0)</pre>

####Greater than or Equal to (>=)

<pre>0 >= 1 // returns false
1 >= 1 // returns true
"1" >= 1 // returns true ("1" converts to 1)</pre>

####Less than (<)

<pre>0 < 1 // returns true
1 < 1 // returns false
2 < 1 // returns false
2 < "" // returns false ("" converts to 0)</pre>

####Less than or Equal to (<=)

<pre>0 <= 1 // returns true
1 <= 1 // returns true
"1" <= 1 // returns true ("1" converts to 1)
2 <= 1 // returns false
"2" <= 1 // returns false ("2" converts to 2)</pre>

###Logic Flow

####AND
<pre>true && true; // returns true
true && false; // returns false
false && true; // returns false
0 && 1; // returns 0
0 && 2; // returns 0
1 && 0; // returns 0
2 && 0; // returns 0
"foo" && "bar" // returns "bar"</pre>

####OR

<pre>true || true; // returns true
true || false; // returns true
false || true; // returns true
0 || 1; // returns 1
0 || 2; // returns 2
1 || 0; // returns 1
2 || 0; // returns 2
"foo" || "bar"; // returns foo</pre>

####NOT

<pre>!true; // returns false
!false; // returns true
!0; // returns true
!1; // returns false
!"foo"; // returns false</pre>
