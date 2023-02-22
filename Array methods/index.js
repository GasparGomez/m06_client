function doubleValues(arr) {
    return arr.map((value, index, array) => {
        return value * 2
    })
}

console.log("doubleValuesMap " + doubleValues([1, 2, 3]))
console.log("doubleValuesMap " + doubleValues([-1, -2, -3]))

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr) {

}

console.log("extractFullNameMap " + extractFullName([]))


function doubleOddNumbers(arr) {
    return arr.filter((value, index, array) => {
        return value % 2 != 0
    }).map((value, index, array) => {
        return value * 2
    })
}

console.log("doubleOddNumbers " + doubleOddNumbers([1, 2, 3, 4, 5])) // [2,6,10]
console.log("doubleOddNumbers " + doubleOddNumbers([4, 4, 4, 4, 4])) // []

/*

Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

*/



function vowelCount(str) {



}

vowelCount('Elie') // {e:2,i:1};

vowelCount('Tim') // {i:1};

vowelCount('Matt') // {a:1})

vowelCount('hmmm') // {};

vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};