export function getDates() {
    let prevDate = new Date();
    const arr = [];

    for (let i = 0; i < 100; i++) {
        const newDate = new Date(prevDate.getTime());
        const random = Math.floor(Math.random() * 5) + 1;
        newDate.setHours(newDate.getHours() + random);
        arr.push(newDate);

        prevDate = newDate;
    }

    return arr;
}

export function getValues() {
    const arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(getRandomInt(i * 100));
    }

    return arr;
}

function getRandomInt(value: number) {
    return value * Math.random();
}