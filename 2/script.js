let arr = [5, 3, 8, 1]
let filtered = filterRange(arr, 1, 4)
console.log(filtered)
console.log(arr)

function filterRange(inputArray, downRange, upRange) {
    return inputArray.filter(value => downRange <= value && value <= upRange);
}