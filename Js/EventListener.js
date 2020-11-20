window.addEventListener('DOMContentLoaded', (event) => {
    var name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function () {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new EmployeePayrollData()).name = name.value;
            textError.textContent = "";
            return;
        }
        catch (error) {
            textError.textContent = error;
        }
    });
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    salary.addEventListener('input', function () {
        output.textContent = salary.value;
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
});