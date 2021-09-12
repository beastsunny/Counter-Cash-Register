var checkBtn = document.querySelector("#check-btn")
var nextBtn = document.querySelector("#next")
var billAmt = document.querySelector("#bill-amt")
var billInput = document.querySelector(".bill-input")
var cashInput = document.querySelector(".cash-input")
var cashGiven = document.querySelector("#cash-given")
var divOutput = document.querySelector("#output")
var returnTable = document.querySelector(".return-table")


const arrayOfNotes = [2000, 500, 100, 20, 10, 5, 1]
console.log(arrayOfNotes.length)

console.log(returnTable)
console.log(billAmt)
console.log(cashGiven)
console.log(checkBtn)
console.log(nextBtn)
console.log(billInput)


function clickHandlerNext() {
    divOutput.style.display = "none"
    console.log("clicked")
    console.log(billAmt.value)
    if (billAmt.value > 0) {
        nextBtn.style.display = "none"
        cashInput.style.display = "block"
    } else {
        divOutput.style.display = "block"
        divOutput.innerText = "Invalid bill amount! Please Enter a valid bill amount to proceed"
    }
}



nextBtn.addEventListener("click", clickHandlerNext)
checkBtn.addEventListener("click", clickHandlerCheck)