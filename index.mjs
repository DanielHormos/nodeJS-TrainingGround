export const getAge =  (birthYear, currentYear) => currentYear - birthYear

export const getAgeForPerson = (person, currentYear) => currentYear - person.birth

export const divide = (number1, number2) => number1/number2  

export const addWithLog = (number1, number2, logger) => {
    logger(`About to '${number1} + ${number2}'`)
    return number1+number2
}

export const getAgeGroup = (age) => {
    if(age < 0)     return "Not born"
    if(age < 4)     return "toddler"
    if(age < 13)    return "kid"
    if(age < 20)    return "teenager"
    if(age < 40)    return "adult"
    if(age === 50)   return "prime"

    return "old"
}