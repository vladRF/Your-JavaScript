function getNearestToMax(arr) {
    let arrMax = Math.max(...arr);
    let finalArr = [];
    for (let i of arr) {
        if (i > arrMax - (arrMax * 10 / 100) && i < arrMax) {
            finalArr.push(i);
        }

    }
    return finalArr
}


console.log(getNearestToMax([5, 88, 95, 100, 77, 21, 92]));