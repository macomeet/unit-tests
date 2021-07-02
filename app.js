// 1. Check if numbers are adding correctly
const sum = (num1, num2) => {
    return num1 + num2
}
export {sum}

// 2. Check if a created number is in the range between of given numbers
const numberBetweenTwoValues = (min, max) => {
    return Math.floor(Math.random() * (max - min) ) + min;
}

export {numberBetweenTwoValues}

// 3. Create a new instance of Person class, write tests for methods
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
        this.id = Math.random(Date.now())
    }

    get getName() {
        return this.name
    }

    get getAge() {
        return this.id
    }

    get getId() {
        return this.id
    }

    squareRootOfAge() {
        return Math.sqrt(this.age);
    }
}

export {Person}
 

// 4. Check if the function returns true when the city is found and false for isn't found
const checkIfCityIsInDatabase = (data) => {
    const arr = ['Swarzedz', 'Poznan', 'Gdansk', 'Krakow', 'Bydgoszcz - Perla polnocy'];

    return arr.find(city => city === data);
}

export {checkIfCityIsInDatabase}


/* 5. According to TDD methodology create a simple class that will create a person with a name, surname, age, profession, and animals. 
Using methods you will able to display desired date, add or delete animal or change profession */
