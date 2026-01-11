let data = JSON.parse(localStorage.getItem("results")) || [];

data.forEach(d => {
  tableData.innerHTML += `
    <tr>
      <td>${d.email}</td>
      <td>${d.profile}</td>
      <td>${d.score}</td>
      <td>${d.result}</td>
    </tr>
  `;
});
