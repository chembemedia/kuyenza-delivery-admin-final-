// For driver payment modal
function payDriver(driverName) {
    const modal = new bootstrap.Modal(document.getElementById('payDriverModal'));
    document.getElementById('payDriverModalLabel').textContent = "Pay Driver: " + driverName;
    modal.show();
}

// Export PDF function for reporting.html
function exportPDF() {
    const { jsPDF } = window.jspdf;
    let doc = new jsPDF();
    doc.text("Orders Report (Kuyenza Delivery - Zambia)", 10, 10);
    let startY = 20;
    let table = document.getElementById('reportTable');
    for (let i = 0, row; row = table.rows[i]; i++) {
        let rowText = '';
        for (let j = 0, col; col = row.cells[j]; j++) {
            rowText += col.innerText + '    ';
        }
        doc.text(rowText, 10, startY + i * 10);
    }
    doc.save("orders_report.pdf");
}