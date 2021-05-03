'use strict';
// the hours array [working times for the franchises ]
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


// random function
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const seattle = {
    locationName: 'Seattle',
    minCustomers: 23,
    maxCustomers: 65,
    avgCookies: 6.3,
    customersEachHour: [],
    cookiesEachHour: [],
    total: 0,

    // calculate a random number of customers every hour
    calcCustomersEachHour: function() {
        for (let i = 0; i < hours.length; i++) {

            // this.customersEachHour[i] = (random(this.minCustomers, this.maxCustomers));
            this.customersEachHour.push(random(this.minCustomers, this.maxCustomers));
        }
    },
    calcCookiesEachHour: function() {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookies));
            //    the total
            this.total += this.cookiesEachHour[i];
        }

    },
    renderFunction: function() {
        // get the parent element
        let theParent = document.getElementById('parent');
        console.log(theParent);
        let shopName = document.createElement('h2');

        theParent.appendChild(shopName);
        // give it a text content
        shopName.textContent = this.locationName;

        // create new element UL
        let unorderedList = document.createElement('ul');
        theParent.appendChild(unorderedList);

        // creating li items
        for (let i = 0; i < hours.length; i++) {
            let listItem = document.createElement('li');
            unorderedList.appendChild(listItem);
            // 6am: 16 cookies
            listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies.`

        }
        // create element for the total
        let totalItem = document.createElement('li');
        unorderedList.appendChild(totalItem);
        totalItem.textContent = `Total: ${this.total} cookies`
    }
}

console.log(seattle);
seattle.calcCustomersEachHour();
seattle.calcCookiesEachHour();
seattle.renderFunction();



const tokyo = {
    locationName: 'Tokyo',
    minCustomers: 3,
    maxCustomers: 24,
    avgCookies: 1.2,
    customersEachHour: [],
    cookiesEachHour: [],
    total: 0,

    // calculate a random number of customers every hour
    calcCustomersEachHour: function() {
        for (let i = 0; i < hours.length; i++) {

            // this.customersEachHour[i] = (random(this.minCustomers, this.maxCustomers));
            this.customersEachHour.push(random(this.minCustomers, this.maxCustomers));
        }
    },
    calcCookiesEachHour: function() {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookies));
            //    the total
            this.total += this.cookiesEachHour[i];
        }

    },
    renderFunction: function() {
        // get the parent element
        let theParent = document.getElementById('parent');
        console.log(theParent);
        let shopName = document.createElement('h2');

        theParent.appendChild(shopName);
        // give it a text content
        shopName.textContent = this.locationName;

        // create new element UL
        let unorderedList = document.createElement('ul');
        theParent.appendChild(unorderedList);

        // creating li items
        for (let i = 0; i < hours.length; i++) {
            let listItem = document.createElement('li');
            unorderedList.appendChild(listItem);
            // 6am: 16 cookies
            listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies.`

        }
        // create element for the total
        let totalItem = document.createElement('li');
        unorderedList.appendChild(totalItem);
        totalItem.textContent = `Total: ${this.total} cookies`
    }
}

tokyo.calcCustomersEachHour();
tokyo.calcCookiesEachHour();
tokyo.renderFunction();



const Dubai = {
    locationName: 'Dubai',
    minCustomers: 11,
    maxCustomers: 38,
    avgCookies: 3.7,
    customersEachHour: [],
    cookiesEachHour: [],
    total: 0,

    // calculate a random number of customers every hour
    calcCustomersEachHour: function() {
        for (let i = 0; i < hours.length; i++) {

            // this.customersEachHour[i] = (random(this.minCustomers, this.maxCustomers));
            this.customersEachHour.push(random(this.minCustomers, this.maxCustomers));
        }
    },
    calcCookiesEachHour: function() {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookies));
            //    the total
            this.total += this.cookiesEachHour[i];
        }

    },
    renderFunction: function() {
        // get the parent element
        let theParent = document.getElementById('parent');
        console.log(theParent);
        let shopName = document.createElement('h2');

        theParent.appendChild(shopName);
        // give it a text content
        shopName.textContent = this.locationName;

        // create new element UL
        let unorderedList = document.createElement('ul');
        theParent.appendChild(unorderedList);

        // creating li items
        for (let i = 0; i < hours.length; i++) {
            let listItem = document.createElement('li');
            unorderedList.appendChild(listItem);
            // 6am: 16 cookies
            listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies.`

        }
        // create element for the total
        let totalItem = document.createElement('li');
        unorderedList.appendChild(totalItem);
        totalItem.textContent = `Total: ${this.total} cookies`
    }
}

Dubai.calcCustomersEachHour();
Dubai.calcCookiesEachHour();
Dubai.renderFunction();




const Paris = {
    locationName: 'Paris',
    minCustomers: 20,
    maxCustomers: 38,
    avgCookies: 2.3,
    customersEachHour: [],
    cookiesEachHour: [],
    total: 0,

    // calculate a random number of customers every hour
    calcCustomersEachHour: function() {
        for (let i = 0; i < hours.length; i++) {

            // this.customersEachHour[i] = (random(this.minCustomers, this.maxCustomers));
            this.customersEachHour.push(random(this.minCustomers, this.maxCustomers));
        }
    },
    calcCookiesEachHour: function() {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookies));
            //    the total
            this.total += this.cookiesEachHour[i];
        }

    },
    renderFunction: function() {
        // get the parent element
        let theParent = document.getElementById('parent');
        console.log(theParent);
        let shopName = document.createElement('h2');

        theParent.appendChild(shopName);
        // give it a text content
        shopName.textContent = this.locationName;

        // create new element UL
        let unorderedList = document.createElement('ul');
        theParent.appendChild(unorderedList);

        // creating li items
        for (let i = 0; i < hours.length; i++) {
            let listItem = document.createElement('li');
            unorderedList.appendChild(listItem);
            // 6am: 16 cookies
            listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies.`

        }
        // create element for the total
        let totalItem = document.createElement('li');
        unorderedList.appendChild(totalItem);
        totalItem.textContent = `Total: ${this.total} cookies`
    }
}

Paris.calcCustomersEachHour();
Paris.calcCookiesEachHour();
Paris.renderFunction();








const Lima = {
    locationName: 'Lima',
    minCustomers: 3,
    maxCustomers: 24,
    avgCookies: 1.2,
    customersEachHour: [],
    cookiesEachHour: [],
    total: 0,

    // calculate a random number of customers every hour
    calcCustomersEachHour: function() {
        for (let i = 0; i < hours.length; i++) {

            // this.customersEachHour[i] = (random(this.minCustomers, this.maxCustomers));
            this.customersEachHour.push(random(this.minCustomers, this.maxCustomers));
        }
    },
    calcCookiesEachHour: function() {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookies));
            //    the total
            this.total += this.cookiesEachHour[i];
        }

    },
    renderFunction: function() {
        // get the parent element
        let theParent = document.getElementById('parent');
        console.log(theParent);
        let shopName = document.createElement('h2');

        theParent.appendChild(shopName);
        // give it a text content
        shopName.textContent = this.locationName;

        // create new element UL
        let unorderedList = document.createElement('ul');
        theParent.appendChild(unorderedList);

        // creating li items
        for (let i = 0; i < hours.length; i++) {
            let listItem = document.createElement('li');
            unorderedList.appendChild(listItem);
            // 6am: 16 cookies
            listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies.`

        }
        // create element for the total
        let totalItem = document.createElement('li');
        unorderedList.appendChild(totalItem);
        totalItem.textContent = `Total: ${this.total} cookies`
    }
}

Lima.calcCustomersEachHour();
Lima.calcCookiesEachHour();
Lima.renderFunction();