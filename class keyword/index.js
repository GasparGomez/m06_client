class Person {
    constructor(firstName, lastName, favoriteColor, favoriteNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.favoriteColor = favoriteColor;
        this.favoriteNumber = favoriteNumber;
    }
    multiplyFavoriteNumber(n) {
        this.favoriteNumber *= n
        return this.favoriteNumber
    }
}

var person = new Person("Elie", "Schoppik", "purple", 34)
console.log(person);

person.multiplyFavoriteNumber(10) // 340
console.log(person);