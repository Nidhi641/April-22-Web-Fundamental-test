const charts = document.querySelectorAll(".chart");

charts.forEach(function (chart) {
    var ctx = chart.getContext("2d");
    var myChart = new Chart(ctx, {
        type: "pie",
        data: {
            labels: ["China", "India", "Pakistan"],
            datasets: [
                {
                    label: "Country Population",
                    data: [1412600000,1370508600,225200000],
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(12, 255, 13, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                    ],
                    borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(12, 255, 13, 1)",
                        "rgba(255, 206, 86, 1)",
                        
                    ],
                    borderWidth: 2,
                },
            ],
        },



        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
});


