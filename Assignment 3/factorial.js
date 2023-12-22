"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let num = 6;
function factorial(x) {
    let fact = 1;
    for (let i = 1; i <= x; i++) {
        fact = fact * i;
    }
    return fact;
}
console.log("factorial=", factorial(num));
