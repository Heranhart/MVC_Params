////const { parseJSON } = require("jquery");

var ctx = document.getElementById('myChart').getContext("2d");
var datasets = []

var dataset1 ={
    fill: false,
    label: "Curve0",
    borderColor:"#ff6384",
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
        elements: {
            point: {
                radius: 1
            }
        },
        stacked: true,
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
    regex = /([,.()/+\-*])/g
    xt = document.getElementById("X" + index).value.split(regex)
    for (i = 0; i < xt.length; i++) {
        if (Math[xt[i]] != undefined) { xt[i] = "Math." + xt[i] }
    }
    xt = xt.join('')

    yt = document.getElementById("Y" + index).value.split(regex)
    for (i = 0; i < yt.length; i++) {
        if (Math[yt[i]] != undefined) { yt[i] = "Math." + yt[i] }
    }
    yt = yt.join('')

    data=[]
    listT.forEach(t => {
        data.push({ x: eval(xt), y: eval(yt)})
    })

    var set = {
        fill: false,
        label: "Curve"+index,
        data: data
    }
    if (datasets.map(i=>i['label']).includes(set.label) )
    {
        datasets.forEach(curve => {
            if (curve["label"] == set["label"]) {
                curve.data = data
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