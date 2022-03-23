// Assignment code here
 function generatePassword() {
  var password = "";
  var passwordLength = parseInt(prompt("Choose a length of at least 8 characters and no more than 128 characters."));
  
  while(!passwordLength || passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("Choose a length of at least 8 characters and no more than 128 characters."));
    console.log(passwordLength);//output of wrong answer
  }
  console.log(passwordLength);

  var includeLowerCase = confirm("Do you want to include lowercase charaters in your password?");
  var includeUpperCase = confirm("Do you want to include uppercase charaters in your password");
  var includeNumeric = confirm("Do you want to include numeric charaters in your password");
  var includeSpecial = confirm("Do you want to include special charaters in your password");
  console.log(includeLowerCase);
  console.log(includeUpperCase);
  console.log(includeNumeric);
  console.log(includeSpecial);
  
  if(){

  }


  return password;
 }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
