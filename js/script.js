// // //   for (let a = 1, b = 3, c = a * b; a < 10; a++) {
// // //   console.log(a,b,c)                       
// // //    }                                                            

// // // if (login == 'Employee') {
// // //   message = 'Hello';
// // // } else if (login == 'Director') {
// // //   message = 'Greetings';
// // // // } else if (login == '') {
// // // //   message = 'No login';
// // // // } else {
// // // //   message = '';
// // // // }

// // // // let login = "Employee";

// // // // let check = (login == 'Employee') ? "Hello" : (login == 'Director') ? "Greeting" : (login== '') ? "No Login" : ''

// // // // console.log(check)


// // // let users = {
// // // }
// // // users.name ="john"
// // // users.name ="Pele"
// // // users.age =40
// // // users.surname ="smith"

// // // for (let user in users){
// // //     // console.log(users)
// // //     console.log(`user ${user} is: ${users[user]}`)
// // // }


// // let codes = {
// //   "-49": "Germany",
// //   "-41": "Switzerland",
// //   "-44": "Great Britain",
// //   // ..,
// //   "-1": "USA"
// // };

// // let isEmpty = (obj)=>{
// //    let reuslt = Object.keys(obj).length === 0 ? `Object is Empty` : `Object is not Empty`
// //    return console.log(reuslt)
// //   }

// // let schedule = {}

// // isEmpty(schedule)



// // let salaries = {
// //   John: 100,
// //   Ann: 160,
// //   Pete: 130
// // };

// // let sum = 0;

// //   if (Object.keys(salaries).length === 0) {
// //   sum = 0;
// // } else {
// //   for (let key in salaries) {
// //     sum += salaries[key];
// //   }
// // }

// // console.log("Total salary =", sum);

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// // for (const key in menu) {
// //   if (typeof menu[key] === "number") {
// //     menu[key] = menu[key] * 2;
// //   }
// // }
// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) { // for each i...

//   for (let j = 2; j < i; j++) { // look for a divisor..
//     if (i % j == 0) continue nextPrime; // not a prime, go next i
//   }

//   alert( i ); // a prime
// }


// let a = {}
// let b = {}
// console.log(b ===a)

// let obj = {
//   name:"Abhishek",
//   age :23,
//   sayHi:()=>{
//    console.log(`hello ${this.name}`)
//   }
// }
// console.log(obj.sayHi())


let user1 = {name:"abhishek",} ;
let user2 = {name:"raman",} ;

function intro (age){
  console.log(this.name,age)
}
