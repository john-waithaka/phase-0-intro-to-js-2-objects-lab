// Write your solution in this file!

//test 1
const employee = {
    name: "Sam",
    streetAddress: "s11 Broadway",
};

//test 2
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}

//test 3 not passing

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Update the employee object with the given key and value
    employee[key] = value;

    // Return the entire updated employee object (optional)
    return employee;
}



//test 4 and 5
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}


//test last 
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}