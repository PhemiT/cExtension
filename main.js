//declaring variables 
let myLeads = ["", "", ""]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener ("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

for (i=0; i < myLeads.length; i++) {
    console.log(myLeads[i])
}