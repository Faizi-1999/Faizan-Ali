"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let c = 40;
let f;
let array = [];
for (let i = 0; i < 10; i++) {
    f = (c * (9 / 5)) + 32;
    array[i] = f;
}
console.log("temp=", array);
