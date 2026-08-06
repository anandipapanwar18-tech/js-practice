// let fruits = ["Apple", "Banana", "Orange"];
// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])


// // Using Array constructor
            // let numbers = new Array(1, 2, 3, 4);
            // console.log(numbers)

// Modifying elements
            // let fruits = ["Apple", "Banana", "Orange"];
            // console.log(fruits[0])
            // console.log(fruits[1])
            // console.log(fruits[2])

            // fruits[1]="Mango";
            // console.log(fruits[1])


            //    console.log(fruits[0])
            // console.log(fruits[1])
            // console.log(fruits[2])


// Array length
                // let num=[1,2,4,6,7];
                // console.log(num.length);
                // in this example index is 0 to 4 and length is 5


// push() – Add to the end

                // let arr = [1, 2];
                // arr.push(3);
                // arr[3]=4;
                // arr[5]=4;

                // console.log(arr);



// POP   pop() method removes the last element from an array and returns that element.
                // let Arr=[1,2,3,4,5];
                // Arr.pop();
                // console.log(Arr);

// Shift reomve element at first

                // let flower=["Sunflower", "lily"];
                // flower.shift();
                // console.log(flower);
        
 // unshift() – Add to the beginning
                // let arr = [1, 2];
                // arr.unshift(5   );
                // console.log(arr)



// slice()-->splice() modifies an array by removing, replacing, or adding elements in place and returns the deleted elements.

                // let a=[1,2,3,4,5,6];       //removing
                // a.splice(2,1)
                // console.log(a);
                // a.splice(2,2,50,60)       //adding
                // console.log(a);
                // a.splice(0,0,100)         //replacing
                // console.log(a);


// slice()-->Copy a portion to new array

                // let ar=[1,2,3,4,5,6,7]
                // let newarr=ar.slice(0,3)
                
// Reverse() reverse the array elements
                // let a=[1,2,3,4,5];
                // a.reverse()
// Sort() sort the array elemnts
                // let a=[1,0,3,2,4,6,3,5];
                // // a.sort()

                // let ascendingOrder = a.sort(function(a, b)
                // { return a - b; });



                //  let dessendingOrder=a.sort(function(a,b){
                //         return b-a;
                // });




// Spread Operator (...)
// Copy an array
                //let arr=[1,2,3,4,5,6]
                //let arr2=[...arr]

                //   let arr=[1,2,3,4,5,6]
                // let arr2=[...arr]
                // arr2.pop();



// Loop Through an Array

// Using for loop
                //  let Arr=[1,2,3,4,5];
                //        for(let i =0;i<Arr.length;i++){
                //         console.log(Arr[i]);
                //        }


                // let fruits = ["Apple", "Banana", "Mango"];

                // for(let fruit of fruits){
                //     console.log(fruit);
                // }


// for each ()

                // let arr=[1,2,3,4,5,6,7]
                // arr.forEach(function(val){
                //         console.log(val)
                // });




// Map()    What is map()?

// The map() method creates a new array by applying a function to every element of the original array.

// It does not modify the original array.
// It always returns a new array.
// It is used when you want to transform each element.
                //  let arr=[11,22,33,44,55,66]

                //  let newarr=arr.map(function(val){
                //     return 77;
                //  })



                // let arr=[1,2,2,3,4,56]
                // let second =arr.map(val=>val * val);
                // console.log(second)


                // let fruits=["apple","mango","banana"]
                // let toupper=fruits.map(fruit=>fruit.toLocaleUpperCase());
                // console.log(toupper)


                
              


// reduce() in JavaScript is an array method that reduces an array to a single value by applying a callback function to each element.

                // const numbers = [1, 2, 3, 4, 5];
                // const sum = numbers.reduce((acc, curr) => acc + curr, 0);
                // console.log(sum); 


                    //const nums = [10, 5, 20, 8];
                    // const max = nums.reduce((acc, curr) => {
                    //   return curr > acc ? curr : acc;
                    // }, nums[0]);
                // console.log(max)



// The find() method returns the first element in an array that satisfies a given condition.

// If a matching element is found → it returns that element.
// If no element matches → it returns undefined.


                // const numbers = [10, 20, 30, 40, 50];
                // const result = numbers.find(num => num > 25);
                // console.log(result);



                // let a=[2,34,56,78,5,34,6,1]
                // let result=a.find(num=>num%2==0)
                // console.log(result)

// some() and every() in JavaScript
// Both some() and every() are array methods used to test elements against a condition.
// some() → Checks if at least one element satisfies the condition. (return true or false )
// every() → Checks if all elements satisfy the condition.

// Some()
                // let a=[2,34,56,78,5,34,6,1]
                // let result=a.some(num=>num%2==0)
                // console.log(result)
// every
                //const numbers = [2, 4, 6, 8];
                // const result = numbers.every(num => num > 0);
                // console.log(result);



// Destructuring is a JavaScript feature that lets you extract values from arrays or properties from objects and store them in variables in a simple way.

                // let aa=[1,23,4,5,7];
                // let [a,b,,d]=aa;



                // let fruits=["Apple","banana","mango", "graphs"];
                // let [a,b]=fruits;
                // console.log(a)
                // console.log(b)



                // Without Destructuring
                // const colors = ["Red", "Green", "Blue"];
                // const first = colors[0];
                // const second = colors[1];
                // const third = colors[2];

                // console.log(first);
                // console.log(second);
                // console.log(third);



                // With Destructuring
                // const colors = ["Red", "Green", "Blue"];
                // const [first, second, third] = colors;
                // console.log(first);
                // console.log(second);
                // console.log(third);


                // Swap Variables

                // let a=20;
                // let b=30;
                // [a,b]=[b,a]
                // console.log(a)
                // console.log(b)