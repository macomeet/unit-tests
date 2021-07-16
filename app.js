// 1. Check if numbers are adding correctly
const sum = (num1, num2) => {
  return num1 + num2
}
export {sum}

// 2. Reverse a number
function reverseNumber(num) {
	return num.split("").reverse().join("");
}

export {reverseNumber}

// 3. Check if a created number is in the range between of given numbers
const numberBetweenTwoValues = (min, max) => {
  return Math.floor(Math.random() * (max - min) ) + min;
}

export {numberBetweenTwoValues}

// 4. Check two given numbers and return true if one of the number is 50 or if their sum is 50
function test50(x, y) {
  return ((x == 50 || y == 50) || (x + y == 50));
}

export {test50}

// 5. Check whether three given numbers are increasing in strict mode or in soft mode
function numbersOrder(x, y, z ) {
  if ( y > x && z > y)  {
    return "strict mode";    
  }
  else if(z > y) {
    return "Soft mode";
  }
  else {
    return undefined;
  }
}

export {numbersOrder}

// 6. Find the sum of squares of a numeric vector
function sumSq(array) {
  let sum = 0;
  let i = array.length;
  while (i--) 
    sum += Math.pow(array[i], 2);
  return sum;
}

export {sumSq}

// 7. Create a new instance of Person class, write tests for methods
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
 

// 8. Check if the function returns true when the city is found and false for isn't found
const checkIfCityIsInDatabase = (data) => {
  const arr = ['Swarzedz', 'Poznan', 'Gdansk', 'Krakow', 'Bydgoszcz - Perla polnocy'];

  return arr.find(city => city === data);
}

export {checkIfCityIsInDatabase}


/* 9. According to TDD methodology create a simple class that will create a person with a name, surname, age, profession, and animals. 
Using methods you will able to display desired date, add or delete animal or change profession */
