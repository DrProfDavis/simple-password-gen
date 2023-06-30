// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Stolen function code used for randomizing https://www.geeksforgeeks.org/how-to-shuffle-an-array-using-javascript/#

function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) { 
      // Generate random number 
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}

// My Code
function generatePassword() {
  // all variables used
  var newPassTemp = [];
  var newPassFinal = [];
  var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var numbers = ['0','1','2','3','4','5','6','7','8','9'];
  var specialCharacters = ["!","\"","#","$","%","&","\'","(",")","*","+","\,","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];

  // Pop-up code
  var howManyCharsNeededStr = window.prompt("How many characters long should the password be? Anywhere from 8-128 is allowed")

  // Edit this in pop up windows
  var howManyCharsNeeded = parseInt(howManyCharsNeededStr);
  var howManyCharsNeededNow = howManyCharsNeeded;

  // Check if at least 8 characters and at max 128 characters
  if (howManyCharsNeeded < 8 || howManyCharsNeeded > 128) {
    alert("Please have a character amount of at least 8 and at max 128");
    return;
  }

  // Pop-up code
  var yesLower = window.confirm("Would you like to have lowercase letters?");
  var yesUpper = window.confirm("Would you like to have uppercase letters?");
  var yesNumbers = window.confirm("Would you like to have numbers?");
  var yesSpecial = window.confirm("Would you like to have special characters?");

  // Check if using lowercase and adding one to password if true
  if (yesLower == true) {
    const random = Math.floor(Math.random() * lowercaseLetters.length);
    newPassFinal = newPassFinal.concat(lowercaseLetters[random]);
    newPassTemp = newPassTemp.concat(lowercaseLetters);
    howManyCharsNeededNow = howManyCharsNeededNow-1;
  }

  // Check if using uppercase and adding one to password if true
  if (yesUpper == true) {
    const random = Math.floor(Math.random() * uppercaseLetters.length);
    newPassFinal = newPassFinal.concat(uppercaseLetters[random]);
    newPassTemp = newPassTemp.concat(uppercaseLetters);
    howManyCharsNeededNow = howManyCharsNeededNow-1;
  }

  // Check if using numbers and adding one to password if true
  if (yesNumbers == true) {
    const random = Math.floor(Math.random() * numbers.length);
    newPassFinal = newPassFinal.concat(numbers[random]);
    newPassTemp = newPassTemp.concat(numbers);
    howManyCharsNeededNow = howManyCharsNeededNow-1;
  }

  // Check if using special characters and adding one to password if true
  if (yesSpecial == true) {
    const random = Math.floor(Math.random() * specialCharacters.length);
    newPassFinal = newPassFinal.concat(specialCharacters[random])
    newPassTemp = newPassTemp.concat(specialCharacters);
    howManyCharsNeededNow = howManyCharsNeededNow-1;
  }

  // Check how many more characters we need and filling in with allowed characters
  for (var i = 0; i < howManyCharsNeededNow; i++) { 
    const random = Math.floor(Math.random() * newPassTemp.length);
    newPassFinal = newPassFinal.concat(newPassTemp[random]);
  }

  // Shuffles the characters being used in the password and joins them
  var shuffledNewPassFinal = shuffle(newPassFinal);
  return shuffledNewPassFinal.join('');
}



