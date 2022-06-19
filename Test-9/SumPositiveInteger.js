const input = [1, -5, 2, 10, -30, 29, 50];
let sum = 0;
var positive = input.filter(function (e){
    return e>0
})
for(let i of positive){
    sum += i;
}
console.log(sum);