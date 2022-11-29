
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

  // Set up global array of potential password characters based on user's choice
  var characterArray = [];

  // Confirm and promt to clarify customer options.
  var passLength = prompt('how many characters your password would have? The password must be between 10 and 64 characters.');
  //Alert if the password length is out of the range.
  if ((passLength < 10) || (passLength > 64)) {
    alert('Please choose a number in the range 10-64. Try again!');
    return getPasswordOptions();
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
    alert ("You have successfully created a password. It would be shown in the box below. Thank you!");
  }
//Alert if user did not choose at least one character type. 
  if (characterArray.length < 1) {
    alert('Please choose at least one character option. Try again!');
    return getPasswordOptions();
  }
//create an object which stores the user's options. 
  var userChoices = { passLength, characterArray };
  return userChoices;
}

// Function for getting a random element from an array
function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Function to generate password with user input
function generatePassword() {

  //Call getPasswordOptions and store the return in a variable
  var userOpts = getPasswordOptions();
  var password = "";

  //Create a for loop to choose EACH character randomly. The selection source is from characterArray. 
  for (var i = 0; i < userOpts.passLength; i++) {
    var characterSet = getRandom(userOpts.characterArray);
    password = password.concat(getRandom(characterSet));
  }
  return password;

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
