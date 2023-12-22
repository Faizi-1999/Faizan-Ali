let array=[5,6,-1,4,0,12,13,0,34,-6,-18,45,66,2,-13];
for(let i=0;i<=array.length ;i++)
{
if(array[i]<0)
{
delete array[i];
}

}
console.log("array=",array);