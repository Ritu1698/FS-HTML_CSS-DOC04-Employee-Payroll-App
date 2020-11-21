let isUpdate=false;
let employeePayrollObj={};
window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function () {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new EmployeePayrollData()).name = name.value;
            textError.textContent = "";
        } catch (error) {
            textError.textContent = error;
        }
    });


    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    salary.addEventListener('input', function () {
        output.textContent = salary.value;
    });

    checkForUpdate();
});
const day = document.querySelector('#day');
const year = document.querySelector('#year');
const month = document.querySelector('#month');
const dateError = document.querySelector('.date-error');
[day, month, year].forEach(item => item.addEventListener('input', function () {
    if (month.value == 1) {
        if (isLeapYear(year.value)) {
            if (day.value > 29) {
                dateError.textContent = "Invalid Date!";
            } else dateError.textContent = "";
        } else {
            if (day.value > 28) {
                dateError.textContent = "Invalid Date!";
            } else dateError.textContent = "";
        }
    }
    if (month.value == 3 || month.value == 5 || month.value == 8 || month.value == 10) {
        if (day.value > 30) {
            dateError.textContent = "Invalid Date!";
        } else dateError.textContent = "";
    }
}));
const checkForUpdate = () => {
    const employeePayrollJson = localStorage.getItem('editEmp');
    isUpdate = employeePayrollJson ? true : false;
    if (!isUpdate)
        return;
    employeePayrollObj = JSON.parse(employeePayrollJson);
    setForm();
}
const setForm = () => {
    setValues('#name', employeePayrollObj._name);
    setSelectedValuess('[name=profile]', employeePayrollObj._profilePic);
    setSelectedValuess('[name=gender]', employeePayrollObj._gender);
    setSelectedValuess('[name=department]', employeePayrollObj._department);
    setValues('#salary', employeePayrollObj._salary);
    setTextValues('.salary-output', employeePayrollObj._salary);
    setValues('#notes', employeePayrollObj._note);
    let date = stringifyDate(employeePayrollObj._startDate).split(" ");
    let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].indexOf(date[1]);
    console.log(date[0]);
    if (date[0] < 10) {
        let num = date[0];
        num = num.toString();
        num = "0" + num;
        date[0] = num;
    }
    //console.log(date[0]);
    setValues('#day', date[0]);
    setValues('#month', month);
    setValues('#year', date[2]);
}

const setTextValues = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}

const setValues = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}
const setSelectedValuess = (propertyValue, value) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
        if (Array.isArray(value)) {
            if (value.includes(item.value)) {
                item.checked = true;
            }
        }
        else if (item.value == value)
            item.checked = true;
    });
}