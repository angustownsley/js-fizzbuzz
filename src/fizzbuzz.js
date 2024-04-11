/* eslint-disable prettier/prettier */
// TODO: Write your function in this file
function fizzBuzz(lower, upper) {
  
  return Array.from({length:upper-lower+1},(_,i)=>[['Fizz'][(i+lower)%3],['Buzz'][(i+lower)%5]].join('') || i+lower);
}



// TODO: Change undefined below to the name of your function
module.exports = fizzBuzz