// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var ctx = document.getElementById('myChart').getContext("2d");
var datasets = []
var dataset1 ={
    fill: false,
    label: "Oi from JS",
    data: [{
        x: 7,
        y: 5
    }, {
        x: 19,
        y: -1
    }]
}
var dataset2 = {
    fill: false,
    label: "Oi from JS 2",
    data: [{
        x: 0,
        y: 7
    }, {
        x: 11,
        y: 9
    }]   
}

datasets.push(dataset1)

var oi = new Chart(ctx, {
    type: 'line',
    data: {
        datasets:datasets
    },
    options: {
        stacked:true,
        animation: {
            duration: 0
        },
        scales: {
            xAxes: [{
                position: 'bottom',
                type: "linear",

            }],

        }
    }
});
function addEntry() {
    
}
addLine = () => {
    datasets.push(dataset2)
    oi.update()
}
var i=0
function duplicate() {
    var original = document.getElementById('curve' + i);
    i++;
    var clone = original.cloneNode(true); // "deep" clone
    clone.children[0].children[0].id = "X" + i
    clone.children[1].children[0].id = "Y" + i
    clone.id = "curve" + i; // there can only be one element with an ID
    //clone.onclick = duplicate; // event handlers are not cloned
    original.parentNode.appendChild(clone);
}