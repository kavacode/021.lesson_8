const tableBody = document.getElementById('table-body');
let number = 1;
for (let i = 0; i < 10; i++) {
	const row = document.createElement('tr');
	for (let j = 0; j < 10; j++) {
		const cell = document.createElement('td');
		cell.textContent = number;
		row.appendChild(cell);
		number++;
	}
	tableBody.appendChild(row);
}