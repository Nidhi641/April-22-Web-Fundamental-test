//! In how many ways can we loop in an array describe each with an example ?
// we can loop an array in three ways:
//? 1- traditional loop :-
for(let i=0;i<arr.length;i++)  //(for loop:- in this loop we get the index of the element).

let i=0;
while(i<arr.length){           //(while loop:- in this loop we get the index of the element).
    //code something
    i++;
}

let i=0;                       //(do while loop:-in this loop we get the index of the element and this loop will work atleast one time while condition is true or not).
do{
    //code something
    i++;
}while(i<arr.length);


//? 2- for of loop :-
for(let i of arr)              //(for of loop:- in this loop we get the element).

//? 3- for in loop :-
for(let i in arr)              //(for in loop:- in this loop we get the index of the element).


//The commonly used for loops is the for of loop and traditional for loop.
