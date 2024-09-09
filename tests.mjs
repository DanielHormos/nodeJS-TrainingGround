import assert from "assert";
import { getAge, getAgeGroup } from "./index.mjs";

describe("age calculator", () => {
  it("someone born 1972 is 50 2022", () => {
    // act
    const result = getAge(1972, 2022);

    // assert
    assert.equal(result, 50);
  });

  it("someone born in 2021 is 1 year old in year 2022", () => {
    const result = getAge(2021, 2022);

    assert.equal(result, 1);
  })

  it("Someone born 2000 is now 24 in the year 2024 if they had their birthday already", () => {
    const result = getAge(2000, 2024);
    assert.equal(result, 24);
  })
});

describe("age classifier", () => {
  it("less than 0 years old isn't born", () => {
    const result = getAgeGroup(-1);
    assert.equal(result, "Not born")
  })
  it("0-3 years old should be a toddler", () => {
    const result = getAgeGroup(0);
    assert.equal(result, "toddler");
  })
  it("4-12 years old should be a kid", () => {
    const result = getAgeGroup(4);
    assert.equal(result, "kid");
  });
  it("13-19 years old should be a teenager", () => {
    const result = getAgeGroup(13);
    assert.equal(result, "teenager")
  });
  it("20-39 should be a adult", () => {
    const result = getAgeGroup(38);

    assert.equal(result, "adult");
  });
  it("above 39 years old ... you are just old", () => {
    const result = getAgeGroup(40);

    assert.equal(result, "old");
  });
  it("But 50 - that is prime age, my friend. Prime. Age.", () => {
    const result = getAgeGroup(50);
    assert.equal(result, "prime")
  })
});

describe("constants and variables", () => {
  it.skip("You can't change a const variable", () => {
    const aNumber = 1;
    aNumber = 2;
  });
  it("you can change a let variable", () => {
    let aNumber = 1;
    aNumber = 2;
    assert.equal(aNumber, 2);
  });
  it("uninitialized variables are undefined", () => {
    let aNumber;

    assert.equal("undefined", typeof aNumber);
    assert.equal(undefined, aNumber);
  })
  it("null should be used for not set", () => {
    const peekIntoTheBox = () => {
      return false;
    };

    let isCatAlive = null;

    assert.equal(null, isCatAlive);
    isCatAlive = peekIntoTheBox();
  })
  it("array keep values", () => {
    const array1 = [1,2,3,4];
    const array2 = ["Marcus", "Daniel", "Jean"];
    const array3 = ["Marcus", 49, true];
  });
  it("getting elements out of arrays", () => {
    const names = ["Marcus", "Daniel", "Jean"];
    const firstElement = names[0];
    const secondElement = names[1];

    const length = names.length;
    const lastElement = names[names.length-1];

    assert.equal(firstElement, "Marcus");
    assert.equal(secondElement, "Daniel");
    assert.equal(lastElement, "Jean");
    assert.equal(length, 3);
  })
});

describe("loops does things over and over", () => {
  it("while loops just keeps going ...", () => {
    let counter = 0;
    while(counter < 2){
      console.log(`'Counter is now '${counter}`);
      counter++;
    }
  });
  it("loop through an array with while", () => {
    let index = 0;
    const names = ["Peter", "Pater", "Poter"];

    while (index < names.length){
      console.log(`Index is now '${index}'`);
      console.log(`Current element is '${names[index]}'`)
      index ++;
    }
  })
  it("loop through an array with for", () => {
    const names = ["Marcus", "Daniel", "Jean"];

    for(let i = 0; i < names.length; i++) {
      console.log(`Current index is '${i}'`);
      console.log(`Current element is '${names[i]}'`);
    }
  })
  it("calling getAge for each age", () => {
    const currentYear = 2024;
    const birthYears = [1963, 2005, 1998];

    for(let i = 0; i < birthYears.length; i++){
      const age = getAge(birthYears[i], currentYear);
      console.log(`If you are born in ${birthYears[i]} you are ${age} in ${currentYear}`);
    }
  })
  it("adding elements to array with push", () => {
    const names = ["Marcus", "Daniel", "Ali"];
    assert.equal(names.length, 3);

    names.push("Artin");
    console.log(names[3])
    assert.equal(names.length, 4);
    assert.equal(names[3], "Artin");
  })
})