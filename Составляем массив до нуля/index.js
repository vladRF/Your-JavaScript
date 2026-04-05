function getArr(num) {
    let finArr = [];
    for (let i = 0; i <= num; i++) {
        if (i % 3 === 0) {
            finArr.unshift(i)
        }
    }
    console.log(finArr)
}

getArr(22)