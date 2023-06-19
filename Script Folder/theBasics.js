const prompt = require("prompt-sync")({sigint:true});
// const c = console.log.bind(script.js)

// console.log('Hello world')
// console.log('Oluwapelumi Perry')

// fruit = prompt('what is your favorite friut?')
// console.log(fruit)

// food = Number(prompt('how much was the food?'))
// tipPercentage = Number(prompt('tip ?')) / 100
// tipAmount = food * tipPercentage
// total = food + tipAmount

// console.log('tip amount', tipAmount)
// console.log('total', total)

//  let weather = prompt('how is the weather today?: ')
//  if (weather == 'rainy') {
//     console.log('Grab your umbrella')
//  } else {
//     console.log('wear your sunglassess')
//  }

//  function sayMyName() {
//     console.log('Qazi')
//  }

//  sayMyName()

//  function sayMyName2(name) {
//     console.log(name)
//  }

//  sayMyName2('Lance')


//  function greeting(name) {
//     // greet = 'hi ' + name + ', Nice to meet you!'
//     greet = `hi ${name}, Nice to meet you!`
//     console.log(greet)
//  }

//  greeting('Perry')


//  function sum(a, b) {
//     return a + b
//  }

//  sum(67, 13)
//  console.log(num1)

// function calculateFoodTotal(food, tip) {
// const tipPercentage = tip / 100
// const tipAmount = food * tipPercentage
// const total = sum(food, tipAmount)
// return total
// }

// console.log(calculateFoodTotal(100, 5))

const sumArrow = (a, b) =>  a + b

// console.log(sumArrow(57, 89))

// function subtract(i, j) {
//    return i - j
// }

// function divides(c, d) {
//    return c / d
// }

// function multiply(m, n) {
//    return m * n
// }

// function output() {
//    console.log(subtract(90, 43))
//    console.log(sumArrow(57, 89))
//    console.log(divides(150, 5))
//    console.log(multiply(57, 89))
// }

// output()


// name = prompt("What is your name: ")
// console.log(name)

// const cars = ["Saab", "Volvo", "BMW"]
// cars[0] = "Toyota"
// console.log(cars)
// cars.push = "Lexus"
// console.log(cars)


// const car = {type:"fiat", model:"500", color:"White"}
// car.color = "red"
// car.owner = "Johnson"
// console.log(car)


let num = 20;

num == 5 ? true : false;

// if (num <= 15) {
//    console.log(true)
// } else {
//    console.log(false)
// }


// greet = prompt("what is your name:")
// gold = prompt("What is your age: ")
// silver = prompt("what is your favorite food")
// input = `My name is ${greet}, I'm ${gold} years old. My favorite food is ${silver}!`
// console.log(input)


// greet = "Hannah"
// gold = "forty-six"
// silver = "Bread and Beans"
// input = `My name is ${greet}, I'm ${gold} years old. My favorite food is ${silver}!`
// console.log(input)


// function lovely(f1, f2, f3) {
//    return f1 + f2 / f3
// }

// ugly = lovely(10, 5, 3)
// console.log(ugly)

// const groceries = ["apple", "rice", "Garri", "Tomatoes", "Pepper"]
// console.log(groceries)
// console.log(groceries.slice(0, 3))
// groceries.push("Semovita")
// groceries.push("Beans")
// groceries.push("Toothpaste")
// console.log(groceries)
// console.log(groceries.slice(3, 8))
// console.log(groceries.indexOf('Semovita'))
// console.log(groceries.length)

// const person = {
//    name: 'Perry',
//    Occupation: 'Software Engineer',
//    color: 'Black',
//    food: 'Fried ice and Chicken'
// }

// console.log(person.color)
// person.hobby = 'coding'
// console.log(person.hobby)
// console.log(person['name'])

// const introducer = (name, occupation, color, food) => {
//    const person = {
//       name: name,
//       Occupation: occupation,
//       color: color,
//       food: food,
//       assets: 100_000,
//       liability: 30_000,
//       netWorth: function() {
//          return this.assets - this.liability
//       }
//    }

//    const intro = `Hi everyone, My name is ${person.name}, I'm a ${person.Occupation}. I love the color ${person.color}, 
//    my favorite food is ${person.food} and my net worth is $${person.netWorth()}. Pleased to meet you guys!!`

//    return intro;
// }

// console.log(introducer('Perry', 'Software Engineer', 'black', 'Fried rice and Chicken'))


const groceries = ["apple", "rice", "Garri", "Tomatoes", "Pepper"]
groceries.push("Semovita")
groceries.push("Beans")
groceries.push("Toothpaste")

// for (let i = 0; i < groceries.length; i++) {
//    const element = groceries[i];
//    console.log(element)
//    }

// for (const foodStuff of groceries) {
//    console.log(foodStuff)
//    }

// numbers = [1, 2, 3, 4, 5, 6, 7, 8,  9,]
// for (const num of numbers) {
//    console.log(num * 2)
// }

// for (let i = 0; i < numbers.length; i++) {
//    const element = numbers[i] * 2;
//    console.log(element)
//    }

// const double = (numbers) => {
//    let result = [];
//    for(let num of numbers) {
//       result.push(num * 2)
//    }
//    return result;
// }

// console.log(double([24, 14, 32, 12, 15, 26, 47, 18, 49]))

// const howManyLetters = (phrase) => {
   
//    let result = 0
//    for(const letter in phrase) {
//       console.log(Number(letter) + 1)
//       result = Number(letter) + 1
//    }

//    return {result: result}
// }

// let phrase = prompt("Write your phrase: ")

// howManyLetters(phrase);

const sumArray = (nums) => {
   let sum = 0
   for(number of nums) {
      sum = sum + number
   }
   // console.log("sum is: " + sum)

   return {sum}
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(sumArray(nums))


const findMax = (arr) => {
   let result = 0
   for(const any of arr) {
      if (any > result)
      result = any
   }

   return {result}
}

// const arr = [435, 869, 543, 123, 903, 458, 972, 471, 956, 899]
// console.log(findMax(arr))

function letterFrequency(phrase) {

   console.log(phrase);
   let frequency = {};
   for (letter of phrase) {
      if (letter in frequency) {
         frequency[letter] += 1;
      } else {
         frequency[letter] = 1;
      }

   }

   return { frequency };
}

// console.log(letterFrequency("Hi, how are you doing?. I thought you wanted to came over to my place so we can both learn the programming"))

const wordFrequency = (sentence) => {
   let frequency = {}
   words = sentence.split(' ')
   // for(word of words) {
   //    if(word in frequency) {
   //       frequency[word] += 1
   //    } else {
   //       frequency[word] = 1
   //    }
   // }
   return letterFrequency(words)
}

// console.log(wordFrequency("I must become a millioniare through coding"))

const howManySeconds = (hours) => { 
let minutes = 60    
let oneHour = minutes * minutes
return hours *= oneHour
}

// console.log(howManySeconds(67))

const doubleNumber = (result) => {
return number = (result).map(number=> number ** 2)

}

// console.log(doubleNumber([34, 21, 56, 89, 97]))

const filter = (num, rings) => {
   arr = []
   for(number of num) {
      if(number > rings) 
      arr.push(number)
   }

   return arr
}
//  console.log(filter([1, 2, 3, 4, 5, 6, 7], 4))

const byte = [1, 2, 3, 4, 5, 6, 7]
// console.log(byte.filter(ilt => ilt > 3)) 

const actor = [
   {name: 'vincent', netWorth: 100000},
   {name: 'Rebecca', netWorth: 40000},
   {name: 'Godwin', netWorth: 90000},
   {name: 'Davidson', netWorth: 70000}
]

let result = actor.filter(act => act.netWorth > 40000)
// console.log(result)
let names = result.map(act => act.name).join(', ') 
// console.log(names)
// console.log(actor.reduce((prev, curr) => prev + curr.netWorth, 0))

// const king = [17, 45, 67, 89, 96]
// console.log(king.reduce((prev, nex) => prev + nex)) 


// const armstrong = () => {
//    let number = prompt("Enter your specified number: ")
//    let originalNumber = number
//    let solver = 0

//    while (number > 0) {
//       let gold = number % 10
//       solver += (gold*gold*gold)
//       number = parseInt(number / 10)
//    }

//    if (solver == originalNumber) 
//        console.log("Its an Armstrong number")
//    else 
//       console.log("Not an Armstrong number")
   
// }

// console.log(armstrong())

function sum(a, b) {
   return a * b
}

const nubmer = [8, 4, 2]
// const answer = nubmer.reduce((i, j) => i * j)
const answer = nubmer.reduce(sum)
// console.log(answer)

const randomFruit = (fruits) => {
   const randomNumber = Math.floor(Math.random() * fruits.length)
   return fruits[randomNumber]
}

fruits = [5, 6, 7, 8, 9]
// console.log(randomFruit(fruits))

const weatherApp = (weather) => {
   let score
   if(weather == 'rainy') {
      score = 1
   }
   else if (weather == 'sunny') {
      score = -1
   }
   else score = 0
   return score
}

console.log(weatherApp('overcast'))