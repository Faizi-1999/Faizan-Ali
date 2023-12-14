let num:number=22;
if(num%3==0 && num%5==0)
{
    console.log("Number is divisible by 3 and 5")
}
else if(num%3==0)
{
    console.log("Number is divisible by 3")
}
else if(num%5==0)
{
    console.log("Number is divisible by 5")
}
else 
if(num%3!=0 && num%5!=0)
{
    console.log("Number is NOT divisible by 3 and 5")
}



export{}