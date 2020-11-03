// Importing and setting up myQ
let importedQ = require("./myQ.js");
const myQ = new importedQ.myQ();

// Demonstrating functions
console.log(myQ.printQ("No items in Queue"));
console.log(myQ.dQ("No items in queue"));
console.log(myQ.front("No items in queue"));
console.log(myQ.isEmpty());
console.log(myQ.length());

// Actual Example
console.log("\n \n People waiting for Ice Cream");
// enQ
myQ.enQ("Dan");
myQ.enQ("Edwin");
myQ.enQ("Ezra");
myQ.enQ("Tom");
myQ.enQ("Toby");
myQ.enQ("Tintin");
myQ.enQ("Frank");
myQ.enQ("Joe");
// length
console.log(myQ.length());
// printQ
console.log(myQ.printQ());
// front
console.log(myQ.front());
// isEmpty
console.log(myQ.isEmpty("No people in queue"));
// dQ
console.log(myQ.dQ("No people in queue"));

console.log(myQ.printQ());
console.log(myQ.length());
