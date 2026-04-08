function cakes(recipe, ingredients) {
  let availableIngredients = [];
    let NumberIngredients = [];

    for (i in recipe) {
        if (ingredients.hasOwnProperty(i)) {
            availableIngredients.push(true)
        } else {
            availableIngredients.push(false)
        }
    }
    if (availableIngredients.includes(false)) {
        return 0
    } else {
        for (i in recipe) {
            if (ingredients.hasOwnProperty(i)) {
                NumberIngredients.push(Math.trunc(ingredients[i] / recipe[i]))
            }
        }
        return Math.min(...NumberIngredients)
    }
}