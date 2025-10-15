// dashboard.js – Logic for populating and interacting with the dashboard

// Wait until page content is loaded
document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.querySelector("#addressTable tbody");
    const searchInput = document.getElementById("searchInput");
    const exportCSV = document.getElementById("exportCSV");
    const exportJSON = document.getElementById("exportJSON");

    // Function to render table rows
    function renderTable(data) {
        tableBody.innerHTML = "";
        data.forEach(item => {
            const row = document.createElement("tr");

            // Apply risk-based row color
            if (item.category === "High") row.classList.add("high-risk");
            else if (item.category === "Medium") row.classList.add("medium-risk");
            else row.classList.add("low-risk");

            row.innerHTML = `
                <td>${item.address}</td>
                <td>${item.category}</td>
                <td>${item.source}</td>
                <td>${item.activity}</td>
                <td>${item.lastSeen}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    // Initial render
    renderTable(dummyData);

    // Search filter
    searchInput.addEventListener("keyup", () => {
        const term = searchInput.value.toLowerCase();
        const filtered = dummyData.filter(item =>
            item.address.toLowerCase().includes(term) ||
            item.category.toLowerCase().includes(term) ||
            item.source.toLowerCase().includes(term) ||
            item.activity.toLowerCase().includes(term)
        );
        renderTable(filtered);
    });

    // Export CSV
    exportCSV.addEventListener("click", () => {
        const csv = [
            ["Address", "Category", "Source", "Activity", "Last Seen"],
            ...dummyData.map(d => [d.address, d.category, d.source, d.activity, d.lastSeen])
        ]
            .map(row => row.join(","))
            .join("\n");

        const blob = new Blob([csv], { type: "text/csv" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "suspicious_addresses.csv";
        a.click();
    });

    // Export JSON
    exportJSON.addEventListener("click", () => {
        const blob = new Blob([JSON.stringify(dummyData, null, 2)], { type: "application/json" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "suspicious_addresses.json";
        a.click();
    });
});
