// Create a function greet() that prints: Hello, Welcome!
        // function greet(){
        //     console.log("hello welcome ");
        // }
        //  greet();


// Create a function square(num) that returns the square of a number.

        // function square(num){
        //     return num*num;
        // }

        // console.log(square(2));


// Write a function isEven(num) that returns true if the number is even, otherwise false.

        // function isEven(num){
        //     if(num%2==0){
        //         return true;

        //     }
        //     else{
        //         return false;
        //     }
        // }

        // let result= isEven(2);
        // console.log(result);    


// Create a function that returns the largest of two numbers.

        //  function MaxValue(n, m){
        //         if(n>m){
        //             return n;
        //         }else{
        //             return m;
        //         }
        //     }
        //     console.log(MaxValue(3,4));



        
    
        // function MaxValue(n, m){
        //     return Math.max(n,m);
        // }
        // console.log(MaxValue(3,4));



// Write the following using a function expression.

// function add(a,b){
//     return a+b;
// }


        // let add=function(a,b){
        //     return a+b
        // }

        // let result =add(2,3);
        // console.log(result);



// Create a function expression that checks whether a number is positive or negative.

        // let PN= function(num){
        //     if(num>0){
        //         console.log("positive");
        //     }else {
        //         console.log("Negative");
        //     }
        // }


        // PN(3)



// Convert this into an arrow function.

// function multiply(a,b){
//     return a*b;
// }

        // let Mul=(a,b)=>{
        //     return a*b;
        // }

        // console.log(Mul(2,3));


// Write an arrow function that returns the cube of a number.

        // let cube=(n)=>{
        //     return n*n*n;
        // }

        // console.log(cube(2));


// Write an arrow function to calculate BMI.
// Formula
// BMI = weight / (height * height)


        // let BMI=(w,h)=>{
        //     return w/(h*h);
        // }

        // let bmi=BMI(80,6.3);
        // console.log(bmi);


//         let calcBMI = (w, feet, inches) => {
//     let totalInches = (feet * 12) + inches;
//     let meters = totalInches * 0.0254;
//     return w / (meters * meters);
// };

// let bmi = calcBMI(80, 6, 3); // 80 kg, 6 feet 3 inches
// console.log(bmi);




// Create a function
// introduce(name, age)
// Output :My name is Anandi and I am 21 years old.



            // function introduce(name, age){
            //     console.log(`my name is ${name} and i am ${age} years old.`);
            // }

            // introduce("anandi", 21);



// Create a function with three parameters.
// price
// quantity
// tax
// Return the total bill.

            // function product(price, quantity,tax){
            //         return (price*quantity)+tax;
            // }
            // let bill=product(20,2,3);
            // console.log(bill);



// function demo(a,b){
//     console.log(a,b);
// }

// demo(10)

// output will be the 10 undefined





// Write a function that returns the factorial of a number.


                // function factorial(n){
                //         let fact=1;
                //         for(let i=1;i<=n;i++)
                //         fact=fact*i
                //         console.log(fact);
                // }

                // factorial(10);



        // function greet(name ="Anandi"){
        //         console.log(name);
        // }

        // greet();
        // greet("Pratik");



// Write a calculator function.
// calculator(a,b,operator="+")
// If no operator is passed, perform addition.



                        // function calculator(a,b,operation="+"){
                        //         switch(operation){
                        //                 case "+":
                        //                         return a+b;        
                        //                 break;
                        //                 case "-":
                        //                         return a-b;
                        //                 break;      
                        //                  case "*":
                        //                         return a*b;
                        //                 break;        

                        //                  case "/":
                        //                         return a/b;
                        //                 break;        
                        //         }
                        // }

                        // let result=calculator(2,4,"-");
                        // console.log(result);


// rest parameter


        // function numbers(...a){
        //         console.log(a);
        // }

        // numbers(1,2,3,4,5,6,7,7,8,9,0,-0,4,3,11,22,33,44,55,66,77,88,99,00)



// Write a function to find the largest number using rest parameters.


                // function largest(...a){
                //         let max=Math.max(...a);
                //         console.log(max);
                // }

                // largest(1,23,4,5,6,7,8,89,0,8,54,23,45,23,65,23,432,243,1234,134,2);  
                


// except the number of parementers using rast parameter and return the total


                // function  demo(...num){
                //         let total=0;
                //         num.forEach(function(val){
                //                 total+=val;
                //         });
                //         return total;

                // }


                // console.log(demo(1,2,3,4,5,6,7));



// early return

                // function age(a){
                //         if(a>18) return "eligible";
                //         return "not eligible";
                // }

                // let result=  age(22);
                // console.log(result)


// function fun(){
//         return ;
// }

// console.log(fun())





// pass the function into another function and execite it inside
        // function animal(val){
        //         val();
        // }


        // animal(function (){
        //         console.log("hello")
        // });



// higher order function:= higher-order function is a function that either takes one or more functions as arguments or returns a function as its result.


// function abcd(){
//         return function val(){
//                 console.log("hello its me anandi")
//         }
// }

                                // to Calls both the outer and inner function
// abcd()();



// pure functions are completely predictable and cause no changes to the outside world,
// while impure functions can yield different results for the same inputs and produce observable side effects.




// A closure is a feature in JavaScript where an inner function retains 
// access to the variables and scope of its outer function, even after that 
// outer function has finished executing
//   example


                // function outer(){
                //         let num =11;
                //         return function (){
                //                 console.log(num)
                //         }
                // }


                // outer()();



        // function outer(){
        //         let count=0;
        //         return function(){
        //                 count++;     
        //                 console.log(count);

        //         }
        // }


        // let counter=outer();
        // counter();
        // counter();


// reverse string 

// const reverseString= function(str){

//         return str.split("").reverse().join("");

// };

// console.log(reverseString("anandi"))






//im pure function
        // let total=22;
        // function demo(amount){        
        //         return total+=amount;
        // }
        // console.log(demo(100))



// let count = 0;

// function increment() {
//     count++;
// }




// An IIFE is a function that is created and executed immediately after it is defined.
// Example : Calculate Sum


        // (function(a,b){
        //         console.log(a+b)

        // })(1,2);


 // calculete sum of numbers from 1 to 10;

        //  (function(){
        //         let sum=0;
        //         for(let i=1;i<=10;i++){
        //                 sum+=i;
        //         }
        //         console.log("sum of numbers from 1 to 10",sum);
        //  })();


        



        // Hoisting means JavaScript moves declarations to the top of their scope before execution.


        // greet();

        // function greet(){
        //         console.log("hello");
        // }


// BMI calculator
  

function bmi(w,h){
        return w/(h*h);

}


console.log(bmi(64,1.7).toFixed(2));