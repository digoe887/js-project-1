// DONT REPEAT YOURSELF 

// let count = 0;

// while (count <= 100) {
//     count = count + 1
//     console.log(count)
// }

// for (let i = 0; i < 100; ++i) {
//     console.log(i + 1)
// }

// for (i = 1; i <= 20; ++i) {
//     if (i % 2) {
//         console.log(i)
//     }
//     else if (i % 5) {
//         console.log ('Simplified')
//     }
//     else if (i % 3) {
//         console.log ('Frontend')
//     }
//     else if (i % 3 && 5) {
//         console.log ('Frontend Simplified')
//     }
// }

for (i = 1; i <=20; ++i) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log(`${i} --- > Frontend Simplified`)
    }
    else if (i % 3 === 0) {
        console.log( `${i} --- > Frontend`)
    }
    else if (i % 5 === 0) {
        console.log(`${i} --- > Simplified`)
    }
    else {
        console.log(i)
    }   
}