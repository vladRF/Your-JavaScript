function getNearestToMax(arr) {
    let arrMax = Math.max(...arr);
    let finalArr = [];
    for (let i of arr) {
        if (i > arrMax - (arrMax * 10 / 100) && i < arrMax || i < arrMax + (arrMax * 10 / 100) && i > arrMax) {
            finalArr.push(i);
        }

    }
    return finalArr
}


console.log(getNearestToMax([2, 13, 95, 29, 19, 5, -5]));