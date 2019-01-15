var hours = [ '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm','8pm' ];

var pikeTr = document.getElementById("pikeNum");
var stacTr = document.getElementById("stacNum");
var centerTr = document.getElementById("centerNum");
var chillTr = document.getElementById("hillNum");
var alkiTr = document.getElementById("alkiNum");

var salePike = {
    minCust : 23,
    maxCust: 65,
    aveCust: 6.3,
    
    randomDataSet: function (dataSize, min, max) {
        // dataSize = hours.length;
        return new Array(dataSize).fill(0).map(function(n) {
            return Math.floor(Math.random() * (max - min) + min);
        });
      },

    render : function (randomDataSet){
        for (var i = 0; i < hours.length ; i ++){
            var tdEl = document.createElement('td');
            console.log('just create tdEl', tdEl);
            tdEl.textContent = `${Math.round(randomDataSet[i] * 6.3)}`;
            pikeNum.appendChild(tdEl);
            console.log(pikeNum);
        }
    },

    total : function (randomDataSet){
        var a = 0;
        for (var i=0; i< randomDataSet.length; i ++){
            a += randomDataSet[i]*6.3;
  
        }
        var tdEl = document.createElement('td');
        tdEl.textContent = `${Math.round(a)}`;
        pikeNum.appendChild(tdEl);   
    },
};

var saleStac = {
    minCust : 3,
    maxCust: 24,
    aveCust: 1.2,
    randomDataSet: function (dataSize, min, max) {
        dataSize = hours.length;
        return new Array(dataSize).fill(0).map(function(n) {
            return Math.floor(Math.random() * (max - min) + min);
        });
      },

    render : function (randomDataSet){
        for (var i = 0; i < hours.length ; i ++){
            var tdEl = document.createElement('td');
            tdEl.textContent = `${Math.round(randomDataSet[i] * 6.3)}`;
            stacNum.appendChild(tdEl);  
        }
    },
    total : function (randomDataSet){
        var a = 0;
        for (var i=0; i< randomDataSet.length; i ++){
            a += Math.round(randomDataSet[i] * 6.3);
            console.log(a);
        }
        var tdEl = document.createElement('td');
        tdEl.textContent = `${a}`;
        stacNum.appendChild(tdEl)
    },    
};

var saleScenter = {
    minCust : 11,
    maxCust: 38,
    aveCust: 3.7,
    randomDataSet: function (dataSize, min, max) {
        dataSize = hours.length;
        return new Array(dataSize).fill(0).map(function(n) {
            return Math.floor(Math.random() * (max - min) + min);
        });
      },

    render : function (randomDataSet){
        for (var i = 0; i < hours.length ; i ++){
            var tdEl = document.createElement('td');
            tdEl.textContent = `${Math.round(randomDataSet[i] * 6.3)}`;
            centerNum.appendChild(tdEl);
        }
    },
    total : function (randomDataSet){
        var a = 0;
        for (var i=0; i< randomDataSet.length; i ++){
            a += Math.round(randomDataSet[i] * 6.3);
        }
        var tdEl = document.createElement('td');
        tdEl.textContent = `${a}`;
        centerNum.appendChild(tdEl);
    }, 
}

var saleCHill = {
    minCust : 20,
    maxCust: 38,
    aveCust: 2.3,
    randomDataSet: function (dataSize, min, max) {
        dataSize = hours.length;
        return new Array(dataSize).fill(0).map(function(n) {
            return Math.floor(Math.random() * (max - min) + min);
        });
      },

    render : function (randomDataSet){
        for (var i = 0; i < hours.length ; i ++){
            var tdEl = document.createElement('td');   
            tdEl.textContent = `${Math.round(randomDataSet[i] * 6.3)}`;
            hillNum.appendChild(tdEl);    
        }
    },
    total : function (randomDataSet){
        var a = 0;
        for (var i=0; i< randomDataSet.length; i ++){
            a += Math.round(randomDataSet[i]*6.3);
        }
        var tdEl = document.createElement('td');
        tdEl.textContent = `${a}`;
        hillNum.appendChild(tdEl);
    }, 
   
}

var saleAlki = {
    minCust : 2,
    maxCust: 16,
    aveCust: 4.6,
    randomDataSet: function (dataSize, min, max) {
        dataSize = hours.length;
        return new Array(dataSize).fill(0).map(function(n) {
            return Math.floor(Math.random() * (max - min) + min);
        });
      },

    render : function (randomDataSet){
        for (var i = 0; i < hours.length ; i ++){
            var tdEl = document.createElement('td');
            tdEl.textContent = `${Math.round(randomDataSet[i] * 6.3)}`;
            alkiNum.appendChild(tdEl);
        }
    },
    total : function (randomDataSet){
        var a = 0;
        for (var i=0; i< randomDataSet.length; i ++){
            a += Math.round(randomDataSet[i]*6.3);
        }
        var tdEl = document.createElement('td');
        tdEl.textContent = `${a}`;
        alkiNum.appendChild(tdEl);
    }, 
}

var randomArrPike = (salePike.randomDataSet(hours.length,salePike.minCust, salePike.maxCust));
salePike.render(randomArrPike);
salePike.total(randomArrPike);

var randomArrStac = (saleStac.randomDataSet(hours.length,saleStac.minCust, saleStac.maxCust));
saleStac.render(randomArrStac);
saleStac.total(randomArrStac);

var randomArrCen = (salePike.randomDataSet(hours.length,saleScenter.minCust, saleScenter.maxCust));
saleScenter.render(randomArrCen);
saleScenter.total(randomArrCen);

var randomArrHill = (saleCHill.randomDataSet(hours.length,saleCHill.minCust, saleCHill.maxCust));
saleCHill.render(randomArrHill);
saleCHill.total(randomArrHill);

var randomArrAlki = (saleAlki.randomDataSet(hours.length,saleAlki.minCust, saleAlki.maxCust));
saleAlki.render(randomArrAlki);
saleAlki.total(randomArrAlki);