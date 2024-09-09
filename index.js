function getAge(birthyear, currentYear){
    return currentYear - birthyear;
}

const age = getAge(1972, 2022);
console.log("The age would be " + age);

module.exports.getAge = getAge;

/*const number1 = 1;
const number2 = 2;
const result = number1 + number2

console.log("The answer is: " + result);*/