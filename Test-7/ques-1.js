//! Question 1: Write a function to check if geekster exists in your array var list = ['geek', 'geekster', 'geeky'];If it exists  add some code to find the index of geekster and remove that item.
function check(arr){
    for(i=0; i<arr.length; i++){
        if(arr[i] === "geekster"){
            console.log(i);
            arr.splice(i,1);
            console.log(arr);
        }
    }
}
check(['geek','hello', 'geekster', 'geeky']);

//Output:- 
// 2
// [ 'geek', 'hello', 'geeky' ]




