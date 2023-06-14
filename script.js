var generateBtn = document.querySelector("#generate");
 function genPass() { // generate the password function, asasign variables to password descriptions
    var choose = ""
    var randomPass = ""
    var lowerC = "abcdefghijklmnopqrstuvwxyz"
    var upperC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var numbers = "0123456789"
    var special = "!@#$_,.;%^&*()-=+<>?/|':[]{}~"
    var characterLength = prompt(
        "Enter 8 to 128 characters"
    );
    if (characterLength < 8 || characterLength > 128 || isNaN(characterLength)) { //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN      
        return;
    } else { // users prompted with 'confirm()'
    var upperCase = confirm("Do you only want SOME UPPERCASE characters? If yes, click 'ok");
    if (window.confirm("some Uppercase letters will be added to your password - continue?"));
    var onlyUpper = confirm("Do you want ONLY UPPERCASE characters? If yes, click 'ok' and cancel the following prompts");
    var lowerCase = confirm("Do you want some Lowercase letters will be added to your password - continue?");
    if (window.confirm("some Lowercase letters will be added to your password"));
    var onlyLower = confirm("Do you want ONLY LOWERCASE characters?");
    if (window.confirm("Only Lowercase letters will be displayed, click 'OK' and cancel the following prompts"));
    var numbersOptions = confirm("Do you want Your password to contain SOME numbers? click ok to continue");
    if (window.confirm("only some numbers will be included"));
    var onlyNumber = confirm("Do you want ONLY NUMBERS to be displayed?");
    if (window.confirm("If you only want numbers included, click 'ok' and cancel the following prompts"));
    var specialChar = confirm("Your password will contain a variety of Special characters, click ok to continue");
    if (window.confirm("Some special characters will be included"));
    var onlySpecial = confirm("Only special characters will be displayed");
    }
    if (upperCase) {choose += upperC;} // if elements allow users to choose how they want their password
    if (onlyUpper){choose = upperC;}
    if (onlyLower){choose = lowerC;}
    if (lowerCase) {choose += lowerC;}
    if (numbersOptions) {choose += numbers;}
    if (onlyNumber){choose = numbers}
    if (specialChar) {choose += special;}
    if (onlySpecial){choose = special}
    for (i = 0; i < characterLength; i++) {

        randomPass += choose[Math.floor(Math.random() * choose.length)] //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random for random password
    }
    return(randomPass);
}
    var passwordText = document.querySelector("#password");
    function writePassword(randomPass) {
    if (password.length === 0) {
        return;
    }

    passwordText.value = randomPass;
    navigator.clipboard.randomPass("copied");
    
}

    generateBtn.addEventListener("click", function () { writePassword(genPass()) });

    