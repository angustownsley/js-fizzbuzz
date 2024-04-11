/* eslint-disable prettier/prettier */
// TODO: Write your function in this file
function fizzBuzz(lower, upper) {
  const arr = []
    for (let i = lower; i <= upper; i++) {
      arr.push(i)
    }
  
    const answer = arr.map((item) => [['fizz'][item%3],['buzz'][item%5]].join('') || item)
    
    return answer
  }



// TODO: Change undefined below to the name of your function
module.exports = fizzBuzz
