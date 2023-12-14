"use strict";
let year = 2600;
if (year % 100 == 0 && year % 400 != 0) {
    console.log("not a leap year");
}
else if (year % 4 == 0) {
    console.log("it is leap year");
}
