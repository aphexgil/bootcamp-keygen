// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var possibleChars = "";
var passwordLength = 0;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numeric = "0123456789";
var special = "`~!@#$%^&*()-_=+[{]}\|;:'?/>.<,";

function getCharSet(){

  var gotOne = false;

  if(window.confirm("Include Upper Case Characters?")){
    possibleChars += upperCase;
    gotOne = true;
  }

  if(window.confirm("Include Lower Case Characters?")){
    possibleChars += lowerCase;
    gotOne = true;
  }

  if(window.confirm("Include Numeric Characters?")){
    possibleChars += numeric;
    gotOne = true;
  }

  if(window.confirm("Include Special Characters?")){
    possibleChars += special;
    gotOne = true;
  }

  if(!gotOne){
    window.alert("Please include at least one type of character.");
    return getCharSet();
  }

}

function getLength(){
  passwordLength = window.prompt("How Many Characters? (8-128)");
  if(isNaN(passwordLength)){
    window.alert("Please enter a number.");
    return getLength();
  }
  passwordLength = Number(passwordLength);
  if(passwordLength > 128 || passwordLength < 8){
    window.alert("Number must be between 8 and 128.");
    return getLength();
  }
}

function generatePassword(){
  var password = "";
  var index = 0;
  for(var i=0; i<passwordLength; i++){
    index = Math.floor(Math.random() * possibleChars.length);
    password += possibleChars[index];
  }
  return password;
}

getCharSet();
getLength();
writePassword();