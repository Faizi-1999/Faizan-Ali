let array=["coffee","eggs","bread","butter","fruits","meat"];

function add(x:string)
{
    array.splice(0, 0, "towel", "bedsheet");
    console.log("array=",array);
}
function remove(x:string)
{
    array.splice(0, 1);
    console.log("array=",array);

}
//add(array);       //one line from 14 or 15 should be used at a time
remove(array);

export{}