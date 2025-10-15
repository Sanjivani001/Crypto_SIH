// analytics.js – Visual analytics for Crypto Crime Watcher

document.addEventListener("DOMContentLoaded", () => {
    // Count risk levels
    const riskCounts = { High: 0, Medium: 0, Low: 0 };
    const sourceCounts = {};

    dummyData.forEach(item => {
        riskCounts[item.category]++;
        sourceCounts[item.source] = (sourceCounts[item.source] || 0) + 1;
    });

    // Risk Level Chart
    const riskCtx = document.getElementById("riskChart");
    new Chart(riskCtx, {
        type: "pie",
        data: {
            labels: ["High", "Medium", "Low"],
            datasets: [{
                data: [riskCounts.High, riskCounts.Medium, riskCounts.Low],
                backgroundColor: ["#ff4444", "#ffbb33", "#00ff9d"]
            }]
        },
        options: {
            plugins: {
                legend: { labels: { color: "#ffffff" } }
            }
        }
    });

    // Source Distribution Chart
    const sourceCtx = document.getElementById("sourceChart");
    new Chart(sourceCtx, {
        type: "bar",
        data: {
            labels: Object.keys(sourceCounts),
            datasets: [{
                label: "Addresses by Source",
                data: Object.values(sourceCounts),
                backgroundColor: "#00aaff"
            }]
        },
        options: {
            scales: {
                x: { ticks: { color: "#ffffff" } },
                y: { ticks: { color: "#ffffff" } }
            },
            plugins: {
                legend: { labels: { color: "#ffffff" } }
            }
        }
    });
});
