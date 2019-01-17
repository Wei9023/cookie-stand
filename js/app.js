var hours = [ '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm','8pm' ];

var allStores = [];

var salesTable = document.getElementById('table');

//Global variables for DOM
var salesForm = document.getElementById('sales-form');
//var resetTable = document.getElementById('reset-form');

function Store(name, mingenerateCustomersEachHour, maxgenerateCustomersEachHour, avgCookiesPerCustomer){
    this.name = name;
    this.mingenerateCustomersEachHour = mingenerateCustomersEachHour;
    this.maxgenerateCustomersEachHour = maxgenerateCustomersEachHour;
    this.avgCookiesPerCustomer = avgCookiesPerCustomer;
    this.customersHourly= [];
    this.cookiesHourly=[];
    this.totalDailyCookies=0;
    
    // allStores.push(this);
    }



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
    thEl.textContent = 'Daily Location totals';
    trEl.appendChild(thEl);
    salesTable.appendChild(trEl);
};

function generateRandomCustomers(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}

Store.prototype.generateCustomersEachHour = function(){
    for (var i=0; i< hours.length; i++){
        var oneHourCustomers = generateRandomCustomers(this.mingenerateCustomersEachHour, this.maxgenerateCustomersEachHour);
        this.customersHourly.push(oneHourCustomers);
    }
}

Store.prototype.calcCookiesEachHour = function(){
    for (var i=0; i< hours.length; i++){
        var oneHourCookies= Math.ceil(this.customersHourly[i] * this.avgCookiesPerCustomer);
        this.cookiesHourly.push(oneHourCookies);
        //console.log(this.cookiesHourly);
    }
}

Store.prototype.calcDailyCookies = function() {
    var cookiesPerHour = 0;
    for(var i=0; i < this.cookiesHourly.length; i++){   
       cookiesPerHour += Math.ceil(this.cookiesHourly[i]);
    }
    this.totalDailyCookies = cookiesPerHour;
      // console.log(this.totalDailyCookies);
}

Store.prototype.render = function (){
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

    salesTable.appendChild(trEl); 
    // alert(this.mingenerateCustomersEachHour);
    //console.log(trEl);
};

Store.prototype.calcNew = function(){

    this.generateCustomersEachHour();
    this.calcCookiesEachHour();
    this.calcDailyCookies();
}

function renderAllLocations() {
    for(var i =0; i < allStores.length; i ++){
        allStores[i].render(); 
    }
}
function generateDataForAllStoresAndRender() {
    for(var i =0; i < allStores.length; i ++){
        allStores[i].calcNew();
        allStores[i].render(); 
    }
}

function calcCookiesEachHourAllLocations() {
    for(var i =0; i < allStores.length; i ++){
        allStores[i].calcCookiesEachHour();
        console.log(calcCookiesEachHourAllLocations);
    }
}

function cookiesDailyAllLocations() {
    for(var i =0; i < allStores.length; i ++){
        allStores[i].calcDailyCookies();
    }
}
//   allStores row
//  cookiesHourly[] column:  1pm 2pm 3pm 4pm 

function calculateTotalAndRenderIt() {
    var totalOfAll = 0;
    var tmpArray = new Array(allStores[0].cookiesHourly.length).fill(0);
    for(var i = 0; i < allStores.length; i++){
        for(var j = 0; j< allStores[i].cookiesHourly.length; j++){
            tmpArray[j] += allStores[i].cookiesHourly[j];
            totalOfAll += allStores[i].cookiesHourly[j];
        }
    }

    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');        
    thEl.textContent = "Total";
    trEl.appendChild(thEl);  

    for(var j=0; j< allStores[0].cookiesHourly.length; j++){

        var tdEl = document.createElement('td');
        tdEl.textContent = tmpArray[j];
        trEl.appendChild(tdEl);
        
        // alert(4);
    } 
    var thTotal = document.createElement('th');
    thTotal.textContent = totalOfAll;
    trEl.appendChild(thTotal);

    salesTable.appendChild(trEl); 
}

function handleLocationSubmit(event){
    // allStores = [];
    event.preventDefault();
    
    var location = event.target.where.value;
  
    var minInputCustomersNum = parseInt(event.target.minCustomersHourly.value);
    var maxInputCustomersNum =parseInt(event.target.maxCustomersHourly.value);
    var avgInputCustomersNum = parseInt(event.target.avgCustomersHourly.value);
    var newStore = new Store(location, minInputCustomersNum, maxInputCustomersNum, avgInputCustomersNum);

    newStore.calcNew();
    allStores.push(newStore);

    for(var i = allStores.length; i > 0; i--){
        salesTable.deleteRow(i);
    }
// alert(1);
    renderAllLocations();
// alert(2);
    calculateTotalAndRenderIt();

    salesForm.reset();
    
}

salesForm.addEventListener('submit', handleLocationSubmit);




//creat Location instance
allStores.push(new Store('1st and Pike',23, 65, 6.3)); 
allStores.push(new Store('SeaTac Airport',3, 24, 1.2));
allStores.push(new Store('Seattle Center',11, 38, 3.7));
allStores.push(new Store('Capitol Hill',20, 38, 2.3));
allStores.push(new Store('Alki',2, 16, 4.6));


makeHeaderRow();
generateDataForAllStoresAndRender();
calculateTotalAndRenderIt();


