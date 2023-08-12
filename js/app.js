// variables
const addExpenseForm = document.querySelector("#add-expense"),
      totalBudget = document.querySelector("#total"),
      leftBudget = document.querySelector("#left")

// the budget that has been entered by user
let userBudget;
let budget;
const html = new HTML()

// eventListeners
eventListeners ()

function eventListeners(){
    // taking the budget fom user
    document.addEventListener("DOMContentLoaded", () => {
        userBudget = prompt("لطفا بودجه هفتگی خود را وارد کنید")

        // regular expression for validating userBudget value
        const regexFor = /^[1,9]*\d*$/gm
        
        // validating value of userBudget value
        if(userBudget.match(regexFor) && userBudget !== "" && userBudget !== "0"){
            // insert user budget to the html 
            html.insertBudget(userBudget)
            // making a new budget 
              budget = new Budget(userBudget)
        }else {
            // display an erro 
            html.displayError("لطفا یک مقدار عددی وارد نمایید", "alert-danger")
            // reload the page 
            setTimeout(() => {
                window.location.reload()

            },2000)
        }
      
    })

    addExpenseForm.addEventListener("submit", (e) => {
        // preventing default form action
        e.preventDefault()
        // access to the expense which has been entered by user 
        let expense = document.querySelector('#expense').value
        // access to the amount which has been entered by user 
        let amount = document.querySelector('#amount').value
        // validating value of expense and amount inputs
        if(expense === "" || amount === ""){
            // display an error cause one or both of inputs are empty
            html.displayError("لطفا همه ی مقادیر را وارد نمایید", "alert-danger")
        }else {
            // insert expense and amount values to the html             
            html.insertExpense(expense, amount)
            // subtracion expenses from initial budget 
            budget.subtactBudget(amount)
            // reset the form 
            addExpenseForm.reset()
        }
    })
}

