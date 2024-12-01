// Practises of all learned Chapters & codes

// Firts Class
// const sameeaWaqar = {
//     name: "SameeaWaqar",
//     cast: "DethoThaheem",
//     age: 17,
//     isLovers: true
// };

// console.log(sameeaWaqar);

//  const ring = {
//     pName: "DEKELIFE CONNECTED RING",
//    pPrice: 59.30,
//    pColourAvailable: "White & Black",
//     pRating: 5,
//     isPucrchased: true,
//     isAvailable: true,
// };

//  console.log(ring);



// 2nd class 
// Arthimatic operators

// let a = 5;
// let b = 2;

// console.log("a =", a, "& b = ", b);
// // console.log("a + b =", a + b);
// // console.log("a - b =", a - b);
// // console.log("a * b =", a * b);
// // console.log("a / b =", a / b);
// // console.log("a % b =", a % b);
// // console.log("a ** b =", a ** b);

// a--;
// console.log(a);



// Assignment operators
//  let a= 5;
//  let b = 2;

//  a **= 4;
//  console.log(a);

// Comparison operators
// let a = 5;
// let b = "2"; 

// console.log("a !== b", a != b);
// console.log("a == b", a == b);
// console.log("a === b", a === b)


// Logical Operators

// let a = 6;
// let b = 5;

// let cond1 = a < b;
// let cond2 = a === 6 ;
// console.log("cond1 && cond2 =", cond1 && cond2); logical and
// console.log("cond1 || cond2 =", cond1 || cond2); logical or
// console.log("!(a<b)=", !(cond1));

// Conditional statements
//  let age = 25; 
//  if(age > 18) {
//     console.log("Yea, you can vote");
//  }

//  if(age < 18) {
//     console.log("Nah, You can't vote for now");
//  }


// let mode = "dark";
// let color;

// if(mode === "dark") {
//     color = "black";
// }

// if(mode === "light") {
//     color = "white";
// }

// console.log(color)

// let age = 25;

// if(age >= 18) {
//     console.log("you can vote");
// } else{
//     console.log("YOu can not vote")
// }


// let num = prompt("Enter value");
// if(num % 2 === 0) {
//     console.log("even number");
// } else{
//     console.log("odd Number");
// }

// console.log(num)

// let = mode = "dark";
// let color;

// if(mode === "dark") {
//     color = "black";
// } else if(mode === "red") {
//     color = "red";
// } else{
//     color = "white";
// }

// console.log("mode is:", mode, "color is:", color);

// let age = 25;
// let result =  age >= 18 ? "adult" : "not adult";
// console.log(result);

// let num = prompt("Enter your value");

// if ( num % 5 === 0) {
//     console.log("is a multiple of 5");
// } else{
//     console.log("is not a multiple of 5");
// }

// console.log(num);

// let score = 33;
// let grade;

// if(score >= 90 && score <= 100) {
//     grade = "A";
// } else if(score >= 70 && score <= 89){
//     grade = "B";
// } else if(score >= 60 && score <= 69) {
//     grade = "C";
// } else if(score >= 50 && score <= 59){
//     grade = "D";
// } else if(score >= 0 && score <= 49) {
//     grade = "F";
// }
// // console.log(score);
// console.log("According to your score...your grade was: " , grade);


// 3rd class loops and strings

// for(let  i = 1; i <=50; i++) {
//     console.log(i,  "waqarhussain");
// }

// Sum of 1 to 10 loop program

// let sum = 0;
// for( i = 1; i <= 10; i++) {
    // sum += i;
// }
// console.log("sum = ", sum);

// While loop

// let i = 1; /*Initialization statement should be indicated before writting stopping condition in while loop*/
// while(i <= 100) {  /*Only stopping condition is written in the while loop*/
//     console.log("waqars", i);
//     i++; /*updating condition is written in the block*/
// }

// do while loop just little change, in this loop we've to indicate starting variable before and main state: in last and the program after writting the do tag.

// let s = 1;
// do{
//     console.log("Waqars", s);
//     s++;
// } while(s<=59);

// for of loop used to loop the characters of a string
// let str = "ILOVEJS"
// let size = 0;
// for(let i of str ) {
    // console.log("i= ",  i);
    // size++;
// }

// for in loop used to loop the keys of objects


// let waqar = {
//     name: "Waqar",
//     age: 20,
//     isPass: true,
// };

// for(let i in waqar) {
//     console.log(i, waqar[i]);
// }

// practise

// for(let num = 1; num <= 100; num++) {
//     if(num %2 === 0) {
//         console.log("num =", num);
//     }
// }

// let gameNum = 41;
// let userNum = prompt("Enter the correct value");
// while(gameNum != userNum) {
//    userNum = prompt(" You Entered the wrong value:");
// }

// console.log("you entered the correct value");

let str = "waqarhussain";
console.log(str[0])