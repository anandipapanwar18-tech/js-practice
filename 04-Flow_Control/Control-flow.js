// Q  Write a function getGrade (score) that:
// Takes a student's marks (0 to 100)
// Returns the grade based on this logic:
// 90-100 A+
// 80-89 A
// 70-79 B
// 60-69 C
// 33-59 D
// 0-32 Fail
// Anything else
// Invalid marks X


 
// function getGrade(score){
//     if(score>=90 && score<=100){
//         return "A+";
//     }else if(score>=80 && score<=89){
//         return "A";
//     }else if(score>=70 && score<=79){
//         return "B";
//     }else if(score>=60 && score<=69){
//         return "C";
//     }else if(score>=33 && score<=59){
//         return "D";
//     }else if(score >=0 && score <=33){
//         return "fail";
//     }else {
//         return "invalid makrs"
//     }

// }
// let marks =prompt("Enter the  students makrs :");
// console.log(getGrade(marks));





// BY using early return 


// function getGrade(score){
//     if(score>=90 && score<=100) return "A+";
//     if(score>=80 && score<=89) return "A";
//     if(score>=70 && score<=79) return "B";
//     if(score>=60 && score<=69) return "C";
//     if(score>=33 && score<=59) return "D";
//     if(score >=0 && score <=33) return "fail";
//     return "invalid makrs"

// }
// let marks =prompt("Enter the  students makrs :");
// console.log(getGrade(marks));



// Rock paper and sessior example

// function rps(first, second) {

//     if (first === second)
//         return "Draw";

//     if (
//         (first === "rock" && second === "scissor") ||
//         (first === "paper" && second === "rock") ||
//         (first === "scissor" && second === "paper")
//     ) {
//         return "Player 1 Wins";
//     }

//     return "Player 2 Wins";
// }

// let user1 = prompt("Player 1: Rock, Paper or Scissor");
// let user2 = prompt("Player 2: Rock, Paper or Scissor");

// console.log(rps(user1.toLowerCase(), user2.toLowerCase()));





// switch case examople 

// let day=3;
// switch(day){
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:
//         console.log("wednesday");
//         break;
//     case 4:
//         console.log("thrusday");
//         break;
//     case 5:
//         console.log("friday");
//         break;
//     case 6:
//         console.log("saturday");
//         break;
//     default :
//         console.log("invalid choice");

// }
