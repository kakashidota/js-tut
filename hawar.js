const squares = document.querySelectorAll('.square')
const arash = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
const mole = 'mole'
let hitPosition
let currentTime = 20
let timerId = null

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove(mole)
    })


    let randomSquare = squares[Math.floor(Math.random() * 9)]

    randomSquare.classList.add(mole)
    hitPosition = randomSquare.id
    
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if(square.id == hitPosition){
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

function moveMole() {
    let timerId = null
    timerId = setInterval(randomSquare, 1000)
}

moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime == 0 ){
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert("Game over, Final score is :" + result)
    }
}

let countDownTimerId = setInterval(countDown, 1000)