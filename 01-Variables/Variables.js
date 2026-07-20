// variable  Declaration and Initialization
// var a = 13;
//  console.log(a);

// let b = 12;
//  console.log(b);

//  const pi=3.14;
//  console.log(pi);`




// Hoistiong

//  console.log(x);
//  var x=10;            
// var hoisted  and set to undifined 



//  console.log(x);
//  let x=20;   
// let hoisted and set to referanceError



//  console.log(x);
//  const x=20;   
// const hoisted and set to referanceError




// TDZ -Temporial Dead zone-- time  between variable created and Initialization

// console.log(A);         ----(referance errer)
// let A = 30;
// console.log(A);         ----(disply result as 30)




// reassigning

// reassigning possible for var & let but not for const

// var a=20;
// a=30
// console.log(a);


//  let a=20;
// a=30
// console.log(a);


//  const a=20;
// a=30
// console.log(a);
// Uncaught TypeError: Assignment to constant variable.



// Redeclaratin 
// var can br Redeclara
// var z=20;
// var z=30;
// console.log(z);


// let and const cannot be Redeclara
// let z=20;
// let z=30;
// console.log(z);

// const y=20;
// const y=30;
// console.log(y);
// Uncaught SyntaxError: Identifier 'y' has already been declared (at script.js:72:5)





// var x= 1;
// {
//     var x=2;
// }
// console.log(x);

// 2 answer because var is functional scooped it dosent respect {}



// let x= 1;
// {
//     let x=2;
//     console.log(x);

// }
// console.log(x);
