const getSecondsToday = () => {
    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return Math.floor((now - todayStart)/1000);
}

console.log(getSecondsToday());