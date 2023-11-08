const form=document.querySelector("form"); 
const tbody=document.querySelector("tbody");
const submitButton=document.querySelector("form>button");


function deleteRecord(event){
   const buttonref=event.target;
    const row=buttonref.parentNode.parentNode;
    row.remove();
}

function addemploye(employee){
    let tr=document.createElement("tr");
    for(let key in employee ){
        const td=document.createElement("td");
        td.innerText=employee[key];
        tr.appendChild(td);
    }
    let options=document.createElement("td");
    let button=document.createElement("button");
    button.innerText="delete";

    let edit=document.createElement("button");
    edit.innerText="edit";
    //DELETE:It is a HTML element.
    button.addEventListener("click",deleteRecord);
    edit.addEventListener("click",onEditClick);

    options.appendChild(button);
    options.appendChild(edit);

    tr.appendChild(options);
  
    tbody.appendChild(tr);
}

function onSubmitform(event){
      event.preventDefault();

      let employeeData={
        Name:form.name.value,
        CompanyName:form.companyName.value,
        Salary:form.salary.value,
        Gender:form.gender.value,
        Role:form.role.value,
        Email:form.email.value
      }
    
      if(editOptions.isEditing){
       editEmployee(employeeData);
    }
    else {
        addemploye(employeeData);
    }
form.reset();  

}
form.addEventListener("submit",onSubmitform)
