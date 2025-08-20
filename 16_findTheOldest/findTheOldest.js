const findTheOldest = function(people) {

    let oldestAge = 0
    

    return people.reduce((oldestPerson, currentPerson) => {
        let yearOfDeath = currentPerson.yearOfDeath || 2025
        let age = ((currentPerson.yearOfDeath || 2025) - 
            currentPerson.yearOfBirth)
        if (age > oldestAge) {
            oldestAge = age
            oldestPerson = currentPerson
        }
        return oldestPerson


    },null)


};

// Do not edit below this line
module.exports = findTheOldest;
