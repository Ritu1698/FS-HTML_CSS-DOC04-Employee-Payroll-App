window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
})

const createInnerHtml = () => {
    const headerHtml = `<tr>
    <th></th>
    <th>Name</th>
    <th>Gender</th>
    <th>Department</th>
    <th>Salary</th>
    <th>Start Date</th>
    <th>Actions</th>
  </tr>`;
    let innerHtml = ` ${headerHtml}`;
    let empList = createEmployeePayrollJSON();
    for (const employee of empList) {
        innerHtml = `${innerHtml}
        <tr>
          <td><img class="profile" src="${employee._profilePic}" alt = ""></td>
          <td>${employee._name}</td>
          <td>${employee._gender}</td>
          <td>${getDeptHtml(employee._department)}</td>
          <td>${employee._salary}</td>
          <td>${employee._startDate}</td>
          <td>
          <img name="${employee._id}" onclick="remove(this)" alt="delete" 
                  src="../assets/icons/delete-black-18dp.svg">
          <img name="${employee._id}" onclick="update(this)" alt="edit" 
                  src="../assets/icons/create-black-18dp.svg">
          </td>
        </tr>`;
    };
    document.querySelector('#table-display').innerHTML = innerHtml;
}

const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            "_name": "Rituparna Biswas",
            "_gender": "Female",
            "_department": [
                "Engineering"
            ],
            "_salary": "400000",
            "_startDate": "16 Dec 2018",
            "_notes": "",
            "_profilePic": "../assets/profile-images/Ellipse -4.png"
        },
        {
            "_name": "Dyotana Das",
            "_gender": "Female",
            "_department": [
                "Sales", "Marketing"
            ],
            "_salary": "500000",
            "_startDate": "19 Sept 2020",
            "_notes": "",
            "_profilePic": "../assets/profile-images/Ellipse -1.png"
        }
    ]
    return empPayrollListLocal;
}

const getDeptHtml = (departmentList) => {
    let deptHtml = ``;
    for (const dept of departmentList) {
        deptHtml = `${deptHtml} <div class="dept-label">${dept}</div>`
    }
    return deptHtml;
}