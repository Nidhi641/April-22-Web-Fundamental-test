//! Question 5: What will be returned if you look for the index of something that does not exist?
let arr = ['a','b','c','d'];
for(let i=0; i<arr.length; i++){
    if(arr[i] === "e"){
        console.log(i);
    }
}

//Answer:- Nothing will be printed.