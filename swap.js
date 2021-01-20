// Process #1

var a = 5;
var b = 7;
console.log("Before Swap: a =", a, " b =", b);

var temp = a;
a = b;
b = temp;
console.log("After Swap: a =", a, " b =", b);

// Process #2

var x = 5;
var y = 7;
console.log("Before Swap: x =", x, " y =", y);

x = x + y;
y = x - y;
x = x - y;
console.log("After Swap: x =", x, " y =", y);

// Process #3

var p = 5;
var q = 7;
console.log("Before Swap: p =", p, " q =", q);

[p, q] = [q, p];
console.log("After Swap: p =", p, " q =", q);
