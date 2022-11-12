const formatDate = (date) => {
    let timeDifference = new Date() - date;
    if (timeDifference < 1000) {
        return 'right now';
    }
    let differenceInSecond = Math.floor(timeDifference / 1000);
    if (differenceInSecond < 60) {
        return differenceInSecond + ' sec. ago';
    }
    let differenceInMinute = Math.floor(timeDifference / 60000);
    if (differenceInMinute < 60) {
        return differenceInMinute + ' min. ago';
    }
    return `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth()+1).toString().padStart(2, "0")}.${date.getFullYear().toString().slice(-2)} ${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`
}

console.log(formatDate(new Date(new Date - 1)));
console.log(formatDate(new Date(new Date - 30 * 1000)));
console.log(formatDate(new Date(new Date - 5 * 60 * 1000)));
console.log(formatDate(new Date(new Date - 86400 * 1000)));