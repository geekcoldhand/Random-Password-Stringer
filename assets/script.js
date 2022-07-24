// Assignment Code
var generateBtn = document.querySelector("#generate");
var cardBody = document.querySelector(".card-body");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  var instructions = ["", "", "", ""];
  var values = ["lowercase", "uppercase", "numeric", "special characters"];
  //grab instructions input
  for (let i = 0; i < instructions.length; i++) {
    var curr = window.prompt("Do you want " + values[i] + "? (yes | no)");
    //validate strings
    if (
      (typeof "string" && curr.toLowerCase() === "yes") ||
      (typeof "string" && curr.toLowerCase() === "no")
    ) {
      instructions[i] = curr;
    } else {
      //exit loop
      window.alert("Opps.. not a valid input. Please try again.");
      i += instructions.length;
    }
  }

  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  var alphabet = [
    "a",
    "s",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
  ];
  var spCharacters = [
    "!",
    "#",
    "$",
    "%",
    "(",
    ")",
    "&",
    "^",
    "@",
    "[",
    "]",
    "?",
    "/",
    ">",
    "<",
    "~",
    "|",
  ];

  //grab length input and validate
  var passwordLength = window.prompt(
    "How long should the passsword be? (between 8 - 120 characters) "
  );
  if ((typeof "number" && passwordLength >= 8) || passwordLength <= 128) {
    instructions.push(passwordLength);
  } else {
    return "Start over. . . ";
  }
  //GET LOOP MAX + remainder
  var loopMax = Math.floor(passwordLength / 8) * 8;
  var remainder = passwordLength % 8;
  loopMax += remainder;

  //LOOPMAX += 1 charactert per REMAINDER
  //LOOP UNTIL n > LOOP MAX
  var output = "";
  var n = 0;
  while (n < loopMax) {
    //random index
    var ranLetter = Math.floor(alphabet.length * Math.random());
    var ranNum = Math.floor(numbers.length * Math.random());
    var ranChar = Math.floor(spCharacters.length * Math.random());

    if (!(instructions[0] == "no")) {
      output += alphabet[ranLetter];
      n++;
    }
    if (!(instructions[1] == "no")) {
      output += alphabet[ranLetter].toUpperCase();
      n++;
    }
    if (!(instructions[2] == "no")) {
      output += numbers[ranNum].toString();
      n++;
    }
    if (!(instructions[3] == "no")) {
      output += spCharacters[ranChar];
      n++;
    }
  }
  return output;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
