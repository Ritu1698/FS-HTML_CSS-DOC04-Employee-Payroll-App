class EmployeePayrollData {

    constructor(...params) {
        this.name = params[0];
        this.salary = params[1];
        this.gender = params[2];
        this.startDate = params[3];
        this.department = params[4];
        this.profilePic = params[5];
        this.notes = params[6];
    }

    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp('^([A-Z]{1}[a-z]{2,}\\s{0,1})+$');
        if (nameRegex.test(name))
            this._name = name;
        else throw "Name is incorrect!";
    }
    get department() {
        return this._department;
    }
    set department(department) {
        this._department = department;
    }
    get salary() {
        return this._salary;
    }
    set salary(salary) {
        let salaryRegex = RegExp('^[1-9]{1}[0-9]*$');
        if (salaryRegex.test(salary))
            this._salary = salary;
        else throw "Salary should be non zero positive number";
    }
    get gender() {
        return this._gender;
    }
    set gender(gender) {
        if (gender != undefined) {
            let genderRegex = RegExp('^(Male|Female)$');
            if (genderRegex.test(gender)) {
                this._gender = gender;
            } else {
                throw "Gender incorrect";
            }
        }
    }
    get startDate() {
        return this._startDate;
    }
    set startDate(startDate) {
        if (startDate != undefined) {
            if (startDate <= new Date()) {
                const options = { year: "numeric", month: "long", day: "numeric" };
                const employeeDate = startDate.toLocaleDateString("en-US", options);
                this._startDate = employeeDate;
            }
            else throw "Select valid date!";
        }
    }
    get profilePic() {
        return this._profilePic;
    }
    set profilePic(profilePic) {
        if (profilePic != undefined)
            this._profilePic = profilePic;
        else
            throw "Profile Pic incorrect!"
    }
    get notes() {
        return this._notes;
    }
    set notes(notes) {
        if (notes == undefined || notes == "")
            notes = "NIL";
        this._notes = notes;
    }
    toString() {
        return "Name: " + this.name + " Salary: " + this.salary + " Gender: " + this.gender +
            " Start Date: " + this.startDate + " Department: " + this.department + " Profile Pic: " +
            this.profilePic + " Notes: " + this.notes;
    }
}
function save() {
    try {
        var name = document.querySelector('#name').value;
        var profilePic = document.querySelector('input[name=profile]:checked').value;
        var salary = document.querySelector('#salary').value;
        var gender = document.querySelector('input[name=gender]:checked').value;
        var year = document.querySelector('#year').value;
        var month = document.querySelector('#month').value;
        var day = document.querySelector('#day').value;
        var startDate = new Date(year, month, day);
        var department = [];
        var deptCheckboxes = document.querySelectorAll('input[name=department]:checked');
        var notes = document.querySelector('#notes').value;
        for (var i = 0; i < deptCheckboxes.length; i++) {
            department.push(deptCheckboxes[i].value);
        }
        var employee = new EmployeePayrollData(name, salary, gender, startDate, department, profilePic, notes);
        event.preventDefault();
        swal({
            title: "Successfully Added!!!",
            type: "success",
            showCancelButton: true
        });
        createAndUpdateStorage(employee);
    } catch (error) {
        event.preventDefault();
        swal({
            title: error,
            type: "error",
            showCancelButton: true
        });
    }
}

function createAndUpdateStorage(employeePayrollData) {
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
    if (employeePayrollList != undefined) {

        employeePayrollList.push(employeePayrollData);
    }
    else {
        employeePayrollList = [employeePayrollData];
    }
    console.log(employeePayrollList.toString());
    event.preventDefault();
    swal({
        title: employeePayrollData.toString(),
        type: "success",
        showCancelButton: true
    });
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList))

}
const isLeapYear = (year) => {
    let result = false;
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                result = true;
            }
        } else {
            result = true;
        }
    }
    return result;
} 