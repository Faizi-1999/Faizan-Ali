let value:number=101;
let discount:number=0;

function discountF(x:number,y:number)
{
if(value>100)
{
discount=value-((value*10)/100)

}
else
{
discount=value-((value*5)/100)
}
return discount;

}
console.log("Discounted price is ", discountF(value,discount));