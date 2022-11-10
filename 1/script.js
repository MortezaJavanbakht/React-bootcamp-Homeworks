const arr = [1, 2, 3, 2, 1];

const isMaghloob = inputArray => {
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray.at(i) !== inputArray.at(-1 - i)) return false;
    }
    return true;
}

console.log(isMaghloob(arr))
