let fruits = ["Banana", "Orange", "Apple", "Mango","strawberry","pineapple","melon"];
let index:number=5;
let value:number=0;
function insert(x:string,y:number,z:number)
{


    fruits.splice(y,z , "Lemon", "Kiwi","watermelon","guava");
    return fruits;

}


console.log(insert(fruits,index,value));


export{}
