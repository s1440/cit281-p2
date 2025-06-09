/*
    CIT 281 Project 2
    Name: Sophie Sheppe
*/

// Returns a random number between min (inclusive) and max (now inclusive)
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Returns a single, random, lowercase letter
function getRandomLetter() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");  
  return alphabet[getRandomInteger(0, alphabet.length-1)];

}

// let result = "";

// return the random length string
function getRandomString(minLength, maxLength) {
  let result = "";
  let length = getRandomInteger(minLength, maxLength);
  for (let i = 0; i < length; i++) {
    result += getRandomLetter();
  }
  return result;
}

// return a string in ascending order
function getSortedString(string) {
  return string.split("").sort().join("");
}



// for (let i = 0; i < getRandomLetter(); i++) {
//   result += alphabet[getRandomLetter(1, alphabet.length - 1)];
// }



console.log(getSortedString(getRandomString(10, 20)));

