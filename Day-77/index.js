/*
let familyMember = {  
Person:8 ,
Male : 3 ,
Female :3 ,
child : 2 
}
console.log(familyMember) ;
console.log(familyMember.Male);
*/





/*
let familyMemberDetailce = [
    {
        Name : "Baba" ,
        Age : 60 ,
        Gender : "Male" 
    } ,
    {
        Name : "Moniza" ,
        Age : 53 ,
        Gender : "Female" 
    } ,
    {
        Name : "Faruk" ,
        Age : 29 ,
        Gender : "Male" 
    },
    {
        Name : "Arif" ,
        Age : 28 ,
        Gender : "Male" 
    },
    {
        Name : "Fahima" ,
        Age : 22 ,
        Gender : "Female"
    },
    {
        Name : "Shova" ,
        Age : 21 ,
        Gender : 'Female'
    }
]
console.log(familyMemberDetailce[4].Name) ;
*/




let shoppingList = [
    {
        items : "Makeup" ,
        quantity : 20 ,
        bill : 8500 ,
    } ,
    {
        items : "Dress" ,
        quantity : 7 ,
        bill : 12000 
    } ,
    {
        items : "Cosmetic" ,
        quantity : 6 ,
        bill : 9000  
    } ,
    {
        items : "Jewelllery" ,
        quantity : 15 ,
        bill : 250000 
    } ,
    {
        items : "Shoes" ,
        quantity : 5 ,
        bill : 9500  
    }
]



// let totalBill = 0
// for(i=0 ; i<shoppingList.length ; i++){
// totalBill = totalBill + shoppingList[i].bill ;                                    
// }
// console.log( totalBill ) ;


let i=0 ; 
let totalBill = 0 ;
while(i<shoppingList.length){
totalBill = totalBill + shoppingList[i].bill ;
    i++ ;
}
console.log(totalBill) ;


// console.log( shoppingList ) ;


// shoppingList.pop() ;
// console.log( shoppingList ) ;


// shoppingList.push( {
//     items : "Food" ,
//     quantity : 7 ,
//     bill : 1200 
// } ) ;
// console.log( shoppingList ) ;


// shoppingList.shift() ;
// console.log( shoppingList ) ;


// shoppingList.unshift(
//     {
//         items : "Gold" ,
//         quantity : 5 ,
//         bill : 300000 
//     }
// )
// console.log( shoppingList ) ;









