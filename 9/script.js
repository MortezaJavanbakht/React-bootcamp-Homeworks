const printNumberWithInterval = (from, to) => {
    let interval = setInterval(() => {
        console.log(from++)
        if(from>to) clearInterval(interval);
    }, 1000)
}

printNumberWithInterval(5,10)

const printNumberWithTimeout = (from, to) => {
    let timerID = setTimeout(function showNumber(){
        console.log(from++)
        if(from<=to) timerID = setTimeout(showNumber, 1000)
    }, 1000)
}

printNumberWithTimeout(5,10)