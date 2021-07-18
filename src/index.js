const elvenShieldRecipe = {
    leatherStrips: 2, 
    ironIngot: 1,
    refinedMoonstone: 4,
}

console.log(elvenShieldRecipe)

const elvenGaunletsRecipe = {
    ...elvenShieldRecipe, 
    leather: 1,
    refinedMoonstone: 1,
}

console.log(elvenGaunletsRecipe)