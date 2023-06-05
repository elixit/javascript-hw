

password_box = document.getElementById("password") // get element by id method returns the element object that matches specific string  

length = document.getElementById("length")  
add_upper = document.getElementById("upper")  
add_lower = document.getElementById("lower")
add_number = document.getElementById("numeric")
add_special = document.getElementById("special")

/*
let char_maps creates a character map from the string
upper, lower, numeric, and special signify the type of password we can filter
*/

let char_maps = {
  "upper": {width: 26, start: 65},
  "lower": {width: 26, start: 97},
  "numeric": {width: 10, start: 48},
  "special": {width: 15, start: 33}
}

/* 
let variable pw_criteria assigned to array "types"
*/
let pw_criteria = Array.from(document.getElementsByName("types"))

// 

function return_string (howmany,chartype) {
/*
return statement will stop the function from executing and returns a value.
*/

  let map = char_maps[chartype] //chartype defines the array
  let tmp_string = "";
    for (let i = 0; i < howmany; i++) {
      tmp_string += String.fromCharCode(Math.floor(Math.random()*map.width)+map.start);
    }  //  before the loop starts, i = 0 sets the variable - the condition of the loop is defined with i <, i++ increases value everytime loop executes, for loop created to run same code over again
  return tmp_string
  }

function scramble_string(incoming_string) {

  

  const tmp_array = [...incoming_string] // const variables can't be reassigned
  const length = tmp_array.length  // length property sets or returns number of elements in array

  for (let start = 0; start < length; start++) {
    
    const randomPosition = Math.floor((tmp_array.length - start) * Math.random()) 
    const randomItem = tmp_array.splice(randomPosition, 1)
    tmp_array.push(...randomItem) 
  }
    return tmp_array.join("") 
  }

function num_criteria_checked() {
  
  let i = 0;
  pw_criteria.forEach(element => {
    if (element.checked) {
      i++
    }
  })
  return i 
}

function generatePassword() {
  let new_password = '';  
  let types = [];  
  total = +length.value 
  pw_criteria.forEach(element => {
    if (element.checked) {
      
      types.push(element.id)
    }
  })

  let howmany = Math.floor(+length.value/types.length)
  types.forEach(element => {
     
      new_password += return_string(howmany,element)
    }
    )
    
   
    if (+length.value % types.length > 0 ) {
      
      if (types.includes("lower")) {
        extra = "lower"
      } else {
        extra = types[0] //This Grabs the first in the array.
      }
      new_password += return_string(+length.value % types.length,extra)
    }
  

  

  return scramble_string(new_password.split(""));  
}


var generateBtn = document.querySelector("#generate");

// 
function writePassword() {
/* allows to write password

*/
if (num_criteria_checked() > 0) {
  
  let password = generatePassword(); 
  password_box.innerText = password; 
} else {
  
  password_box.innerText = "You need to select at least one of upper, lower, numeric, special.";
}
}


generateBtn.addEventListener("click", writePassword);