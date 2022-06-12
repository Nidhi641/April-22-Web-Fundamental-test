//! Find the nth largest element in a sorted array
let arr = [10,23,56,67,89,92];
function large_num(n){
    let m = arr.length - n;
    console.log(arr[m]);
}
large_num(3);

//Output:- 67