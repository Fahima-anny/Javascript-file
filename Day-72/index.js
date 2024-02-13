// 
// for( i = 1 ; i<=10 ; i++){
//     let multiNo = 5 ;
//     let multi = multiNo * i ;
//     console.log( multiNo , "x" , i , "= " , multi );
// }
// 



// for( i=100 ; i>=1 ; i--){
// console.log(i);
// }


// let name$ = [ 'Fahima' , 'Tahmina' , 'Karima' , 'Trisha' ] ;
// for( i=0 ; i< name$.length ; i++ ){
//     console.log(name$[i]);
// }


// for( i=0 ; i<=10 ; i++){
// if( i%2==0 ){
//     console.log(i ,"= even");
// }
//   else{continue};

// }


// for( i=2 ; i<=30 ; i++){
// let primeNo = true ;

// for( let j=2 ; j<i ; j++ ){
// if( i % j === 0 ){
//  primeNo = false ; 
//  break ; 
// }
// }

// if( primeNo ){
// console.log( `${i} = is a prime number `) ;
// }
// }



// for(i=2 ; i<=10 ; i++){
// let primeNo = true ; 

// for(let j=2 ; j<i ; j++){
// if( i % j == 0 ){
// primeNo = false ;
// break ;
// }
// }

// if( primeNo ){
//     console.log(` ${i} = is a Prime Number `);
// }
// }



for( let i=2 ; i<=30 ; i++){
let Prime = true ;

for(let j=2 ; j<i ; j++ ){
if(i % j == 0 ){
Prime = false ;
break ;
}
}

if(Prime){
    console.log(`${i} = Prime Number`);
}
}











