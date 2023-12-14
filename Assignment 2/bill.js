"use strict";
let units = 600;
let electricity = 1000;
if (units > 100 && units <= 200) {
    electricity = electricity + ((electricity * 10) / 100);
    console.log("electricity bill is ", electricity);
}
else if (units > 200 && units <= 500) {
    electricity = electricity + ((electricity * 15) / 100);
    console.log("electricity bill is ", electricity);
}
else {
    electricity = electricity + ((electricity * 25) / 100);
    console.log("electricity bill is ", electricity);
}
