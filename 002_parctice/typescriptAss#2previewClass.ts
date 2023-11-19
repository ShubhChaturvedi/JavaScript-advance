// assignment 2 preview class

// swap two values using generic function take two values and return an array of two values
// vlaues are either number or string or boolean

function swapToValues<T>(val1: T, val2: T): T[] {
    return [val2, val1]
}

const swappedValuesNumbers = swapToValues<number>(1, 2)
const swappedValuesStrings = swapToValues<string>('Chaturvedi', 'Shubh')
const swappedValuesBooleans = swapToValues<boolean>(true, false)

console.log(swappedValuesNumbers)
console.log(swappedValuesStrings)
console.log(swappedValuesBooleans)