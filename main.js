(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"./myQ.js":2}],2:[function(require,module,exports){
class myQ {
  constructor() {
    this.items = [];
  }

  enQ(item) {
    this.items.push(item);
  }

  dQ(error = "Error: No items in Queue") {
    if (this.items.length == 0) {
      return error;
    } else {
      return this.items.shift();
    }
  }

  front(error = "Error: No items in Queue") {
    if (this.items.length == 0) {
      return error;
    } else {
      return this.items[0];
    }
  }

  isEmpty() {
    return this.items.length == 0;
  }

  printQ(error = "Error: No items in Queue") {
    if (this.items.length == 0) {
      return error;
    } else {
      return this.items;
    }
  }

  length() {
    return this.items.length;
  }
}

module.exports = {
  myQ,
};

},{}]},{},[1]);
