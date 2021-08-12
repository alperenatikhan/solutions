const collection = [
    { text: "zero", value: 0 },
    { text: "jeden", value: 1 },
    { text: "dwa", value: 2 },
    { text: "trzy", value: 3 },
    { text: "cztery", value: 4 },
    { text: "pięć", value: 5 },
    { text: "sześć", value: 6 },
    { text: "siedem", value: 7 },
    { text: "osiem", value: 8 },
    { text: "dziewięć", value: 9 },
    { text: "dziesięć", value: 10 },
    { text: "jedenaście", value: 11 },
    { text: "dwanaście", value: 12 },
   ]; 





//Solution by using .filter()

let divisibles = collection.filter(item => item.value%3 ===0)

console.log(`There are ${divisibles.length} divisible numbers by 3: ${divisibles.map(item =>item.value)}`)



//I can also provide a re-usable code by using a function which can check the divisibles of any given number/divider. 

/*
function dividingLog(collectionArray, divider){
let divisibles =collectionArray.filter(item => item.value%divider ===0)

console.log(`There are ${divisibles.length} divisible numbers by ${divider}: ${divisibles.map(item =>item.value)}`)
}

dividingLog(collection, 3)
*/
