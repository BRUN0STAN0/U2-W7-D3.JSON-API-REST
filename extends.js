class Animal {
    constructor(legs) {
        this.legs = legs
    }

    walk() {
        console.log(`This animal has ${this.legs} legs and it's walking`)
    }
}

let animal4Legs = new Animal(4)

animal4Legs.walk()

class Dog extends Animal {
    constructor() {
        super(4)
    }

    bark() {
        console.log("Bau bau!")
    }

    walk() {
        super.walk()
        console.log("This animal is a dog!!!")
    }
}

let dog = new Dog()

dog.walk()
dog.bark()