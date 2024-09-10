const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const msg =
  "Welcome to the Number Guessing Game! \n I'm thinking of a number between 1 and 100. \n You have 5 chances to guess the correct number."
console.log(msg)

const options =
  'Please select the difficulty level: \n 1. Easy (10 chances) \n 2. Medium (5 chances) \n 3. Hard (3 chances)'
console.log(options)

function guessNumber(attempts, maxAttempts, number) {
  rl.question('Enter your guess: ', (guess) => {
    guess = parseInt(guess)
    attempts++

    if (guess < number) {
      console.log('Incorrect! Too low')
      if (attempts < maxAttempts) {
        guessNumber(attempts, maxAttempts, number)
      } else {
        console.log(`Game Over! The correct number was ${number}`)
        rl.close()
      }
    } else if (guess > number) {
      console.log('Incorrect! Too high')
      if (attempts < maxAttempts) {
        guessNumber(attempts, maxAttempts, number)
      } else {
        console.log(`Game Over! The correct number was ${number}`)
        rl.close()
      }
    } else {
      console.log(
        `Congratulations! You guessed the correct number in ${attempts} attempts`
      )
      rl.close()
    }
  })
}

function easy() {
  console.log(
    `Great! You have selected the Easy difficulty level. \n Let's start the game!`
  )
  let attempts = 0
  let maxAttempts = 10
  let number = Math.floor(Math.random() * 100) + 1
  guessNumber(attempts, maxAttempts, number)
}

function medium() {
  console.log(
    `Great! You have selected the Medium difficulty level. \n Let's start the game!`
  )
  let number = Math.floor(Math.random() * 100) + 1
  let attempts = 0
  let maxAttempts = 5
  guessNumber(attempts, maxAttempts, number)
}

function hard() {
  console.log(
    `Great! You have selected the Hard difficulty level. \n Let's start the game!`
  )
  let number = Math.floor(Math.random() * 100) + 1
  let attempts = 0
  let maxAttempts = 3
  guessNumber(attempts, maxAttempts, number)
}

rl.question('Enter your choice: ', (choice) => {
  console.log(`You selected ${choice}`)
  switch (choice) {
    case '1':
      easy()
      break
    case '2':
      medium()
      break
    case '3':
      hard()
      break
    default:
      console.log('Invalid choice')
      rl.close()
  }
})
