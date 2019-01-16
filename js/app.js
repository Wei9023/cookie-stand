var hours = [ '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm','8pm' ];

var allLocations = [];

var saleTable = document.getElementById('table');

function Sale(name, mingenerateCustomersEachHour, maxgenerateCustomersEachHour, avgCookiesPerCustomer){
    this.name = name;
    this.mingenerateCustomersEachHour = mingenerateCustomersEachHour;
    this.maxgenerateCustomersEachHour = maxgenerateCustomersEachHour;
    this.avgCookiesPerCustomer = avgCookiesPerCustomer;
    this.customersHourly= [];
    this.cookiesHourly=[];
    this.totalDailyCookies=0;
    allLocations.push(this);
    }

//creat sale instance
new Sale('1st and Pike',23, 65, 6.3);
new Sale('SeaTac Airport',3, 24, 1.2);
new Sale('Seattle Center',11, 38, 3.7);
new Sale('Capitol Hill',20, 38, 2.3);
new Sale('Alki',2, 16, 4.6);


    
console.table(allLocations);

// We need a separate function to make the table header

function makeHeaderRow() {
    var trEl = document.createElement("tr");
    var thEl = document.createElement('th');
    thEl.textContent = ' ';
    trEl.appendChild(thEl);
    
    for (var i=0; i< hours.length; i++){
        //create, content, append
        thEl = document.createElement('th');
        thEl.textContent = hours[i];
        trEl.appendChild(thEl);
    };
    var thEl = document.createElement('th');
    thEl.textContent = 'Total';
    trEl.appendChild(thEl);
    saleTable.appendChild(trEl);
    console.log(trEl);
};

function generateRandomCustomers(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}

Sale.prototype.generateCustomersEachHour = function(){
    for (var i=0; i< hours.length; i++){
        var oneHourCustomers = generateRandomCustomers(this.mingenerateCustomersEachHour, this.maxgenerateCustomersEachHour);
        this.customersHourly.push(oneHourCustomers);
    }
}

Sale.prototype.calcCookiesEachHour = function(){
    for (var i=0; i< hours.length; i++){
        var oneHourCookies= parseInt(this.customersHourly[i]) * parseInt(this.avgCookiesPerCustomer);
        this.cookiesHourly.push(oneHourCookies);
        console.log(this.cookiesHourly);
    }
}

Sale.prototype.dailyCookies = function() {
    var cookiesPerHour = 0;
    for(var i=0; i < this.cookiesHourly.length; i++){   
       cookiesPerHour += parseInt(this.cookiesHourly[i]);
    }
    this.totalDailyCookies = cookiesPerHour;
       console.log(this.totalDailyCookies);
}

Sale.prototype.render = function (){
    //create, content, append for "min"
    
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');        
    thEl.textContent = this.name;
    trEl.appendChild(thEl);  
    for(var j=0; j< this.cookiesHourly.length; j++){
        var tdEl = document.createElement('td');
        //alert(3);
        tdEl.textContent = this.cookiesHourly[j];
        trEl.appendChild(tdEl);
        // alert(4);
    }  
    
    var thEl = document.createElement('th');        
    thEl.textContent = this.totalDailyCookies;
    trEl.appendChild(thEl);  

    saleTable.appendChild(trEl); 
    // alert(this.mingenerateCustomersEachHour);
    console.log(trEl);
};
    


function renderAllLocations() {
    for(var i =0; i < allLocations.length; i ++){
        allLocations[i].render(); 
    }
}
function generateCustomersEachHourAllLocations() {
    for(var i =0; i < allLocations.length; i ++){
        allLocations[i].generateCustomersEachHour();
    }
}

function calcCookiesEachHourAllLocations() {
    for(var i =0; i < allLocations.length; i ++){
        allLocations[i].calcCookiesEachHour();
    }
}

function cookiesDailyAllLocations() {
    for(var i =0; i < allLocations.length; i ++){
        allLocations[i].dailyCookies();
    }
}
//   allLocations row
//  cookiesHourly[] column:  1pm 2pm 3pm 4pm 

function calculateTotalAndRenderIt() {

    var tmpArray = new Array(allLocations[0].cookiesHourly.length).fill(0);
    for(var i = 0; i < allLocations.length; i++){
        for(var j = 0; j< allLocations[i].cookiesHourly.length; j++){
            tmpArray[j] += allLocations[i].cookiesHourly[j];
        }
    }

    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');        
    thEl.textContent = "Total";
    trEl.appendChild(thEl);  

    for(var j=0; j< allLocations[0].cookiesHourly.length; j++){

        var tdEl = document.createElement('td');
        tdEl.textContent = tmpArray[j];
        trEl.appendChild(tdEl);
        
        // alert(4);
    } 
    saleTable.appendChild(trEl); 

}


//totalDailyCookies();
makeHeaderRow();
generateRandomCustomers();
generateCustomersEachHourAllLocations();
calcCookiesEachHourAllLocations();
cookiesDailyAllLocations();
renderAllLocations();

calculateTotalAndRenderIt();



