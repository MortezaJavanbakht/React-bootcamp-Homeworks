let arr = [5, 3, 8, 1]
let filtered = filterRangeInPlace(arr, 1, 4)
console.log(arr)

function filterRangeInPlace(inputArray, downRange, upRange) {
    for (let i = 0; i < inputArray.length; i++) {
        if (!(downRange <= inputArray[i] && inputArray[i] <= upRange)) inputArray.splice(i, 1);
    }
    return inputArray;
}