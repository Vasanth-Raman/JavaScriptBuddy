let a = "abc"; //String Literal
let b = String ("abc"); // String
let c = new String("abc"); // object representation

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);


//Abstract equivalent operator
console.log(a==b); //a & b both are string so it return true post the equivalent
console.log(a==c); //However a is string here and c is object , hence type coercion takes place and converts object into string and then equate it, returns true.
console.log(b==c); //Similar to above one, type convercion takes place and converts object to the string, returns true.

//Strict equivalent operator [NO TYPE COERCION TAKES PLACE STRIGHT AWAY EQUATE AND RETURNS THE VALUE]
console.log(a===b); //Both a & b are string so it returns true
console.log(a===c); //a is string and c is object after equating it returns false
console.log(b===c); //b is string and c is object after equating it returns false