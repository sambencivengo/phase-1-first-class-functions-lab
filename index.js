// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

//1
const returnFirstTwoDrivers = function(array){
    const firstTwo = array.slice(0,2);
    // console.log(array.slice(0,2));
    return firstTwo;
}

returnFirstTwoDrivers(drivers);
//2

const returnLastTwoDrivers = function(array){
    const lastTwo = array.slice(Math.max(array.length - 2, 1));
    // console.log(array.slice(Math.max(array.length - 2, 1)))
    return lastTwo;
}

returnLastTwoDrivers(drivers);
//3

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
selectingDrivers;

//4 
function createFareMultiplier (num) {
    const multiplier = fare => fare*num;
    return multiplier;
}

//5
const fareDoubler = createFareMultiplier(2);
console.log(fareDoubler(30));

//6
const fareTripler = createFareMultiplier(3);
console.log(fareTripler(30));

//7
function selectDifferentDrivers(array, func) {
    return func(array);
}

