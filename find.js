// Find the number


var elFormFindNumber = document.querySelector(".js-form-find");
var elInputFindNumber = document.querySelector(".js-input-find");
var elBtnFindNumber = document.querySelector(".js-btn-find");
var elAttemptsFindNumber = document.querySelector(".js-attempts-find");
var elResultFindNumber = document.querySelector(".js-result-find");

var randomNumber = Number(Math.round(Math.random() * 100));

maxAttempts = 6;

elAttemptsFindNumber.textContent = `Urunishlar soni ${maxAttempts} ta`;

console.log(randomNumber);

elFormFindNumber.addEventListener("submit" , function(humo){
    humo.preventDefault()
    
    maxAttempts--;
    
    
    var elInputFindNumberValue = Number(elInputFindNumber.value.trim());
    
    elAttemptsFindNumber.textContent = `Urunishlar soni ${maxAttempts} ta`;
    
    if(elInputFindNumberValue < randomNumber){
        elResultFindNumber.textContent = "Siz kiritgan raqam ehtimoliy raqamdan kichik";
        elResultFindNumber.classList.add("alert-warning");
    }else if(elInputFindNumberValue > randomNumber){
        elResultFindNumber.textContent = "Siz kiritgan raqam ehtimoliy raqamdan katta";
        elResultFindNumber.classList.add("alert-warning");
    }else{
        elAttemptsFindNumber.classList.add("d-none");
        elResultFindNumber.classList.remove("alert-info");
        elResultFindNumber.classList.remove("alert-warning");
        elResultFindNumber.classList.add("alert-success");
        elResultFindNumber.textContent = "Tabriklaymiz Yutdingiz 👍";
        
    }
    if(maxAttempts == 0){
        elBtnFindNumber.disabled = true;
        elInputFindNumber.disabled = true;
        elAttemptsFindNumber.classList.add("d-none");
        elResultFindNumber.classList.remove("alert-info");
        elResultFindNumber.classList.remove("alert-warning");
        elResultFindNumber.classList.add("alert-danger");
        elResultFindNumber.textContent = `Afsuski Yutqizdingiz Ehtimoliy raqam ${randomNumber} edi`;
    }
    if (maxAttempts == 1){
        elAttemptsFindNumber.classList.remove("alert-warning");
        elAttemptsFindNumber.classList.add("alert-danger");
        
    }
    if(maxAttempts == 0 && elInputFindNumberValue == randomNumber){
        elAttemptsFindNumber.classList.add("d-none");
        elResultFindNumber.classList.remove("alert-info");
        elResultFindNumber.classList.remove("alert-danger");
        elResultFindNumber.classList.remove("alert-warning");
        elResultFindNumber.classList.add("alert-success");
        elResultFindNumber.textContent = "Tabriklaymiz Yutdingiz 👍";
    }
    
})
