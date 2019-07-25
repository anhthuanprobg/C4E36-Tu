const context = {
    Employees: null,
}


window.onload = async () => {
    await getEmployees();
    await renderEmployees();
    salary();
}

const getEmployees = async () => {
    const res = await fetch('http://dummy.restapiexample.com/api/v1/employees')
    const Employees = await res.json()
    context.Employees = Employees;
    console.log(Employees)
}

const renderEmployees = () => {
    console.dir(context.employees)
    let Employees =document.getElementById('list-employees')
    context.employees.forEach((employee, index) => {
        let employeeElement = `<li>${employee.employee_name}</li>`;
        employees.innerHTML += employ
    })                      
}

