/*
function average( x , y , z ){
let averageMarks =( x + y + z ) /3;
return averageMarks ;
}
let marks1 = 28 ;
let marks2 = 30 ;
let marks3 = 30 ;
let result = average( marks1 , marks2 , marks3 );
console.log(result);
*/



/*
let no = 4 ;
let factorial = 1 ;
for( let i=1 ; i<=no ; i++ ) {
 factorial = factorial * i  ;

}
console.log("Factorial of " , no , "=" , factorial ) ;
*/



let number = 4 ;
let factorial = 1 ;
let i = number ;
while (i>0){
factorial = factorial*i ;
    i-- ;
}
console.log(factorial);


function num(x){
let factor = 1 ;
    for(let i=x ; i>0 ; i--){
factor = factor * i ;
}
return factor ;
}
let result = num(3) ;
console.log(result) ;









