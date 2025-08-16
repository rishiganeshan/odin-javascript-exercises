const removeFromArray = function(arr,...values) {


    for (const value of values) {
        // console.log(value)
        let index = arr.lastIndexOf(value);
        while (index !== -1) {
            arr.splice(index,1);
            index = arr.lastIndexOf(value);

        }
        
    }
    return arr

};



// Do not edit below this line
module.exports = removeFromArray;
