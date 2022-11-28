var characterArray = [];
var passwordLength = [];
// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  //use prompt and confirm
  
  
  // var passLength = prompt('how many characters your password would have?');
  // var specChars = confirm ('would you like special characters?');
  // var numb = confirm ('would you like numbers?');
  // var lowercase = confirm ('would you like lowercase?');
  // var uppercase = confirm ('would you like uppercase?');
  
  
    var passLength = prompt('how many characters your password would have? The password must be between 10 and 64 characters.');
    if ((passLength < 10) || (passLength > 64)) {
    alert ('try again!');
    } 
    
    var specChars = confirm('would you like special characters?');
    if (specChars) {
      characterArray = characterArray.concat(specialCharacters);
    } 

    var numb = confirm('would you like numbers?');
    if (numb) {
          characterArray = characterArray.concat(numericCharacters);
    } 
          
    var lowercase = confirm('would you like lowercase?');
    if (lowercase) {
      characterArray = characterArray.concat(lowerCasedCharacters);
          } 
          
    var uppercase = confirm('would you like uppercase?');
    if (uppercase) {
    characterArray = characterArray.concat(upperCasedCharacters);
    }

    var userChoices = [passLength, characterArray];
    return userChoices;
  }




  //use of character types - specChars, num, LC, UC
  //validate that the user selected at least one character type
  //send user back to select again
  
  //password length
  //validate At least 10 characters but no more than 64
  // send user back again - can we call a function?

  //return true character types and password length
// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
//call getPasswordOptions and store the return in a variable
var userOpts = getPasswordOptions();
// var password = "";

console.log(userOpts.characterArray);
console.log(userOpts.passLength);

// for (var i=0; i < userOpts.passLength; i++) {
//   var characterSet = getRandom(userOpts.characterArray);
//   password = password.concat(getRandom(characterSet));
// }
// return password;

//user select uppercase, lowercase and length =12
//grab a bank of those selected character types - randomly seclected the characters to type (getRandom)

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

//use prompt and confirm 
