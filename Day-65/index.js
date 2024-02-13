/*

1======
a. Javascript was invented in year 1995.
b.  The man who invented Javascript is named Brendan Eich  .
c. He created javascript in 10 days.
d.  Javascript was named Ecmascript at first.
e. I can do sum , substraction , multiplication & divition with Javascript.

2=======
The latest version of javascript is ECMAScript 2023 . It was released in june 2023 by Ecma International .

3======
In javascript we use variable to store our information . We declare a variable and store it in container .

4======
There are three types of variable . They are :
                         a)var     exmpl: var x
                         b)let     exmpl: let y
                         c)const   exmpl: const z

5======
There are some reserved words in javascript , they are called keywords . We cannot use them as names of functions, labels, or variables . 5 of them are : let , for , const , void , typeof .


6======
Defference between var let const:
       var                                              let                                        const
a) we can declare it                      we can not declare it more                       we can not declare it
 as much as we want .                       than once .                                         more than once.
 
b) we can assign with                        we can assign with let                         we can not assign with const
  var more than once .                          more than once .                                  more than once .
 
c) var doesn't have                        let has block scope .                            const has block scope .
   block scope .                   


7=======
Difference between (==) and (===):
                              (==)                                                    (===)
a)  This is called equal to in javascript .                                  This is called equal value & equal type .

b)  Example : let x = 5   ;                                                   Example : let x = 5 ;
              let y = '5' ;                                                             let y = 5 ;
   we can say that , x == y ;                                                we can say that , x === y ;

c) according to (==) string 5 and no. 5                                      according to (===) string 5 and no. 5   
are equal .                                                                     are not equal .       


8=======
we use it to print our answer or the out put we want to show.


9=======
we use typeof to verify if the value is true or false , boolean or string etc.

10======
we can change a string into a number using :  parseInt(stringNum)
Example : var string1 = '43' ;
         var string_1_In_No. = parseInt(string1) ;


*/


/*
let mita = 200 ;
let rita = 300 ;
let eta = 100 ;

console.log( "Mita = " , mita ) ;
console.log( "Rita = " , rita ) ;
console.log( " Eta = " , eta ) ;

let totalContribution = mita + rita + eta ;
console.log("Total contribution = " , totalContribution ) ;

let chicken = 250 ;
let rice = 150 ;
let spices = 100 ;

console.log("Chicken = " , chicken);
console.log("Rice = " , rice);
console.log("Spices = " , spices);

let totalBill = chicken + rice + spices ;
console.log("Total Bill = " , totalBill );

let moneyLeft = totalContribution - totalBill ;
console.log("They will buy mojo with " , moneyLeft , "TK.")
*/





/*
let x = 1234 ;
console.log("type of 1234 = " , typeof(x) );

let y = 'AmiStringNa' ;
console.log("type of AmiStringNa = " , typeof(y) );

let z = 'rrdts' ;
console.log("type of rrdts = " , typeof(z) );

let a = 'true' ;
console.log("type of true = " , typeof(a) );

let b = false ;
console.log("type of false = " , typeof(b) );
*/




/*
let x = '4.33' ;
x = parseFloat(x) ;
console.log("x = " , x ) ;
let y = '4.124' ;
y = parseFloat(y) ;
console.log("y = " , y ) ;
let z = '2.42424' ;
z = parseFloat(z) ;
console.log("z = " , z ) ;
let a = '3.4333' ;
a = parseFloat(a) ;
console.log("a = " , a ) ;

let sum = x + y + z + a ;
sum = (sum).toFixed(2)
console.log( " Sum = " + sum );
*/



/*
let x = 1000 ;
console.log("Rimon's mom gave him = " , x ) ;
let apple = 129 ;
let pineapple = 70 ;
let grapes = 100 ;
let strawberry = 230 ;

let total_bill = apple + pineapple + grapes + strawberry ;
console.log("Total fruit Bill = " , total_bill ) ;

let money_for_chocolate = x - total_bill ;
console.log("Money for chocolates = " , money_for_chocolate ) ;

let chocolate_price = 5 ;
let chocolate_pcs = money_for_chocolate / chocolate_price ;
chocolate_pcs = parseInt(chocolate_pcs) ;
console.log("Rimon will buy " , chocolate_pcs , " pcs chocolates ")

let money_left_after_buying_chocolates = money_for_chocolate % chocolate_price ;
console.log("After buying chocolates Rimon has " , money_left_after_buying_chocolates , "$") ;
*/




/*
let rinas_age = 10 ;
console.log("Rina's age = " , rinas_age ) ;
let rinas_mother_age = 35 ;
console.log("Rinas mother's age = " , rinas_mother_age ) ;
let sum_of_rina_mother_father = 85 ;
let rinas_father_age = sum_of_rina_mother_father - ( rinas_age + rinas_mother_age ) ;
console.log("Rina's Father's age = " , rinas_father_age ) ;
let rina_sister_age = rinas_father_age / 8 ;
console.log("Rina's younger sister's age = " , rina_sister_age ) ;
*/




/*
let total_frnd = 50 ;
console.log("Total friend before = " , total_frnd , "person") ;
let per_fee_before = 500 ;
console.log("Each person fee before = " , per_fee_before , "Tk.") ;
let absent_person = 5 ;
console.log("Person absent = " , absent_person ) ;
let person_now = total_frnd - absent_person ;
console.log("Total friend now = " , person_now ) ;
let money_need = absent_person * per_fee_before ;
let money_increased = money_need / person_now ;
let per_fee_after = per_fee_before + money_increased ;
per_fee_after = (per_fee_after).toFixed(2) ;
console.log("New fee per person = " , per_fee_after ) ;
*/




/*
let a = '50.4533' ;
let b = '100.3301' ;
let c = '58.92831' ;
let d = '30.22' ;
 
a = parseFloat(a) ;
b = parseFloat(b) ;
c = parseFloat(c) ;
d = parseFloat(d) ;

sum = a + b + c + d ;
sum = (sum).toFixed(3) ;

console.log("Sum = " , sum ) ;
*/









let year = 365 ;
let decade = 10 * year ;
let weeks = decade / 7 ;
weeks = parseInt(weeks) ;
console.log("1 Decade = " , weeks , "weeks" ) ;

























