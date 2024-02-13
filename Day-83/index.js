function checkOddEven(a){
    if(a%2==0){
    return "even" ;
}
else{
    return "odd" ;
}
}
let number = 4 ;
let result = checkOddEven(number) ;
console.log(result) ;


function sumOfOddNumbers(a,b){
let sum = 0 ;
    for(let i=a ; i<b ; i++){
if(i%2!==0){
sum = sum + i ;
}
}
return sum ;
}
let num1 = 60 ;
let num2 = 100 ;
let output = sumOfOddNumbers(num1,num2) ;
console.log(output) ;