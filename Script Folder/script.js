console.log('hello')

let title = 
document.getElementById('title')
console.log('before: ', title.innerText)

title.innerText = 'Goodbye, my lover!'
console.log('after: ', title.innerText)

let message = 'I am learning Javascript!'

title.innerHTML = `<p>${message}</p>`;
title.style.backgroundColor ='red'

let redDiv = document.getElementById('red')
let yellowDiv = document.getElementById('yellow')
let greenDiv = document.getElementById('green')

// redDiv.onclick = () => console.log('red')
// yellowDiv.onclick = () => console.log('yellow')
// greenDiv.onclick = () => console.log('green')

const squares = document.querySelectorAll('.colorSquare')
// console.log(squares)
// console.log(squares[0].value)
// console.log(squares[1].value)
// console.log(squares[2].value)


//forEach
const timesClicked = {'red': 0, 'yellow': 0, 'green': 0}
squares.forEach(squares => {
    squares.onclick = () => {
        timesClicked[squares.value] += 1
        squares.innerText = timesClicked[squares.value]
    }
})



function clearScores() {
    timesClicked.red = 0
    timesClicked.yellow = 0
    timesClicked.green = 0
    squares.forEach(squares => {
        squares.innerText = ''
    })
}

const clearGameBtn = document.getElementById('clear-game')
clearGameBtn.onclick = () => clearScores()