const sumAll = function(x, y) {
    if (x < 0 || y < 0) {
        return 'ERROR';
    }

    if (!Number.isInteger(x) || !Number.isInteger(y)) {
        return 'ERROR';
    }

    if (x > y) {
        let temp = x;
        x = y;
        y = temp;
    }

    let mySum = 0;

    for (let i = x; i <= y; i++) {
        mySum += i;
    }

    console.log(mySum);
    return mySum;
}


sumAll(2, 4);
// Do not edit below this line
module.exports = sumAll;
