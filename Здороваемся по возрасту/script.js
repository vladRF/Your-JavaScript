const age = Number(prompt("Введите возраст"))

if (age >= 0 && age < 18){
    alert("Привет:)")
}else if(age >=18 && age < 50){
    alert("Зравствуйте")
}else if(age >= 50 && age < 100){
    alert("Почтенный возраст")

}else{
    alert("А столько живут?")
}