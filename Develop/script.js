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


// Temporary Code

var newPassTemp = [];
var newPassFinal = [];
var yesLower = false;
var yesUpper = false;
var yesNumbers = false;
var yesSpecial = false;

var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var specialCharacters = ["!","\"","#","$","%","&","\'","(",")","*","+","\,","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];


console.log(specialCharacters);

howManyCharsNeeded = 0
yesLower = true;
yesUpper = true;
yesNumbers = true;
yesSpecial = true;

howManyCharsNeeded = 10
howManyCharsNeededNow = howManyCharsNeeded

if (yesLower == true) {
  const random = Math.floor(Math.random() * lowercaseLetters.length);
  console.log(lowercaseLetters[random]);
  newPassFinal = newPassFinal.concat(lowercaseLetters[random])
  newPassTemp = newPassTemp.concat(lowercaseLetters);
  howManyCharsNeededNow = howManyCharsNeededNow-1;
}

if (yesUpper == true) {
  const random = Math.floor(Math.random() * uppercaseLetters.length);
  console.log(uppercaseLetters[random]);
  newPassFinal = newPassFinal.concat(uppercaseLetters[random])
  newPassTemp = newPassTemp.concat(uppercaseLetters);
  howManyCharsNeededNow = howManyCharsNeededNow-1;
}

if (yesNumbers == true) {
  const random = Math.floor(Math.random() * numbers.length);
  console.log(numbers[random]);
  newPassFinal = newPassFinal.concat(numbers[random])
  newPassTemp = newPassTemp.concat(numbers);
  howManyCharsNeededNow = howManyCharsNeededNow-1;
}

if (yesSpecial == true) {
  const random = Math.floor(Math.random() * specialCharacters.length);
  console.log(specialCharacters[random]);
  newPassFinal = newPassFinal.concat(specialCharacters[random])
  newPassTemp = newPassTemp.concat(specialCharacters);
  howManyCharsNeededNow = howManyCharsNeededNow-1;
}

console.log(howManyCharsNeededNow + " Are still needed in the password");

for (var i = 0; i < howManyCharsNeededNow; i++) { 
  console.log("Adding " + howManyCharsNeededNow + " to the new password");
  const random = Math.floor(Math.random() * newPassTemp.length);
  newPassFinal = newPassFinal.concat(newPassTemp[random]);
}

console.log(newPassTemp);
console.log(newPassFinal);

var shuffledNewPassFinal = shuffle(newPassFinal);
console.log("My new password is " + shuffledNewPassFinal);

