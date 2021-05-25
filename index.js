const returnFirstTwoDrivers = driverArray => {
    const firstTwoDrivers = driverArray.slice(0,2);
    return firstTwoDrivers;
}

const returnLastTwoDrivers = driverArray => {
    const lastTwoDrivers = [driverArray[driverArray.length-2], driverArray[driverArray.length-1]];
    return lastTwoDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(x) {
    return (fare) => {return (fare * x);}
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (driverArray, fxn) => {
    return fxn(driverArray);
}