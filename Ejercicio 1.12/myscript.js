const words = ['Environmental', 'Systems', 'Research', 'Institute'];

const largo = words.reduce((accumulator, currentValue) => {
    if (accumulator.length > currentValue.length) {
        return accumulator
    }
    else {
        return currentValue
    }
});

console.log ('La palabra mas larga es: ', largo);