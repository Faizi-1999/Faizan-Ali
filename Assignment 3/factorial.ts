let num:number=6;

function factorial( x:number)
{
let fact=1;

for(let i=1;i<=x;i++)
{
fact=fact*i;

}
return fact;
}

console.log("factorial=",factorial(num));

export{}