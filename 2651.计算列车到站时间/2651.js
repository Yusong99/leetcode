/**
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
var findDelayedArrivalTime = function (arrivalTime, delayedTime) {
    let num = arrivalTime + delayedTime;
    if(num >= 24) num = num % 24
    return num
};