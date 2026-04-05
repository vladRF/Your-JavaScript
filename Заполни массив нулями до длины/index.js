function fillArrToLength(arr, length) {
    if (arr.length >= length) {
        console.log(arr)
    } else {
        let arr2 = arr;
        for (let i = arr2.length; i < length; i++) {
            arr2.push(0)
        }
        console.log(arr2)
    }
}

fillArrToLength([2, 6, 8, 3, 9], 4)