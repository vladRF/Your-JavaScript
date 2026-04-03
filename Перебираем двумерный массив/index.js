let arr = [[-53, -2], [42, 9, 77], [0], [72, 4]];
let finalValue = 0;
for (const i in arr) {
  for (const j in arr[i]) {
    if (arr[i][j] > 0) {
      finalValue += arr[i][j];
    }
  }
}

console.log(finalValue);
