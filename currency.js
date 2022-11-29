var elFormCurrency = document.querySelector(".js-form-currency");
var elInputCurrency = document.querySelector(".js-input-currency");
var elSelectCurrency = document.querySelector(".js-select-currency");
var elAlertCurrency = document.querySelector(".js-alert-currency");


elFormCurrency.addEventListener("submit" , (evt)=> {
    evt.preventDefault();

    var elInputValue = elInputCurrency.value;
    var elSelectValue = elSelectCurrency.value;

    elAlertCurrency.textContent = elInputValue * elSelectValue + " so'm";

});