var elForm = document.querySelector(".js-form");
var elInput = document.querySelector(".js-input");
var elAlert = document.querySelector(".js-alert");

// debugger

elForm.addEventListener("submit" , function(evt){
    evt.preventDefault()
    
    
    var newString = "";
    var elInputValue = Number(elInput.value.trim());
    
    if (elInputValue % 3 == 0){
        newString += "Fizz";
        elAlert.classList.remove("alert-danger");
        elAlert.classList.add("alert-warning");
    }
    if (elInputValue % 5 == 0){
        newString += "Buzz";
        elAlert.classList.remove("alert-danger");
        elAlert.classList.add("alert-warning");
    }
    if(elInputValue % 3 !== 0 && elInputValue % 5 !== 0) {
        elAlert.classList.remove("alert-warning");
        elAlert.classList.add("alert-danger");
    }
    
    elAlert.textContent = newString || elInputValue + " soni 5 ga ham 3 ga ha bolinmaydi";
    
    
})

