////const { parseJSON } = require("jquery");

var ctx = document.getElementById('myChart').getContext("2d");
var datasets = []
var dataset1 ={
    fill: false,
    label: "Curve0",
    data: [{
        x: 7,
        y: 5
    }, {
        x: 19,
        y: -1
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
function addCurve(input) {
    let index = input.parentNode.id.slice(-1)
    let listT = []
    for (i = 0; i < 100; i++) {
        listT.push(i*0.1)
    }
    data=[]
    listT.forEach(t => {
        data.push({ x: eval(document.getElementById("X" + index).value), y: eval(document.getElementById("Y" + index).value)})
    })

    var set = {
        fill: false,
        label: "Curve"+index,
        data: data
    }
    if (index <= total) {
        datasets.forEach(curve => {
            console.log(curve["label"]+" "+set["label"])
            if (curve["label"] == set["label"]) {
                curve.data = data
                console.log("remplacé ?")
            }
        })
    } else {
        datasets.push(set)
    }
    oi.update()
}



var total=0
function duplicate() {
    var original = document.getElementById('curve' + total);
    total++;
    var clone = original.cloneNode(true); 
    clone.children[0].children[0].id = "X" + total
    clone.children[1].children[0].id = "Y" + total
    clone.id = "curve" + total; 
    original.parentNode.appendChild(clone);
}