//1 make click event/button work ---
//2. ask user how long of a password ---
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
    alert("your password does not meet the requirements");
    return;
  }

  if (passwordLength > 128) {
    alert("your password is too long");
    return;
  }

  //ask the user for what characters
  let includeLower = confirm("Do you want lowercase characters in your password?");

  console.log(includeLower);

  let includeUpper = confirm("Do you want uppercase characters in your password?");

  let includeNumber = confirm("Do you want to include numbers in your password?");

  let includeSpecial = confirm("Do you want to include special characters in your password?");

  if (includeLower === false &&
    includeUpper === false &&
    includeNumber === false &&
    includeSpecial === false) {
    alert("You need to pick one")
  }

  var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var characterArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

  var resultsArray = [];
  var userArray = [];

  upperCaseArray[1]

  if (includeNumber) {
    resultsArray = resultsArray.concat(numberArray);
    
  }
  
  if (includeUpper) {
    resultsArray = resultsArray.concat(upperCaseArray);
  
  }
  
  if (includeLower) {
    resultsArray = resultsArray.concat(lowerCaseArray);
  
  }


  
  if (includeSpecial){
    resultsArray = resultsArray.concat(characterArray);
  }
  console.log(resultsArray)
  

  for (var i = 0; i < passwordLength; i++) {
      
    userArray.push (resultsArray[Math.floor(Math.random() * resultsArray.length)]); 
    }
  
    return userArray.join("") ;
  }
  
  
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
   }





  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

  //console.log("The page is connected")

