// Assignment Code
var generateBtn = document.querySelector("#generate");
var arrayUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var arrayLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arraySpecial = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", ":", ";", "'", "<", ">", ",", ".", "?"];
var num = Math.floor(Math.random() * 10);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Function to generate password
function generatePassword(){
  var passLength = prompt("Set desired password length from 8 to 128 characters.");
  var passArray = [];
// Validate Pass Length and that it's a number
  if (passLength < 8 || passLength > 128 || isNaN(passLength) === true) {
    alert("Try again, partner.")
    generatePassword();
  }

  var passUpper = confirm("Would you like to include upper case characters?");
  var passLower = confirm("Would you like to include lower case characters?");
  var passNum = confirm("Would you like to include numbers?");
  var passSpecial = confirm("Would you like to include special characters?");
// Validate at least one category was chosen
  if (passUpper === false && passLower === false && passNum === false && passSpecial === false) {
    alert("So you DON'T want a password?");
    return;
    }

// Each selection, if needed, will add to array and iterate once so long as it's under length value
  for (var i = 1; i <= passLength;) {
    if (passUpper === true && i <= passLength) {
    var randomUpper = arrayUpper[Math.floor(Math.random() * arrayUpper.length)];
    passArray.push(randomUpper);
    console.log(passArray);
    i++;
    }
  
    if (passLower === true && i <= passLength) {
    var randomLower = arrayLower[Math.floor(Math.random() * arrayLower.length)];
    passArray.push(randomLower);
    console.log(passArray);
    i++;
    }
  
    if (passNum === true && i <= passLength) {
    var num = Math.floor(Math.random() * 10);
    passArray.push(num);
    console.log(passArray);
    i++;
    }
   
    if (passSpecial === true && i <= passLength) {
    var randomSpecial = arraySpecial[Math.floor(Math.random() * arraySpecial.length)];
    console.log(randomSpecial);
    passArray.push(randomSpecial);
    console.log(passArray);
    i++;
    }
    
// Join chosen elements into a string with no commas
    var passArray2 = passArray.join("");

  }
  return passwordString = passArray2;
}
