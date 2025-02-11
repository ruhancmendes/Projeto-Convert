//Cotação de moedas do dia.
const USD = 5.78
const CAD = 4.03
const EUR = 5.97
const GBP = 7.17
const JPY = 0.04

//Obtendo os elementos do formulário.
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")

//Manipulando o input amount para receber somente números.
amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

//Captando o evento de submit (enviar) do formulário.
form.onsubmit = (event) =>{
    event.preventDefault()

    switch (currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "CAD":
            convertCurrency(amount.value, CAD, "C$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
        case "JPY":
            convertCurrency(amount.value, JPY, "¥")
            break
    }
}

//Função para converter a moeda.
function convertCurrency (amount, price, symbol)