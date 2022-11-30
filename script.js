
// Gets password from generatePassword() and displays it in the to the #password text area
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Global variables: a string that holds all the possible characters for a password that the user wants to include, and a number that is the desired password length.
var possibleChars = "";
var passwordLength = 0;

// Grabs the 'Generate Password' button from the HTML page
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompts user with a series of pop-ups to choose which character types may be included in their password.
function getCharSet(){

  var gotOne = false; //Used to check if user selected at least one character set.

  if(window.confirm("Include Upper Case Characters?")){

    //Permitted character sets are appended onto possibleChars global variable.
    possibleChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    gotOne = true;
  }

  if(window.confirm("Include Lower Case Characters?")){
    possibleChars += "abcdefghijklmnopqrstuvwxyz";
    gotOne = true;
  }

  if(window.confirm("Include Numeric Characters?")){
    possibleChars += "0123456789";
    gotOne = true;
  }

  if(window.confirm("Include Special Characters?")){
    possibleChars += "`~!@#$%^&*()-_=+[{]}\|;:'?/>.<,";
    gotOne = true;
  }

  // If no character set was chosen, send a warning and start over.
  if(!gotOne){
    window.alert("Please include at least one type of character.");
    return getCharSet();
  }

}


// Propmts user with a pop up to choose a password length between 8 and 128.
function getLength(){
  passwordLength = window.prompt("How Many Characters? (8-128)");

  // If user enters a nun-number string, send a warning and start over.
  if(isNaN(passwordLength)){
    window.alert("Please enter a number.");
    return getLength();
  }
  passwordLength = Number(passwordLength); // String -> Number

  // If number entered is out of range, send a warning and start over.
  if(passwordLength > 128 || passwordLength < 8){
    window.alert("Number must be between 8 and 128.");
    return getLength();
  }
}

// Randomly generates password using global varibles possibleChars and passwordLength.
function generatePassword(){
  var password = ""; // Initialize blank password that we will append.
  var index = 0; // Index variable used to randomly pick letters from possibleChars.

  //Randomly grab letters from possibleChars, appending them onto the end of heretofore empty password string. Repeat until string length equals passwordLength.
  for(var i=0; i<passwordLength; i++){
    index = Math.floor(Math.random() * possibleChars.length);
    password += possibleChars[index];
  }
  return password; // Returns to writePassword()
}

getCharSet();
getLength();
writePassword();