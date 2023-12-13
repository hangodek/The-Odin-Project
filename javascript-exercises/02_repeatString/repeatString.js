const repeatString = function(word, num) {
    let temp = '';

    if (num > 0) {
        for (let i = 0; i < num; i++) {
            temp += word;
        }
    } else if (num < 0) {
        return 'ERROR';
    }
    
    return temp;
};

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
