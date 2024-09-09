import assert from "assert"
import { getAge, getAgeGroup, getAgeForPerson, divide, addWithLog} from "./index.mjs"

describe("age calculator", () => {
  it("someone born 1972 is 50 2022", () => {
    // act
    const result = getAge(1972, 2022)

    // assert
    assert.equal(result, 50)
  })

  it("someone born in 2021 is 1 year old in year 2022", () => {
    const result = getAge(2021, 2022)

    assert.equal(result, 1)
  })

  it("Someone born 2000 is now 24 in the year 2024 if they had their birthday already", () => {
    const result = getAge(2000, 2024)
    assert.equal(result, 24)
  })
})

describe("age classifier", () => {
  it("less than 0 years old isn't born", () => {
    const result = getAgeGroup(-1)
    assert.equal(result, "Not born")
  })
  it("0-3 years old should be a toddler", () => {
    const result = getAgeGroup(0)
    assert.equal(result, "toddler")
  })
  it("4-12 years old should be a kid", () => {
    const result = getAgeGroup(4)
    assert.equal(result, "kid")
  })
  it("13-19 years old should be a teenager", () => {
    const result = getAgeGroup(13)
    assert.equal(result, "teenager")
  })
  it("20-39 should be a adult", () => {
    const result = getAgeGroup(38)

    assert.equal(result, "adult")
  })
  it("above 39 years old ... you are just old", () => {
    const result = getAgeGroup(40)

    assert.equal(result, "old")
  })
  it("But 50 - that is prime age, my friend. Prime. Age.", () => {
    const result = getAgeGroup(50)
    assert.equal(result, "prime")
  })
})

describe("constants and variables", () => {
  it.skip("You can't change a const variable", () => {
    const aNumber = 1
    aNumber = 2
  })
  it("you can change a let variable", () => {
    let aNumber = 1
    aNumber = 2
    assert.equal(aNumber, 2)
  })
  it("uninitialized variables are undefined", () => {
    let aNumber

    assert.equal("undefined", typeof aNumber)
    assert.equal(undefined, aNumber)
  })
  it("null should be used for not set", () => {
    const peekIntoTheBox = () => {
      return false
    }

    let isCatAlive = null

    assert.equal(null, isCatAlive)
    isCatAlive = peekIntoTheBox()
  })
  it("array keep values", () => {
    const array1 = [1,2,3,4]
    const array2 = ["Marcus", "Daniel", "Jean"]
    const array3 = ["Marcus", 49, true]
  })
  it("getting elements out of arrays", () => {
    const names = ["Marcus", "Daniel", "Jean"]
    const firstElement = names[0]
    const secondElement = names[1]

    const length = names.length
    const lastElement = names[names.length-1]

    assert.equal(firstElement, "Marcus")
    assert.equal(secondElement, "Daniel")
    assert.equal(lastElement, "Jean")
    assert.equal(length, 3)
  })
})

describe("loops does things over and over", () => {
  it("while loops just keeps going ...", () => {
    let counter = 0
    while(counter < 2){
      console.log(`'Counter is now '${counter}`)
      counter++
    }
  })
  it("loop through an array with while", () => {
    let index = 0
    const names = ["Peter", "Pater", "Poter"]

    while (index < names.length){
      console.log(`Index is now '${index}'`)
      console.log(`Current element is '${names[index]}'`)
      index ++
    }
  })
  it("loop through an array with for", () => {
    const names = ["Marcus", "Daniel", "Jean"]

    for(let i = 0; i < names.length; i++) {
      console.log(`Current index is '${i}'`)
      console.log(`Current element is '${names[i]}'`)
    }
  })
  it("calling getAge for each age", () => {
    const currentYear = 2024
    const birthYears = [1963, 2005, 1998]

    for(let i = 0; i < birthYears.length; i++){
      const age = getAge(birthYears[i], currentYear)
      console.log(`If you are born in ${birthYears[i]} you are ${age} in ${currentYear}`)
    }
  })
  it("adding elements to array with push", () => {
    const names = ["Marcus", "Daniel", "Ali"]
    assert.equal(names.length, 3)

    names.push("Artin")
    console.log(names[3])
    assert.equal(names.length, 4)
    assert.equal(names[3], "Artin")
  })
  it("removing element from array with pop", () => {
    const names = ["Marcus", "Peter", "Daniel", "Olle"]
    assert.equal(names.length, 4)

    names.pop()

    assert.equal(names.length, 3)
    assert.equal(names[3], undefined)
  })
  it("removing element from the beginning array using slice", () => {
    const names = ["Marcus", "Daniel", "Ali", "Arvid"]
    assert.equal(names.length, 4)

    names.splice(names.length - 1, 1)

    assert.equal(names.length, 3)
    assert.equal(names[3], undefined)
  })
  it("removing element from the beginning aray using slice", () => {
    const names = ["Marcus", "Daniel", "Arvin", "Jean"]
    assert.equal(names.length, 4)

    names.splice(0 , 1)

    assert.equal(names.length, 3)
    assert.equal(names[0], "Daniel")
  })
  it("adding elements to an immutable array", () => {
    const names = ["Marcus", "Eliza", "Obaid"]
    assert.equal(names.length, 3)
 
    const newNames = [...names, "Arvid"]

    assert.equal(names.length, 3)
    assert.equal(newNames.length, 4)
  })
  it("filter an array - mutable", () => {
    const numbers = [10, 23, 1, 33, 8, 12]

    for(let i = 0; i < numbers.length; i++){
      if(numbers[i] > 10){
        numbers.splice(i, 1)
      }
    }
    assert.equal(numbers.length, 3)
  })
  it("filter an array - immutable", () => {
    const numbers = [10, 23, 1, 33, 8, 12]

    const lowNumbers = numbers.filter((x) => x > 10)
    assert.equal(lowNumbers.length, 3)
  })
})

describe("objects are for building things", () => {
  it("our first object - a human", () => {
    const person = {
      name: "Marcus",
      birthYear: 1972,
      isTeacher: true,
    }
    assert.equal(person.name, "Marcus")
    assert.equal(person.birthYear, 1972)
    assert.equal(person.isTeacher, true)
  })
  it("get age for person", () => {
    const currentYear = 2024
    const person = {
      name: "Marcus",
      birth: 1972,
      isTeacher: true,
    }
    
    const age = getAgeForPerson(person, currentYear)

    assert.equal(age, 52)
  })
  it("Person with favorite film titles", () => {
    const person = {
      name: "Daniel",
      favouriteFilms: ["Titanic", "Fast & furious", "The hole"],
      age: 24
    }

    assert.equal(person.favouriteFilms[0], "Titanic")
    assert.equal(person.favouriteFilms[1], "Fast & furious")
    assert.equal(person.favouriteFilms.length, 3)
    assert.equal(person.favouriteFilms[person.favouriteFilms.length - 1], "The hole")
  })
  it("a person has a list of favourite movies with releaseYears", () => {
    const person = {
      name: "Daniel",
      favouriteMovies: [
        {
          title: "Green Book", 
          releaseYear: 2013
        },
        {
          title: "Gladiators",
          releaseYear: 2000
        },
        {
          title: "The Godfather",
          releaseYear: 1972
        }
      ]
    }

    assert.equal(person.favouriteMovies.length, 3)
    assert.equal(person.favouriteMovies[0].title, "Green Book")
    assert.equal(person.favouriteMovies[2].releaseYear, 1972)
  })
  it("Object in a object", () => {
    const students = {
      person: [
        {
          name: "Daniel",
          hobbies: ["Gaming", "Sports"]
        }
      ]
    }
    assert.equal(students.person[0].hobbies[0], "Gaming")
  })
})

describe("division", () => {
  it("4 divided with 0 should throw error", () => {
    try{
      const result = divide(4,0)
    }catch(error){
      assert.notEqual(error, undefined)
      assert.equal(
        error.message, "Please.. no division by zero"
      )
    }
  })
})

describe("callbacks", () => {
  it("adding with logger", () => {  
    const logThis2 = (message) => {
      console.log(message)
    } 

    const result = addWithLog(1, 89, logThis2)

    assert.equal(result, 90)
  })
  it("adding with inline logger", () => {
    const result = addWithLog(1, 89, (message) => {
      console.log(message)
    })

    assert.equal(result, 90)
  })
})