// Qus:  #1: Print numbers from 1 to 10 
/*
function num(a){
for(let i=a ; i<=10 ; i++){
console.log(i) ;
}
}
let result = num(1) ;
*/



// Ques  #2: Print the odd numbers less than 100
/*
function num(a){
for(let i=a ; i>=1 ; i-=2){

console.log(i) ;
}
}
num(99) ;
*/


// qus #3: Print the multiplication table with 7
/*
function num(a){
let i = 1 ;
let multi = 1 ;
    while(i<=10){
        multi=a*i ;
console.log(`${i} x 7 = ${multi}`) ;
        i++ ;
    }

}
num(7) ;
*/


// Ques #4: Print all the multiplication tables with numbers from 1 to 10
/*
function num1(a){
    let multi=1 ;
    for( let i=1 ; i<=a ; i++){
        let multi2=1 ;     
for(let num=1 ; num<=10 ; num++ ){
multi = num * i ;
console.log(`${num} x ${i} = ${multi}`) ;
}


    }
}
num1(10) ;
*/


// ques  #5: Calculate the sum of numbers from 1 to 10 
/*
function num(a){
let sum = 0 ;
for(let i=1 ; i<=a ; i++){
    sum = sum + i ;
}
return sum ;
}
let result = num(10) ;
console.log(result) ;
*/



// ques #6: Calculate 10!
/*
function num(a){
let prime = 1 ;

for(let i=1 ; i<=a ; i++){
prime = prime * i ;
}
return prime ;
}
let result = num(10) ;
console.log(result) ;
*/


// #7: Calculate the sum of odd numbers greater than 10 and less than 30
/*
function num( a , b ){
   let sum = 0 ;
for (let i=a+1 ; i<b ; i++){
    if(i%2!==0){
        sum = sum + i ;
    }
else{continue}
}
return sum ;
}

let result = num( 10 , 30 ) ;
console.log(result) ;
*/


// #8: Create a function that will convert from Celsius to Fahrenheit
/*
function celsius(x){
let Fahrenheit = x*1.8 + 32 ;
return Fahrenheit ;
}
let Fahrenheit = celsius(30) ;
console.log(Fahrenheit) ;
*/



// #9: Create a function that will convert from Fahrenheit to Celsius
/*
function Fahrenheit(x){
let celsius = (x-32)/1.8 ;
return celsius ;
}
let celsius = Fahrenheit(86) ;
console.log(celsius) ;
*/


// #10: Calculate the sum of numbers in an array of numbers 
/*
function ar(x){
let sum = 0 ;
for( let i=0 ; i<x.length ; i++ ){
    sum = sum + x[i] ;
}
return sum ;
}
let array = [ 10 , 5 , 15 ] ;
let result = ar(array);
console.log(result) ;
*/


// #11: Calculate the average of the numbers in an array of numbers
/*
function ar(x){
let sum = 0 ;
for( let i=0 ; i<x.length ; i++ ){
    sum = ( sum+ x[i] ) ;
}
let avegare = sum/x.length ;
return avegare ;
}
let array = [ 10,11,12 ] ;
let result = ar(array) ;
console.log(result) ;
*/


// #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers 
/*
let array = [2,4,-3,5] ;
let array2 = [] ;
for(let i=0 ; i<array.length ; i++){
if(array[i]>=0){
    array2.push(array[i]) ;
}
}
console.log(array2) ;
*/



/*
function array(array1){
    let array2 = [] ;
    for(let i=0 ; i<array1.length ; i++){

     if(array1[i]>=0){
       array2.push(array1[i]) ; 
     }

    }

return array2 ;

}
let x = [2,4,-3,5] ;

let result = array(x) ;
console.log(result) ;
*/



// #13: Find the maximum number in an array of numbers
/*
let array1 = [1,2,3,4] ;
let max = array1[0] ;
for(let i=0 ; i<array1.length ; i++){
    if(array1[i]>max){
        max = array1[i] ;
    }
}
console.log(max) ;
*/

/*
function ar(array){

    let max = array[0] ;
    for( let i=0 ; i<array.length ; i++ ){
        if(array[i]>=max){
         max = array[i] ;
        }
    }
    return max ;
}
let array = [1,2,3,4] ;
let result = ar(array) ;
console.log(result) ;
*/



// #14: Print the first 10 Fibonacci numbers without recursion
/*
let x = 10 ;
let fibArray = [ 0 , 1 ] ;
for(let i=2 ; i<x ; i++){
let newNum = fibArray[i-1] + fibArray[i-2] ; 
fibArray.push(newNum) ;
}
console.log(fibArray) ;
*/

/*
function num(x) {
    let array = [0, 1];
  
    for (let i = 2; i < x; i++) {
        newNum = array[i - 1] + array[i - 2];
        array.push(newNum) ;
    }
  
    return array;
  }
  
  let result = num(10);
  console.log(result);
*/


// #15: Create a function that will find the nth Fibonacci number using recursion
/* 
function fibRecursive(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibRecursive(n - 1) + fibRecursive(n - 2);
  }
}

let result = fibRecursive(7);
console.log(result);
*/


// #16: Create a function that will return a Boolean specifying if a number is prime 
/*
function num(a){
    let prime = true ;
for(let i=2 ; i<a ; i++){
    if( a % i == 0 ){
        prime = false ;
        break ;
}
}
    return prime ;
}
let result = num(11) ;
console.log(result) ;
*/



// #17: Calculate the sum of digits of a positive integer number 






// #18: Print the first 100 prime numbers 
/*
function number( a ){
for(let i=2 ; i<=a ; i++){
    let prime = true ;
for(let x=2 ; x<i ; x++){
if(i%x==0){
prime = false ;
break ;
}
}
if(prime){
    console.log(i);
    }
}


}
number(100) ;
// console.log(result) ;
*/

//  for(let pno=0 ; pno<100 ; pno++){
//    let  prime = true ;
//    for(let i=2 ; i<=pno ; i++){
// if(pno%i==0){
//  prime = false ;
//  break ;
//  }
//  else{
//     console.log(i) ;
// }
//  }

//  }



// #19: Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt" 






// #20: Rotate an array to the left 1 position 
/*
function ar(a){

let first =  a.shift() ;
a.push(first) ;

console.log(a) ;
}
let array = [1,2,3] ;
let result = ar(array) ;
console.log()
*/


// #21: Rotate an array to the right 1 position
/*
function array(ar){
let last = ar.pop() ;
ar.unshift(last) ;
return ar ;
}
let ar = [1,2,3] ;
let result = array(ar) ;
console.log(result) ;
*/


// #22: Reverse an array
/*
function array(ar){
let ar2 = [] ;
for(let i=0 ; i<ar.length ; i++){
    ar2.unshift(ar[i]) ;
}
return ar2 ;
}
let ar = [1,2,3,4,5] ;
let result = array(ar) ;
console.log(result) ;
*/



// #23: Reverse a string
/*
function str(s)
{
    var s2 = "";
    
    for(let i = s.length - 1; i >= 0; i--)
    {
        let char = s[i] ;
        s2 = s2 + char ;
    }
    
    return s2;
}
let result = str("Fahima");
console.log(result);
*/



// #24: Create a function that will merge two arrays and return the result as a new array
/*
function array(ar1 , ar2){
let ar3 = [ ] ;
for(let i=0 ; i<ar1.length ; i++){
    ar3.push(ar1[i]) ;
}
for(let i=0 ; i<ar2.length ; i++){
    ar3.push(ar2[i]) ;
}
return ar3 ;
}
let ar1 = [1,2,3] ;
let ar2 = [4,5,6] ;
let result = array(ar1 , ar2) ;
console.log(result) ;
*/



// #25: Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both 



























