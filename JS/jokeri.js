document.addEventListener('DOMContentLoaded', function () {
    const table = document.querySelector('table');
    const newRowButton = document.querySelector('button');
    const rowCountDisplay = document.querySelector('p');
    let rowCount = 0;

    newRowButton.addEventListener('click', addNewRow);

    function addNewRow() {
        const row = table.insertRow();
        for (let i = 0; i < 7; i++) {
            const cell = row.insertCell();
            const randomNumber = Math.floor(Math.random() * 10);
            cell.textContent = randomNumber;
        }
        arvotutRivit++; 
        paivitaArvottujenRivienLukumaara();
    }
})


function paivitaArvottujenRivienLukumaara() {
  const arvottujenRivienElementti = document.getElementById('arvottujen-rivien-lukumaara');
  arvottujenRivienElementti.textContent = `Arvottuja rivejä: ${arvotutRivit}`;
}