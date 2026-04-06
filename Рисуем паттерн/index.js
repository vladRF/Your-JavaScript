function printSquare(lines) {
    let finalLines = [];
    for (let i = 1; i <= lines; i++) {
        if (i === 1 || i === lines) {
            finalLines.push('# '.repeat(lines))
        } else {
            finalLines.push('# ' + ' '.repeat(lines) + ' #')
        }
    }
    console.log(finalLines.join('\n'))
}



printSquare(5);