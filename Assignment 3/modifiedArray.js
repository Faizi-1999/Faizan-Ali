"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let fruits = ["Banana", "Orange", "Apple", "Mango", "strawberry", "pineapple", "melon"];
let index = 5;
let value = 0;
function insert(x, y, z) {
    fruits.splice(y, z, "Lemon", "Kiwi", "watermelon", "guava");
    return fruits;
}
console.log(insert(fruits, index, value));
