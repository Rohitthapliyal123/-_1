let input_field = document.getElementById("textarea").value;

// Function for display digits and decimal
let display = (value) => {

  
    document.getElementById("textarea").value += value;

}

// Function for display Operation
let operation = (value) => {

   
    document.getElementById("textarea").value += value;

}

// Function for display total 
let calculate = () => {
    
  
    document.getElementById("textarea").value = eval(document.getElementById("textarea").value);
}

// Function for clear text...

let clr = () => {

    document.getElementById("textarea").value = '';
}


