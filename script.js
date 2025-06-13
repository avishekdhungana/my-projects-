
const dateInput =document.getElementById("dateInput");
const incomeInput=document.getElementById("incomeInput");
const expenseInput = document.getElementById("expenseInput");
const calculateBtn = document.getElementById("calculateBtn");
const resultDiv = document.getElementById("result");



 calculateBtn.addEventListener("click",function(){
    

    const date = dateInput.value.trim()
    const income =incomeInput.value.trim()
    const expense= expenseInput.value.trim()


    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    const incomePattern = /^\d+(\.\d{1,2})?$/;
    const expensesPattern = /^-?\d+(\.\d{1,2})?$/;
     

    if(!date || !income|| !expense){
        alert("please enter in all input filed")
        return;
     } else if(!datePattern.test(date)){
        alert("please write in date format")
        return;
     } else if(!incomePattern.test(income)){
        alert("please enter correctly")
        return;
     } else if(!expensesPattern.test(expense)){
        alert("please write expense correctly")
        return;
     }
       const balance = parseFloat(income) - parseFloat(expense);

       const displayDiv = document.createElement("div")
        displayDiv.innerHTML=`
        <p><strong>Date:</strong>${date}</p>
                <p><strong>Income:</strong>$${income}</p>
                        <p><strong>Expense:</strong>RS${expense}</p>
                                    <p><strong>Balance:</strong> RS${balance.toFixed(2)}</p>

                                    <hr>
                              `;  

                                      resultDiv.appendChild(displayDiv);

    

});




