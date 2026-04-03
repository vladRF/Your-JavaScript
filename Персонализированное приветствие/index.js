function greetUser(name) {
  if (name === "Павел" || name === "Олег") {
    console.log(`Привет, ${name}, вам доступны функции администратора.`);
  } else {
    console.log(`Здравствуйте, ${name}.`);
  }
}


greetUser("Олег");