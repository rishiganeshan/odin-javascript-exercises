const palindromes = function (s) {
    s = s.toLowerCase()
    let stringCode = []

    // console.log(s)
 
    for (let i = 0; i < s.length; i++) {
        let code = s.charCodeAt(i);
        // console.log(code)
        if ((code >= 97 && code <= 122) || (code > 47 && code < 58)) {
            // console.log("nice")
            stringCode.push(code)
        }
    }

    console.log(stringCode)

    let l = 0
    let r = stringCode.length-1


    while (l < r) {
        if (stringCode[l] !== stringCode[r]) {
            return false
        }
        l++
        r--

    }

    return true


};

// Do not edit below this line
module.exports = palindromes;
