let editOptions={
    isEditing:false,
    rowElement:null
}

function onEditClick(event){
 const row = event.target.parentNode.parentNode;

 const cells=row.querySelectorAll("td");
 let employeeInfo={
    name:cells[0].innerText,
    companyName:cells[1].innerText,
    salary:cells[2].innerText,
    gender:cells[3].innerText,
    role:cells[4].innerText,
    email:cells[5].innerText,
    
    }
    preFillForm(employeeInfo);

     editOptions={
        isEditing:true,
        rowElement:row
    }
    submitButton.innerText="Update";
}

function preFillForm(employee){
    for(let key in employee){
        form[key].value=employee[key];
    }
}

function editEmployee(employee){
    // edit the tr with new employee data.  

    const rowElement = editOptions.rowElement ;

    let cells = rowElement.querySelectorAll("td");
    cells[0].innerText = employee.Name ;
    cells[1].innerText = employee.CompanyName;
    cells[2].innerText = employee.Salary ;
    cells[3].innerText = employee.Gender; 
    cells[4].innerText = employee.Role ;
    cells[5].innerText = employee.Email;

    submitButton.innerText = "Add Employee";

    // we need to reset the edit options state.
    editOptions = {
        isEditing: false,
        rowElement: null
    }
}