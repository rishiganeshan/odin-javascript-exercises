const sumAll = function(startNum, endNum) {
    if ( typeof startNum != "number" || typeof endNum != "number") {
        return 'ERROR'
    }
        
    if (startNum < 0 || endNum < 0) {

        return 'ERROR'
    }
    
    if (!Number.isInteger(startNum) || !Number.isInteger(endNum)) {

        return 'ERROR'
    }

    if (startNum > endNum) {
        let tmp = endNum
        endNum = startNum
        startNum  = tmp
    }


    let arr = []


    for (let i = startNum; i <= endNum; i++) {
        arr.push(i)
    }
    return arr.reduce((sum, curr) => sum + curr, 0)

};

// Do not edit below this line
module.exports = sumAll;
