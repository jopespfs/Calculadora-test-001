const previousOperationText = document.querySelector("#previous-operation")
const currentOperationText = document.querySelector("#current-operation")
const buttons = document.querySelectorAll("#buttons-container button")

class calculator{
  constructor(previousOperationText, currentOperationText) {
    this.previousOperationText = previousOperationText
    this.currentOperationText = currentOperationText
    this.currentOperation = ""
  }

  // add digit calculator screen

  addDigit(digit) {

    this.currentOperation = digit
    this.updateScreen()

  }

  // change values of the calculate screen
  updateScreen() {
    this.currentOperationText.innerText += this.currentOperation;
  }
}

const calc = new calculator(previousOperationText, currentOperationText);

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.target.innerText;

    if(+value >=0 || value === ",") {
      calc.addDigit(value); 
    } else {
      console.log("op: " + value)
    }
  })
})