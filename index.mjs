export const getAge =  (birthyear, currentYear) => currentYear - birthyear;

export const getAgeGroup = (age) => {
    if(age < 4)
        return "toddler";
    if(age >= 4 && age < 13)
        return "kid";
    if (age >= 13 && age < 20)
        return "teenager";
    if (age >= 20 && age < 40)
        return "adult";
    return "old";
};