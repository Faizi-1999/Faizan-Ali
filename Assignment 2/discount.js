"use strict";
let value = 101;
let discount = 0;
function discountF(x, y) {
    if (value > 100) {
        discount = value - ((value * 10) / 100);
    }
    else {
        discount = value - ((value * 5) / 100);
    }
    return discount;
}
console.log("Discounted price is ", discountF(value, discount));
