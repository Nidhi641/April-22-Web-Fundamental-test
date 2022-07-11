let ctx = document.getElementById('mychart').getContext('2d');
let labels = ['India', 'Pakistan', 'China'];
let colorHex = ['#FB3640', '#EFCA08', '#253058'];

let mychart = new Chart( ctx, {
    type: 'pie',
    data: {
        datasets[{
            data:[30,10,40,20],
            backgroundColor: colorHex
        }],
        labels:labels
    },
    options: {
        responsive : true;
    }
})