// everty thing related to the html  
class HTML{
   // displaying an error to user
   displayError(message, className){
      // make div for showing message to user
      const div = document.createElement("div")
      // inserting the message that has to show 
      div.appendChild(document.createTextNode(message))
      // add classes 
      div.classList.add("alert", "alert-center", className)
      //access to the parent of form tag 
      const contentPrimary = addExpenseForm.parentElement
      // append created <div> tag to the <div class = "content primary">
      contentPrimary.insertBefore(div, addExpenseForm)

      setTimeout(() => {
         document.querySelector('.alert').remove()
      }, 2000)

   }
   // insert user bidget to the html 
   insertBudget(amount){

      if (totalBudget.textContent === ""){
         
         totalBudget.appendChild(document.createTextNode(amount))
      }
      if (amount <= userBudget * 0.25){
         
         leftBudget.parentElement.parentElement.classList.remove('alert-succes', 'alert-warning')
         leftBudget.parentElement.parentElement.classList.add('alert-danger')
      
      }else if (amount <= userBudget * 0.5){

         leftBudget.parentElement.parentElement.classList.remove('alert-succes')
         leftBudget.parentElement.parentElement.classList.add('alert-warning')

      }
      
      leftBudget.textContent = amount

   }

   // insert expenses to the html 
   insertExpense(expense, amount){
      // accesss to the list of expenses
      const ulExpense = document.querySelector("#expenses .list-group")
      // make an item for <ul> tag for adding expenses to the html
      let li = document.createElement('li')
      li.classList.add('d-flex', 'list-group-item', 'justify-content-between', 'align-items-center')
      li.innerHTML = `${expense}
      <span class="badge bg-primary rounded-pill"> ${amount}</span>`
      ulExpense.appendChild(li)
   }

}

class Budget{
   constructor(initBudget){
      this.initBudget = initBudget
}
// subtract the expenses from initial budget
subtactBudget(amount){

   this.initBudget -= amount

   html.insertBudget(this.initBudget)
   
}
}