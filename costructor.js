'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var allStores = [];
var table = document.getElementById('table');

function Store(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.hourlySales = [];
  this.dailyTotal = 0;
  allStores.push(this);
}

Store.prototype.getrandomNumber = function () {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
};

Store.prototype.calculateHourlySales = function () {
  // console.log(this.getrandomNumber());
  for (var i = 0; i < hours.length; i++) {
    var calcSalesRound = Math.ceil(this.getrandomNumber() * this.avg);
    this.hourlySales[i] = calcSalesRound;
    this.dailyTotal += calcSalesRound;
  }
};

//Form
var storeForm = document.getElementById('addStore');
storeForm.addEventListener('submit',

  function handleSubmit(event) {
    event.preventDefault();
    var name = event.target.name.value;
    var min = event.target.min.value;
    var max = event.target.max.value;
    var avg = event.target.avg.value;

    new Store(name, min, max, avg);
    table.innerHTML = '';
    renderAll();

  }
);

Store.prototype.renderRow = function () {
  this.calculateHourlySales();
  var trElement = document.createElement('tr');
  table.appendChild(trElement);

  var thElement = document.createElement('th');
  thElement.textContent = this.name;
  trElement.appendChild(thElement);

  for (var i = 0; i < hours.length; i++) {
    var tdElement = document.createElement('td');
    tdElement.textContent = this.hourlySales[i];
    trElement.appendChild(tdElement);
  }
  tdElement = document.createElement('td');
  tdElement.textContent = this.dailyTotal;
  trElement.appendChild(tdElement);
};

//Header
function renderHeader() {
  var trElement = document.createElement('tr');
  table.appendChild(trElement);

  var thElement = document.createElement('th');
  thElement.textContent = ('name');
  trElement.appendChild(thElement);

  for (var i = 0; i < hours.length; i++) {
    var tdElement = document.createElement('td');
    tdElement.textContent = hours[i];
    trElement.appendChild(tdElement);
  }
  tdElement = document.createElement('td');
  tdElement.textContent = ('total');
  trElement.appendChild(tdElement);
}

//store totals/footer
function calculateStoresTotal() {
  var storesTotal = 0;
  var Total = 0;
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = 'Final total:';
  trElement.appendChild(thElement);

  for (var i = 0; i < hours.length; i++) {
    storesTotal = 0;
    for (var j = 0; j < allStores.length; j++) {
      storesTotal += allStores[j].hourlySales[i];
      Total += allStores[j].hourlySales[i];
    }
    thElement = document.createElement('th');
    thElement.textContent = storesTotal;
    trElement.appendChild(thElement);
  }
  thElement = document.createElement('th');
  thElement.textContent = Total;
  trElement.appendChild(thElement);
  table.appendChild(trElement);
}

new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);

function renderAll() {
  renderHeader();
  for (var i = 0; i < allStores.length; i++) {
    allStores[i].renderRow();
  }
  calculateStoresTotal();
}

renderAll();




