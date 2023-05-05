// Assignment code here
var pwLength = 8;
var output = [];

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'L', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '<', '>', '?', '~', '+', '='];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

  //1. Prompt for criteria
  //  a. Password length 8 < 128
  //  b. Lowercase, uppercase, numbers, special characters
  //2. Validate the input.
  //3. Generate the password.
  //4. Display password to the page.

function generatePassword() {
  var password = "";
  pwLength = parseInt(prompt("Enter the desired length of your password", "Must be between 8 and 128 characters."));

  if (isNaN(pwLength) || pwLength < 8 || pwLength > 128) {
    alert("Character length needs to be between 8 and 128 characters.");
    return false;
  }
  
  if (confirm("Do you want to include lower case characters?")) {
    output = output.concat(lowerCase);
  }

  if (confirm("Do you want to include upper case characters?")) {
    output = output.concat(upperCase);
  }

  if (confirm("Do you want to include numbers?")) {
    output = output.concat(numbers);
  }

  if (confirm("Do you want to include special characters?")) {
    output = output.concat(specialCharacters);
  }

  for(var i = 0; i < pwLength; i++) {
    var randomizer = Math.floor(Math.random() * output.length);
    password = password + output[randomizer];
  }
    return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);