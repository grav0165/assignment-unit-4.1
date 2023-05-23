console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  console.log('Hello, ' + name + '!');
}
// Remember to call the function to test
console.log(helloName('Aubrey'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  let thirdNumber = firstNumber + secondNumber;
  return thirdNumber;
}

console.log('The addition of numbers 3 and 4 are:', addNumbers(3, 4));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num0, num1, num2) {
  let answer = num0 * num1 * num2;
  return answer;

}

console.log('The multiplification of the nubmers 4, 5, and 6 is:', multiplyThree(4, 5, 6));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number >= 0) {
    return true;
  } // return true
  else {
  return false;
  }
} // return false

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  if(array.length > 0) {
    let last = array[array.length-1];
    return last;
} // get last item
else {
  return 'undefined';
}
}

array = ['sonic', 'amy', 'tails', 'knuckles', 'shadow']
console.log('The last item of the array is', getLast(array));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

function find(value, array) {
  for(let i=0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

array = [1, 2, 3, 4, 5]
console.log('Is the number in the array? Well clearly its:', find(2, array))

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if(letter === string.charAt(0)) {
    return true;
  } else {
    return false;
  }
}
console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

// 9. Function to return the sum of all numbers in an array
function sumAll(arrSum) {
  let sum = 0;
  // TODO: loop to add items
  for (i=0; i < arrSum.length; i++) {
    sum += arrSum[i];
  }
  // TODO: return the sum
  return sum;
}

arrSum = [5, 6, 7, 8, 9];
console.log('the sum of all the numbers is', sumAll(arrSum));



// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(arrPos) {
  let arrFinal = [];
  for(i=0; i < arrPos.length; i++) {
    if(arrPos[i] > 0) {
      arrFinal.push(arrPos[i]);
    } // end add array
  }
  return arrFinal;
}


let arrPos = [1, 2, -3, 4, 5];
console.log('The array of only positive numbers? Well that clearly it is:', allPositive(arrPos))


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// Convert Minutes into Seconds

// Write a function that takes an integer minutes and converts it to seconds.
// Examples

// convert(5) ➞ 300

// convert(3) ➞ 180

// convert(2) ➞ 120

let minutes = 0
function minutesToSeconds(minutes) {
   seconds = minutes * 60;
   return seconds;
}

console.log('Five minutes is equal to:', minutesToSeconds(5));
console.log('Three minutes is equal to:', minutesToSeconds(3));
console.log('Two minutes is equal to:', minutesToSeconds(2))

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}