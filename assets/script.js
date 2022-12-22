// Assignment Code
var generateBtn = document.querySelector("#generate");
var arrayUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var arrayLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arraySpecial = ["!", "@", "#", "$", "%", "&", "*"];
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
  // must return a string value that is the password.
  // prompt user to choose num btwn 8 and 128
    // var to save length
    // validate user num
  // confirm user upper, lower, num, special characters (4 confirm prompts)
    // 4 vars to safe true/false to included characters
      // Validate at least one category was chosen
      // variables that include all user options of each category. Array of string for each category.
    // var upper = ["A," "B,"]
  // If user says yes to include that category, choose random(Math.random) element(s) from array.
    // How to decide how many elements to choose from each array

  // Join chosen elements into a string
  
  return passwordString;
}