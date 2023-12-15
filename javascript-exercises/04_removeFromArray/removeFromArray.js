const removeFromArray = function(array, ...args) {
    const myArray = [];

    array.forEach((x) => {
        if (!args.includes(x)) {
            myArray.push(x);
        }
    })

    console.log(myArray);
    return myArray;
};

removeFromArray([1, 2, 3, 4, 5, 6, 7], 1);

// Do not edit below this line
module.exports = removeFromArray;
