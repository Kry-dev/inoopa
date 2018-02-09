var myCanvas = document.getElementById("myChart");

var myData = {
    label: "% / Hommes",
    data: [20, 28, 20, 13, 13, 8 ],
    backgroundColor: '#B50E0B'
};

var barChart = new Chart(myCanvas, {
    type: 'bar',
    data: {
        labels: ["18-24", "25-34", "35-44", "45-54", "55-64", "65+"],
        datasets: [myData]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }


});