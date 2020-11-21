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
    const innerHtml = ` ${headerHtml}
  <tr>
    <td><img class="profile" alt="" src="../assets//profile-images/Ellipse -4.png"></td>
    <td>Rituparna Biswas</td>
    <td>Female</td>
    <td>
        <div class="dept-label">Engineering</div>
    </td>
    <td>300000</td>
    <td>16 Dec 2018</td>
    <td>
        <img id="1" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
        <img id="1" onclick="update(this)" alt="edit" src="../assets/icons/create-black-18dp.svg">
    </td>
  </tr>`;
    document.querySelector('#table-display').innerHTML = innerHtml;
} 