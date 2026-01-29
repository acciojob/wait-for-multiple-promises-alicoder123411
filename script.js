const output = document.getElementById("output");
output.innerHTML = `
  <tr>
    <td colspan="2">Loading...</td>
  </tr>
`;
function createPromise() {
  return new Promise((resolve) => {
    const time = Math.random() * 2 + 1; // 1 to 3 seconds
    setTimeout(() => {
      resolve(time);
    }, time * 1000);
  });
}
const p1 = createPromise();
const p2 = createPromise();
const p3 = createPromise();
Promise.all([p1, p2, p3]).then((results) => {
  output.innerHTML = ""; 
  let maxTime = 0;
  results.forEach((time, index) => {
    maxTime = Math.max(maxTime, time);
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>Promise ${index + 1}</td>
      <td>${time.toFixed(0)}</td>
    `;
    output.appendChild(row);
  });
  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `
    <td>Total</td>
    <td>${maxTime.toFixed(3)}</td>
  `;
  output.appendChild(totalRow);
});
