


// Create an Animal class
class Animal {
    constructor (name, type, numOfFeet, isDomestic, size) {
        this.name = name;
        this.type = type;
        this.numOfFeet = numOfFeet;
        this.isDomestic = isDomestic;
        this.size = size;
    }
    // deine a method that check the isDomestic property and logs if animal can be pet or not
    canBePet () {
        this.isDomestic ? console.log('Yes this animal can be pet.'): console.log('No this animal can not be pet.')
    }
    fight(otherAnimal){
        // size of cat this.size
        // size of hawk otherAnimal.size

        this.size > otherAnimal.size ? console.log(`The winner is: ${this.type}`) : console.log(`The winner is ${otherAnimal.type}`)
    }
}
let dog = new Animal('bob', 'dog', 4, true, 3);
let lion = new Animal('steve', 'lion', 4, false, 5);
let hawk = new Animal('nancy', 'hawk', 2, false, 1);
let cat = new Animal('jim', 'cat', 4, true, 2);
let snake = new Animal('leo', 'snake', 0, false, 2);
dog.canBePet() // logs Yes this animal can be pet.
lion.canBePet() // logs No this animal can not be pet.


cat.fight(lion)


// hawk.fight(cat)