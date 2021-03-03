//1 make click event/button work
//2. ask user how long of a password
//3. ask user what characters to include
//4. take information and use function to build password
//5. display password

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  //console.log("generatePassword");
  //prompt("how long do you want your password?")
  let passwordLength = prompt("how long do you want your password?");

  console.log(passwordLength);

  if (passwordLength < 8) {
    alert("your password is not log enough"); 
    return;
  }

  if (passwordLength > 128) {
    alert("your password is too long");
    return;
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//console.log("The page is connected")