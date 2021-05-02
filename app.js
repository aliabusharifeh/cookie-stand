'use strict'
var hours = ["10am ", "11am ", "12pm ", "1pm ", "2pm ", "3pm ", "4pm ", "5pm "];
var stores = [];
var update = document.getElementById('update');

function CookieStand(storeLocation, minCustHr, maxCustHr, avgCookiesPerCust) {

	this.storeLocation= storeLocation
	this.minCustHr= minCustHr;
	this.maxCustHr= maxCustHr;
	this.avgCookiesPerCust= avgCookiesPerCust;
	this.hourlySales= [];
	this.totalCookies= 0;
	stores.push(this);

	this.calcRand = function() {
		return (Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
	};

	this.calcCookiesPerHr= function() {
		for (var i=0; i < hours.length; i++) {
		this.hourlySales.push(Math.floor(this.calcRand() * this.avgCookiesPerCust));
		this.totalCookies += this.hourlySales[i];
		}
	};

	this.makeList= function() {

		var table = document.getElementById('CookieTable')
		this.calcCookiesPerHr();
		var tr = document.createElement('tr');
		var storeName = document.createElement('th');
		storeName.textContent = this.storeLocation;
		tr.appendChild(storeName);
		for (var i=0; i < hours.length; i++){
			var td = document.createElement('td');
			td.textContent = this.hourlySales[i];
			tr.appendChild(td);
			}
		var dailyCookies = document.createElement('td');
		dailyCookies.textContent = this.totalCookies;
		tr.appendChild(dailyCookies);

		table.appendChild(tr);
	};

};