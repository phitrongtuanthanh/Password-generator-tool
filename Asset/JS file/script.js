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
  
  var passLength = prompt('how many characters your password would have?');
  var specChars = confirm ('would you like special characters?');
  var numb = confirm ('would you like numbers?');
  var lowercase = confirm ('would you like lowercase?');
  var uppercase = confirm ('would you like uppercase?');
  
  
  while (true) {
    var passLength = prompt('how many characters your password would have?');
    if (passLength <10 === passLength>64) {
      alert('Try again!');
      break;
    } else {
      var specChars = confirm ('would you like special characters?');
      if (specChars === false) {
        alert('Try again!');
      break;
      } else {
        var numb = confirm ('would you like numbers?');
        if ( numb === false) {
          alert('Try again!');
        break;
        } else {
          var lowercase = confirm ('would you like lowercase?');
          if (lowercase === false) {
            alert('Try again!');
          break;
          } else {
            var uppercase = confirm ('would you like uppercase?');
            if (uppercase === false) {
              alert('Try again!');
            break;
            }
          }
        }
      }
    }
  }

  //use of character types - specChars, num, LC, UC
  //validate that the user selected at least one character type
  //send user back to select again
  
  //password length
  //validate At least 10 characters but no more than 64
  // send user back again - can we call a function?

  //return true character types and password length
}

// Function for getting a random element from an array
function getRandom(arr) {
}

// Function to generate password with user input
function generatePassword() {
//call getPasswordOptions and storee the return in a variable

//user select uppercase, lowercase and length =12
//grab a bank of those selected character types - randomly seclected the characters to type (getRandom)

//must return the password
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