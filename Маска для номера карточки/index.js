function maskCardNumber(num) {
  let lastFourDigits = String(num).slice(-4);
  console.log(`**** **** **** ${lastFourDigits}`);
}

maskCardNumber(9785983475983745);
