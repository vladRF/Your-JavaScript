let robot = {
    plants: ["морковь", "помидор", "картофель",],
    waterLevel: 100,
}

robot.waterPlants = function () {
    if (this.waterLevel < this.plants.length * 10) {
        console.log("Не хватает воды, пополните бак!")
    } else {
        this.waterLevel = - this.plants.length * 10
        console.log("Все растения политы")
    }
}

robot.refillWater = function () {
    this.waterLevel = 100;
    console.log("Бак с водой пополнен")
}
