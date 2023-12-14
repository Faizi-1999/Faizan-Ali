"use strict";
let totalDays = 17;
let weeks;
let days;
weeks = totalDays / 7;
weeks = Math.trunc(weeks);
days = totalDays % 7;
console.log("weeks=", weeks, "days=", days);
