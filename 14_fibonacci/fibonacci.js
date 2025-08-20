const fibonacci = function(num) {
    num = +num
    if (num < 0) {
        return "OOPS"
    }

    if (num == 0) {
        return 0
    }

    let seq = [1,1]

    while (seq.length < num) {
        seq.push(seq.at(-1)+seq.at(-2))
    }

    return seq.at(num-1)

};

// Do not edit below this line
module.exports = fibonacci;
