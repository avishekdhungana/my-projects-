<<<<<<< HEAD

const dateInput =document.getElementById("dateInput");
const incomeInput=document.getElementById("incomeInput");
const expenseInput = document.getElementById("expenseInput");
const calculateBtn = document.getElementById("calculateBtn");
const resultDiv = document.getElementById("result");



 calculateBtn.addEventListener("click",function(){
    

    const date = dateInput.value.trim()
    const income =incomeInput.value.trim()
    const expense= expenseInput.value.trim()


    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    const incomePattern = /^\d+(\.\d{1,2})?$/;
    const expensesPattern = /^-?\d+(\.\d{1,2})?$/;
     

    if(!date || !income|| !expense){
        alert("please enter in all input filed")
        return;
     } else if(!datePattern.test(date)){
        alert("please write in date format")
        return;
     } else if(!incomePattern.test(income)){
        alert("please enter correctly")
        return;
     } else if(!expensesPattern.test(expense)){
        alert("please write expense correctly")
        return;
     }
       const balance = parseFloat(income) - parseFloat(expense);

       const displayDiv = document.createElement("div")
        displayDiv.innerHTML=`
        <p><strong>Date:</strong>${date}</p>
                <p><strong>Income:</strong>$${income}</p>
                        <p><strong>Expense:</strong>RS${expense}</p>
                                    <p><strong>Balance:</strong> RS${balance.toFixed(2)}</p>

                                    <hr>
                              `;  

                                      resultDiv.appendChild(displayDiv);

    

});




=======
// // let a ;
// // for(let num=1;num<=20;num++){
// //     if(num%2==0)
// //         console.log (num+ "it is even number")
// //         else{
// //             console.log(num+ "it is odd")
// //         }
// //     }

// // console.log("You entered: " + a);


// // for(let num=1; num<=30 ;num++){
// //     if (num%5===0 && num%3===0){
// //                 console.log(num+"fizzbuzz")
// //      } else if (num%3==0){
// //         console.log(num+ "fizz")
// //      }else if (num % 5==0) {
// //             console.log(num+ "Buzz")
// //       } else{
// //                 console.log(num);
            // 

        


// //         }
    

//         for(let num=1;num<=10;num++){
//             if(num<5){
//                 console.log(num+"it is small");
//             }else if(num>=5){
//                 console.log(num+ "big")

//             }
//             }
        
// let count = 0;
// for(let num=1;num<=50;num++){
//     if(num%4==0){
//         console.log(num+"it is divisble by 4 and even");
//         count++
        
//     }
// }
// console.log("Total numbers divisible by 4: " + count);

// for(let num=1;num<=100;num++){
//     if(num%10==0){
//         console.log( "milestone")
//     }else{
//         console.log(num);
//     }
// }

// for(let num=1;num<=15;num++)
//     if(  num%2!=0){
//         console.log(num+ "it is prime number")

//     }else{
//         console.log(num);
//     }

    // for(let num=1;num<=100;num++){
    //     if(num%7==0 && num%3!==0){
    //         console.log(num+"it is correct")
    //     }else{
    //         console.log("it is incorrect")
    //     }
    // }

//     for (let num = 1; num <= 30; num++) {
//     if ((num % 2 === 0 && num % 3 !== 0) || (num % 3 === 0 && num % 2 !== 0)) {
//         console.log(num + " Only one");
//     }
// }
// for(let num=1;num<=50;num++){
//          if(num%3==0 && num%5!==0){
//              console.log(num+"it is div by 3 n by 5") 
//          }else{
//              console.log("num")
//          }
//      }
// let sum=0;
//      for(let num=1;num<=100;num++){
//         if(num%2==0){
//             console.log(num+"it is even");
            
//          sum=sum+num;
//         }
//      }
//      console.log("The sum of even numbers from 1 to 100 is: " + sum);


// today break continue

//  for(let num=1;num<=15;num++){
//     if(num===10){
//         break;
//     }
//     else{
//         console.log(num)
//     }
//  }

// let a =prompt("enter a number");
// for(let num=1;num<=a;num++){
    // if(num%2==0){
        // continue;
    // }else if(num===13){
//  /       break;
    // }else{
        // console.log(num);
    // /}
// }
// console.log(a);


// let num = 17;                 // Number to check
// let isPrime = true;          // Start by assuming it's prime

// for (let i = 2; i < num; i++) {      // Try dividing from 2 to num - 1
//     if (num % i === 0) {             // If divisible (no remainder)
//         isPrime = false;            // Not a prime
//         break;                      // Exit loop early
//     }
// }

// if (isPrime) {
//     console.log(num + " is prime");
// } else {
//     console.log(num + " is not prime");
// }


// f







// let num=6;
// let isPrime=true;
// for(let i=2;i<num;i++){
//     if(num%i === 0){
//          isPrime=false;
//          break;
//     }
//     }
//     if(isPrime){

//         console.log(num+ "it is prime");
//     }else{

//         console.log(num+"it is not a prime number");
//     }










// for(let num=2;num<=40;num++){
//     isPrime=true;

// for(let i=2;i<num;i++){
//     if(num%i===0){
//         isPrime=false;
//         break;
//     }
// }
// if(isPrime){
//     console.log(num+"is prime")
// }
// }


// let n =10;
// let n1=0;
// let n2=1;

// let nextTerm;

// console.log('fibanocii series');
// for(let i=0;i<=n;i++){
//     console.log(n1);
//     nextTerm=n1+n2;
//     n1=n2;
//     n2=nextTerm;
    // 

// let num=parseInt(prompt("enter any number"));

// if(num>0){
//     console.log("it is a positve number");
// }else if(num===0){
//     console.log("it is zero");
// } else{
//     console.log("it is negative")
// }

// let num=parseInt(prompt("enter a year"))
 
// if(num%4===0){
//     console.log(num+" is leap year")
// }else{
//     console.log(num+" is not a leap year")
// }

//  let num1=parseInt(prompt("enter number 1"))

//  let num2=parseInt(prompt("enter number 2"))

// let num3=parseInt(prompt("enter number 3"))


// if(num1>num2&&num1>num3){
//     console.log(num1+" 1st entry is greatest");
// }else if(num2>num1&&num2>num3){
//     console.log(num2+" 2nd entry is greatest")
// }else if(num3>num1&&num3>num2){
//     console.log(num3+" 3rd entry is greatest");
// }else{
//     console.log("two or more numbers are euqal");
// }

// for(let num=7;num<=70;num++){
//     if(num%7===0){
//         console.log(num);
//     }
// }


// let sum=0;
// for(let num=1;num<=100;num++){
//    sum=sum+num;
// }
// console.log(sum);

// let i=10;
// while(i>=1){
//     console.log("count",i);
// i--
// }
// let factorial=1;
// let i=1;
// while(i<=7){
//       factorial *= i;
//     i++
// }
// console.log("factorial of 7", factorial);

// for(let num=1;num<=10;num++){
//     if(num===5){
//         continue;
//     }else{
//         console.log(num);
//     }
// }
// for(let num=1;num<=10;num++){
//     if(num===7){
//         break;
//     }else{
//         console.log(num);
//     }
// }


//function start


// const welcome = () =>{
//     console.log("welcome to js");
// }
// welcome();

// const square = (a) =>{
//     return a*a

// }
// console.log(square(8));

// const add = (a, b) =>{
//     return a+b

// }
// console.log(add(2,4))


// const welcome =(name) =>{
//     return `Hello, ${name}`
// }
// console.log(welcome("avishek"));


// const even = (num) =>{
//     if(num%2==0){
//         return "even"
//     }else{
//         return "odd"
//     }
// }
// console.log(even(23));


// const big = (a, b, c) =>{
//     if(a>b&&a>c){
//         return "A greatest"
//     } else if(b>a&&b>c){
//         return "B greatest"
//     } else if(c>a&&c>b){
//         return "C greatest"
//     }else{
//         return "two equal all equal"
//     }
// }
// console.log(big(1,1,1))



// const prime = (num) =>{
//     if(num<0){
//         return " Not prime"
//     }for(let i=2;i<=Math.sqrt(num);i++){
//         if(num%i===0){
//             return "not prime"
//         }
//     }
//     return "prime"
// }
// console.log(prime(2));


// const factorial = (num) =>{
//     let result=1;
//     for(let i=1;i<=num;i++){
//         result *= i;

//     }
//     return result;
// }
// console.log(factorial(5));



// const big = (a, b, c) =>{
//     if(a>b&&a>c){
//         return "A greatest"
//      } else if(b>a&&b>c){
//          return "B greatest"
//      } else if(c>a&&c>b){
//          return "C greatest"
//     }else{
//         return "two equal all equal"
// } }
// console.log(big(1,1,1))
 

// const avg = (num) =>{
//     let result=0;


// for(let i=1;i<=num;i++){
//      result +=i;
// }
// return result;
// }
// console.log(avg(5));


// const mux = (num) =>{
//     for(let i =1;i<=70;i++){
//                 console.log(`${num} x ${i} = ${num * i}`);

//         }
//     }

// mux(5);

// const odd = (num) =>{
//     if(num<2){
//         return "not prime"
//     }
// for(let i=0;i<=Math.sqrt(num);i++){
//     if(num%i==0)
//     return "not prime"
// }
// return "prime";
// }
// console.log(odd(2));


/*const mux = (num) =>{
    let factorial =1;
    for(let i=1;i<=num;i++){
      factorial *= i;
    }
    return factorial;
}
console.log(mux(6))*/


// const non = (name) =>{
//     return `hello, ${name} welcome to js`
// }
// console.log(non("avishek"));


// const even = (num) =>{
//     let sum=0;
//     for(let i=0;i<=num;i++){
//         if(i%2==0){
//             sum +=i;
//         }
//     }
//     return sum;

// }
// console.log(even(10));
 

// const prime =(num)=>{
//     if(num>2){
//         return "not prime";
//     }
//     for(let i=0;i<=Math.sqrt(num);i++){
//     if(num%i==0){
//             return "not prime"
//         }
//     }
//     return "prime"
// }
// console.log(prime(10));

// const factorial = (num) =>{
//     let result =1;
//     for(let i=1;i<=num;i++){
//         result *= i;

//     }
//     return result;
// }
// console.log(factorial(30));


// const ohh = (name) =>{
//     return `Hello ${name} welcome to js`
// }
// console.log(ohh("ram"));

// const tuc = (str) => {
//    return str.includes("love")

// }
//     console.log(tuc("i love coding"));

//     const colors = ["red",
//         "green",
//         "blue",
//     ]
//    console.log(colors[1]);


   
//     const colors = ["red",
//         "green",
//         "blue",
//     ]
//     colors[2]="yellow";
//    console.log(colors);

//   const colors = ["red",
//         "green",
//         "blue",
//     ]
//     colors.push("purple");
//    console.log(colors);

//      const colors = ["red",
//         "green",
//         "blue",
//     ]
//     colors.shift();
//    console.log(colors);


//      const colors = ["red",
//         "green",
//         "blue",
//     ]
//     colors.unshift("pink");
//    console.log(colors);

// const fruits = [
//     "Banana",
//     "Orange", 
//     "Apple",
//      "Mango"];
// console.log(fruits.join(""));
// const number = [
//     ];
//     number.push(10,20,30)
// console.log(number)
// const number = [
//     ];
//     number.push(10,20,30)
//     number.pop()
//     number.unshift(5);
//      number.splice(1, 1);

// console.log(number);


// const numbers = [1, 2, 3, 4];
// const squares = numbers.map(num => num * num);
// console.log(squares);  
// console.log(numbers); 

// const numbers = ["ram", "shyam", "sita", "gita", "aviiiiiiiiiiiiii"];
// const evens = numbers.filter(words => words.length>4);
// console.log(evens);   
// console.log(numbers);

// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);  // 10


// const number = [1, 5, 10, 15];
// const square =number.map(num=> num*num);
// const arr = number.filter(num=> num>5);
// const sum = number.reduce((acc, cur)=> acc+cur ,0);
// console.log(square);
// console.log(arr);
// console.log(sum);


// const names = ["ram", "shyam", "gita", "sita"];
// const upper=names.map(naam => naam.toUpperCase() );
// console.log(upper);


// const nums = [1, 2, 3, 4, 5, 6];
// const evn = nums.filter(n=> n%2==0);
// console.log(evn);

// const nums = [1, 2, 3, 4, 5, 6];
// const evn = nums.reduce((acc, cur)=> acc*cur , 1);
// console.log(evn);



// const nums = [3, 8, 12, 5];
// const found =nums.find(num => num>10)
// console.log(found)



// const nums = [1, 5, 7, 10];
// const found =nums.every(number=> number<0);
// console.log(found)

// const item = document.querySelector("li:nth-child(2)");
// console.log(item.innertext);
// console.log("Script is running");

// const item = document.querySelector("li:nth-child(2)");
// console.log(item.innerText);
const workInput = document.getElementById("workInput");
const timeInput = document.getElementById("timeInput");
const saveBtn = document.getElementById("SaveBtn");
const listItem = document.getElementById("listItem");

saveBtn.addEventListener("click", function () {
  const work = workInput.value.trim();
  const time = timeInput.value.trim();

  
  const workPattern = /^[a-zA-Z\s]+$/;        
  const timePattern = /^\d{1,2}\s?(AM|PM|am|pm)$/; 

  
  if (!work || !time) {
    alert("Please enter both work and time");
    return;
  } else if (!workPattern.test(work)) {
    alert("Work should only contain letters.");
    return;
  } else if (!timePattern.test(time)) {
    alert("Time must be in format like '10 AM' or '9 pm'.");
    return;
  }

  
  const li = document.createElement("li");
  li.innerText = `${work} - ${time}`;

  
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.style.marginLeft = "10px";
  deleteBtn.addEventListener("click", function () {
    listItem.removeChild(li);
  });

  
  const updateBtn = document.createElement("button");
  updateBtn.innerText = "Update";
  updateBtn.style.marginLeft = "5px";
  updateBtn.addEventListener("click", function () {
    const newWork = prompt("Enter new work:", work);
    const newTime = prompt("Enter new time:", time);

    if (
      newWork && newTime &&
      workPattern.test(newWork.trim()) &&
      timePattern.test(newTime.trim())
    ) {
      li.innerText = `${newWork.trim()} - ${newTime.trim()}`;
      li.appendChild(updateBtn);
      li.appendChild(deleteBtn);
    } else {
      alert("Invalid update. Work must be letters only. Time must be like '10 AM'.");
    }
  });

  
  li.appendChild(updateBtn);
  li.appendChild(deleteBtn);
  listItem.appendChild(li);

  
  workInput.value = "";
  timeInput.value = "";
});
>>>>>>> 120391e272aa4ca975fbf6fd16105322fde8e087
