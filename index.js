function getAge(birthyear, currentYear){
    return 30;
}

const age = getAge(1972, 2022);
console.log("The age would be " + age);

module.exports.getAge = getAge;