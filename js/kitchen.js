
var food_type
var food_tier = 0

function makeBakedPotato() {
  if (have_potato == false || seeds == 0) {
    return
  }
  food_type = "baked_potato"
  food_tier = potato_tier
  have_potato = false
  updatePotatoText()
  document.getElementById("plate").innerHTML = "<img src='sprites/baked_potato.png' style='height:100px;width:100px;'></img>"
  document.getElementById("food_info").innerHTML = "Baked Potato, Tier " + food_tier
  document.getElementById("food_options").style.display = "block"
  document.getElementById("eat_food").innerHTML = "Eat It<br>[-1% growth time for tier " + food_tier + "]"
  awardAchievement(5,1)
}

function removeFood() {
  food_type = "none"
  food_tier = 0
  document.getElementById("plate").innerHTML = ""
  document.getElementById("food_options").style.display = "none"
}

function eatFood() {
  if (food_type == "baked_potato") {
    if (potato_stage_requirements[food_tier - 1] > 1) {
      potato_stage_requirements[food_tier - 1] -= Math.floor(1 + (potato_stage_requirements[food_tier - 1]/100))
      if (food_tier == 8) {
        awardAchievement(6,1)
      }
      removeFood()
    } else {
      potato_stage_requirements[food_tier - 1] = 1
    }
  }
}

function sellFood() {
  if (food_type == "baked_potato") {
    coins += 2*8**(food_tier-1)
    updateCoinsText()
    removeFood()
  }
}
