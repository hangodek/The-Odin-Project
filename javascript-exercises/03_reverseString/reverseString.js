const reverseString = function(word) {
    let temp = String(word);
    temp = temp.split('');

    let joinWord = '';

    for (let i = temp.length - 1; i >= 0; i--) {
        joinWord = joinWord.concat(temp[i]);
    }

    console.log(joinWord);
    return joinWord;
};

reverseString('hello');

// Do not edit below this line
module.exports = reverseString;
