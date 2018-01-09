var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Amzius',
            data: [],
            backgroundColor: [],
            borderColor: [],
            borderWidth: 1
        },
        {
            type: 'line',
            label: 'Alga',
            data:[],
        }],
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

function addData() {

    var vardas = document.getElementById('vardas').value;
    var amzius = document.getElementById('amzius').value;
    var alga = document.getElementById('alga').value;
    
    var random =    (Math.ceil(Math.random() * 200 + Math.random() * 10));
    var random2 =   (Math.ceil(Math.random() * 199 + Math.random() * 10));
    var random3 =   (Math.ceil(Math.random() * 198 + Math.random() * 10));
    var random4 =   0.2;
    var random5 =   1;

    console.log('rgba('+random+','+random2+','+random3+','+random4+')');
    console.log();

    myChart.data.labels.push(vardas);
    myChart.data.datasets[0].data.push(amzius);
    myChart.data.datasets[1].data.push(alga);
    myChart.data.datasets[0].backgroundColor.push('rgba('+random+','+random2+','+random3+','+random4+')');
    myChart.data.datasets[0].borderColor.push('rgba('+random+','+random2+','+random3+','+random5+')');
    myChart.update();
};

function remove(chart){
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
};

function deleteAll(chart){
    chart.data.labels=[];
    chart.data.datasets[0].data=[];
    chart.update();
};




