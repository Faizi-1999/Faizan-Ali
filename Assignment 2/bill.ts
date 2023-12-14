//this bill is not generated according to slab system
//if units are 500 then first 100 units are charged less then other 100 are charged some extra
//this program is NOT according to the above condition

let units:number=600;
let electricity:number=1000;

if(units>100 && units<=200)
{
electricity=electricity+((electricity*10)/100)
console.log("electricity bill is ",electricity)
}
else if(units>200 && units<=500)
{
electricity=electricity+((electricity*15)/100)
console.log("electricity bill is ",electricity)

}
else
{
    electricity=electricity+((electricity*25)/100)
console.log("electricity bill is ",electricity)

    
}