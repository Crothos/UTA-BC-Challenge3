// Assignment Code
var generateBtn = document.querySelector("#generate");
var arrayUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var arrayLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arraySpecial = ["~", "1", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", ":", ";", "'", "<", ">", ",", ".", "?"];
var num = Math.floor(Math.random() * 10);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  var passLength = prompt("Set desired password length from 8 to 128 characters.");
  
  // must return a string value that is the password.
  // prompt user to choose num btwn 8 and 128
    // var to save length
    // validate user num
   if (passLength < 8) {
    alert("Try again, partner.");
    return;
  }
  if (passLength > 128) {
    alert("Try again, partner.");
    return;
  }
  console.log(passLength);
  // confirm user upper, lower, num, special characters (4 confirm prompts)
    // 4 vars to save true/false to included characters

  var passUpper = confirm("Would you like to include upper case characters?");
  var passLower = confirm("Would you like to include lower case characters?");
  var passNum = confirm("Would you like to include numbers?");
  var passSpecial = confirm("Would you like to include special characters?");
  console.log(passUpper);
  console.log(passLower);
  console.log(passNum);
  console.log(passSpecial);

      // Validate at least one category was chosen
  if (passUpper === false && passLower === false && passNum === false && passSpecial === false) {
    alert("So you DON'T want a password?");
    return;
    }

      // variables that include all user options of each category. Array of string for each category.
    // var upper = ["A," "B,"]
  // If user says yes to include that category, choose random(Math.random) element(s) from array.
  if (passUpper === true) {
    var randomUpper = arrayUpper[Math.floor(Math.random() * arrayUpper.length)]
    console.log(randomUpper);
  }
  
  if (passLower === true) {
    var randomLower = arrayLower[Math.floor(Math.random() * arrayLower.length)]
    console.log(randomLower);
  }

  if (passNum === true) {
    var num = Math.floor(Math.random() * 10);
  }

  if (passSpecial === true) {
    var randomSpecial = arraySpecial[Math.floor(Math.random() * arraySpecial.length)]
    console.log(randomSpecial);
  }
    // How to decide how many elements to choose from each array

  // Join chosen elements into a string
  for (var i = 0; i <= passLength; i++) {

  }
  return passwordString;
}
