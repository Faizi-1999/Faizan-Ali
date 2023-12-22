"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let array = [4, 5, 6, 10, 11, 1, 3, 0, -3, 4, -2, -1, 8, 5, -12];
let Alength = array.length;
function sum(array, Alength) {
    let sum = 0;
    for (let i = 0; i < Alength; i++) {
        sum = sum + array[i];
    }
    return sum;
}
console.log("sum of array=", sum(array, Alength));
