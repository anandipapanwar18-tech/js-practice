// Primitive data types
// number 
    // let n=20;
    // console.log(n);


// string
    // let a="anandi";
    // let b='Sanjay';
    // let c=`Papanwar`;
    // console.log(a);
    // console.log(b);
    // console.log(c);



// Null --when you intentionaly dont give value 
    // let x=null;
    // console.log(x);



// undifined
    // let a= undefined;
    // console.log(a);


// boolen
    // let isStudent = true;
    // console.log(isStudent);

    // let age=20;
    // console.log(age>=18);



// BigInt--used to store large number 
// let a =24862364427828612236189192873362n;
// console.log(a);


// If we check by Number.MAX_SAFE_INTEGER a varible can hold 9007199254740991 this large number so if we want to store larger than this then we can use BigInt



// Symbol --used to store unique value

    // for exampla without using symbol

        // let id1=101;
        // let id2=101;
        // console.log(id1===id2);
    
    // answer will be true


    // now by using symbol we can store unique value
        // let id1 = Symbol("101");
        // let id2 = Symbol("101");
        // console.log(id1===id2);

    // asnwer is fales


    // Referance data type
// Objects---stores multiple value together

        // let Student ={
        //     name: "anandi" ,
        //     age: 21
        // };
        // console.log(Student.name);
        // console.log(Student.age);


// Array ----stores  multiple values in single variable 
    //  let a =[10,20,30];
    //  let b=a;
    //  b.pop(); 



    //  let a =[10,20,30];
    //  let b=a;
    //  console.log(a[0]);
    //  console.log(a[1]);
    //  console.log(a[2]);

    //  console.log(b[0]);
    //  console.log(b[1]);
    //  console.log(b[2]);

// function

    // function greet(){
    //     console.log("hello");
    // }

    // greet();




// Dynamic type
// it means we do not declare the data type of variable . js automatically decide the data type based on value


    // let x =22;
    // console.log(x);
    // x="anandi";
    // console.log(x);
    // x=null;
    // console.log(x);
    // x=undefined;
    // console.log(x);
    // x=true;
    // console.log(x);



// type coercion

// let a= "5" + 1;
// console.log(a);

// let b= "5" - 1;
// console.log(b);
 
// console.log(true + false);
// console.log("5" * 1);



// truthy and falsy values

// false values are --> Nan, null,0, false ,undifined, -0,0n,""
// and other all are true values (like 1,10,-5, true,[],{},"hello")

// let age =0;
// if(age){
//     console.log("valid");
// }else{
//     console.log("invaild");
// }



// why NaN == number
// becaues it is failed number operation 

