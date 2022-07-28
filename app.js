// // DONT REPEAT YOURSELF

// // let count = 0;

// // while (count <= 100) {
// //     count = count + 1
// //     console.log(count)
// // }

// // for (let i = 0; i < 100; ++i) {
// //     console.log(i + 1)
// // }

// // for (i = 1; i <= 20; ++i) {
// //     if (i % 2) {
// //         console.log(i)
// //     }
// //     else if (i % 5) {
// //         console.log ('Simplified')
// //     }
// //     else if (i % 3) {
// //         console.log ('Frontend')
// //     }
// //     else if (i % 3 && 5) {
// //         console.log ('Frontend Simplified')
// //     }
// // }

// // for (i = 1; i <=20; ++i) {
// //     if (i % 5 === 0 && i % 3 === 0) {
// //         console.log(`${i} --- > Frontend Simplified`)
// //     }
// //     else if (i % 3 === 0) {
// //         console.log( `${i} --- > Frontend`)
// //     }
// //     else if (i % 5 === 0) {
// //         console.log(`${i} --- > Simplified`)
// //     }
// //     else {
// //         console.log(i)
// //     }
// // }

// // Function Definition

// // function welcomePersonToFES (firstName, lastName) {
// //     console.log(`Welcome to FES, ${firstName} ${lastName}`)
// // }
// // // Call the Function
// // welcomePersonToFES('Mitri', 'David');
// // welcomePersonToFES('Zen', 'Derrick');
// // welcomePersonToFES('Mitri', 'Igoe');

// // function sumOfTwoNumbers(num1, num2) { // parameters () THE PARAMETERS MUCH MATCH THE ARGUMENTS IN THE CALL
// //     return num1 + num2
// // }

// // console.log(sumOfTwoNumbers(10, 10)); // arguments ()

// // REG FUNCTION

// // function convertCelsiusToFahrenheit(num1) {
// //     return num1 * 1.8 + 32
// // }

// // ARROW FUNCTION

// // const convertCelsiusToFahrenheit = (celsius) => {
// //     return celsius * 1.8 + 32
// // }

// // console.log(convertCelsiusToFahrenheit(0))
// // console.log(convertCelsiusToFahrenheit(10))
// // console.log(convertCelsiusToFahrenheit(30))

// // let item1 = 20
// // let item2 = 30
// // let item3 = 40
// // let item4 = 50
// // let item5 = 100

// // let arr = [20, 30, 40, 50, 100];

// // //First element of array:
// // console.log(arr[0]);

// // //Last element of array:
// // console.log(arr[arr.length - 1]);
// // // add a new item to array .push method onto the end of array
// // arr.push(200);

// // [20, 30, 40, 50, 100]
// // let newArr = arr.filter((element) => {
// //     console.log(element)
// //     if (element < 50) {
// //         return true;
// //     }
// // })

// // // SHORTHAND
// // let newArr = arr.filter(element => element < 50)

// // console.log(newArr);

// let grades = ["A+", "A", "FAIL"];

// // let newArr = grades.filter(element => element !== 'FAIL')

// // // let newArr = grades.filter((element) => {
// // //     console.log(element)
// // //     if (element !== 'FAIL')
// // //     return true;
// // // })

// // console.log(newArr)

// // /create a new empty array called 'goodGrades'

// // let goodGrades = []

// // for (let i = 0; i < grades.length; i++) {
// //     if (grades[i] !== 'FAIL') {
// //         goodGrades.push(grades[i])
// //     }
// // }

// // console.log(goodGrades)

// let arr = [1, 4, 9, 16];

// // let newArr = arr.map((element) => {
// //     console.log(element)
// //     return 'dog';
// // })

// // let newArr = arr.map(element => 'dog')

// // console.log(newArr)

// // let dollars = [1, 5, 10, 3];

// // let newArr = dollars.map((element) => {
// //     console.log(element)
// //     return element * 100
// // })

// // let newArr = dollars.map(element =>
// //     element * 100
// // )

// // console.log(newArr)

// // let cents = []

// // for(let i = 0; i < grades.length; i++) {
// //     cents.push(dollars[i] * 100)
// // }

// // console.log(cents)

// let userFirstName = "Derrick";
// let userLastName = "Igoe";
// let userDiscordId = "SilentBlitz#887";
// let userSubscriptionStatus = "VIP";

// let users = [
//   {
//     username: "Derrick",
//     email: "digoe87@gmail.com",
//     password: "test123",
//     subscriptionStatus: "VIP",
//     discordId: "SilentBlitz#1917",
//     lessonsCompleted: [0, 1],
//   },
//   {
//     username: "David",
//     email: "adkljsld@gmail.com",
//     password: "david123",
//     subscriptionStatus: "VIP+",
//     discordId: "SilentBlitz#1917",
//     lessonsCompleted: [0, 1],
//   },
//   {
//     username: "David",
//     email: "adkljsld@gmail.com",
//     password: "david123",
//     subscriptionStatus: "VIP+",
//     discordId: "SilentBlitz#1917",
//     lessonsCompleted: [0, 1],
//   },
// ];

// function login(email, password) {
//   for (let i = 0; i < users.length; ++i) {
//     if (users[i].email === email) {
//       console.log(users[i]);
//       if (users[i].password === password) {
//         console.log("log the user in - the details are correct");
//       } else {
//         console.log("the password is incorrect - try again");
//       }
//       return;
//     }
//   }
//   console.log("could not find an email that matches");
// }

// login("digoe87@gmail.com", "test123");

// function register(user) {
//   users.push(user);
// }

// register({
//   username: "newusername",
//   email: "newemail",
//   password: "newsub",
//   subscriptionStatus: "newsub",
//   discordId: "silent#19",
//   lessonsCompleted: [0, 1],
// });

// console.log(users);

// First way of accessing an element
// console.log(document.querySelector('.title'));

//Second way of accessing an element
// console.log(document.getElementById('title'));

// document.querySelector('.title').innerHTML += ' FrontEnd Simplified'

// function changeTitleToRed() {
//     console.log('clicked')
//     document.querySelector('.title').style.color = 'red'

// }

// let myArray = ['some', 'text', 'someee'];


// let newArr = myArray.filter((element) => {
//     if (element !== 'text') {
//         return true;
//     } return false;
// })

// console.log(newArr)

// function filterOutFalsy(elem1, elem2) {
//     return (!elem1) ? elem1 : elem2
// }

// console.log(filterOutFalsy(0, 5))

// function arrLength(arr) {
//     return arr.length
// }

// console.log(arrLength([1, 2, 3, 4, 5, 4]))

// function lastElem(arr) {
//     for (i = 0; i = arr.length - 1; ++i) {
//         return arr[i]
//     } 
// }
                   //shorthand
// function arrLength (arr) {
//     return arr[arr.length - 1]
// }

// console.log(lastElem(['dog', 'cat', 'fridge', '1']))

// function arrSum(arr) {
//     let sum = 0
//     for (i = 0; i < arr.length; ++i) {
//         sum = sum + arr[i]
//     }
//     return sum
// }

// console.log(arrSum([1, 3, 5]))


// function reverseString (str) {
//     let reversedString = ''
//     for (let i = 0 ; i < str.length; ++i) {
//         reversedString = str[i] + reversedString
//     }
//     return reversedString
// }



console.log(reverseString('abc'))