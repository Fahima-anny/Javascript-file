// problem 1 
const input_number = 9 ;
if(input_number % 2 ==0){
    console.log(input_number, "= Even number .")
}
else{
    console.log(input_number, "= Odd number .")
}



// problem 2 
let giver_number = -30;
if (giver_number > 0 ){
console.log("Positive number");
}
else if (giver_number < 0 ){
    console.log("Negative number");
    }
else {
        console.log("Zero");
        }




        // problem 3
let num1= 223 ;
let num2= 42 ;
let num3= 5232 ;
if(num1>num2 && num1>num3){
console.log(num1 , "is Biggest");
}
else if(num2>num1 && num2>num3){
    console.log(num2 , "is Biggest");
    }
    else{
        console.log(num3 , "is Biggest");
        }




        // problem 4
let age = 4 ;
if(age <=12 || age>=65){
console.log("You Will have 50% dISCOUNT ");
}
else{
    console.log("You Will pay full price ");
    }



    // problem 5
let personAge = 2
if(personAge > 0 && personAge <= 4 ){
console.log("Baby")
}
else if(personAge > 4 && personAge <=12){
    console.log("Child")
    }
else if(personAge > 12 && personAge <=19){
    console.log("Teenage")
    }
else if(personAge > 19 && personAge <=25){
    console.log("Youth")
    }
else if(personAge > 25 && personAge <=50){
    console.log("Middle Age")
    }
else{
    console.log("Senior Citizen")
    }



// problem 6 
let x=200, y=150 , z=100 ;
let largest , middest , smallest ;

if(x>=y && x>=z){
 largest = x ;
}
else if(y>=x && y>=z){
 largest = y ;
}
else{
 largest = z ;
}

if(x<=y && x<=z){
 smallest = x ;
}
if(y<=x && y<=z){
 smallest = y ;
}
else{
 smallest = z ;
}
middest = x+y+z -largest-smallest ;
console.log("Middest = " , middest ) ;



// problem 7
let year = 2016;
if((year % 4 == 0 && year % 100!==0 ) || (year % 400 == 0 )){
console.log("Leap Year") ;
}
else{
    console.log("Not Leap Year") ;
}



















