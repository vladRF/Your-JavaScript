function fullarr(x) {
    let arr = [];
    for (let i = 0; i < x; i++) {

        if (i % 2 === 0) {
            arr.push('.')
        } else {
            arr.push('#')
        }
    }
    console.log(arr)
}




fullarr(3)