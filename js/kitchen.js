
var food_type
var auto_food_selected = ""
var food_tier = 0
var fry_bonus = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

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
  document.getElementById("eat_food").innerHTML = "Eat It ["+potato_stage_requirements[food_tier-1]+"/1]<br>(-1% growth time for tier " + food_tier + ")"
  awardAchievement(5,1)
}

function makeFries() {
  if (have_potato == false || seeds == 0) {
    return
  }
  food_type = "fries"
  food_tier = potato_tier
  have_potato = false
  updatePotatoText()
  document.getElementById("plate").innerHTML = "<img src='sprites/fries.png' style='height:100px;width:100px;'></img>"
  document.getElementById("food_info").innerHTML = "Fries, Tier " + food_tier
  document.getElementById("food_options").style.display = "block"
  document.getElementById("eat_food").innerHTML = "Eat Them<br>(+1% coins from food)<br>["+fry_bonus[food_tier]+"/100]"
  awardAchievement(1,2)
}

function makeChips() {
  if (have_potato == false || seeds == 0) {
    return
  }
  food_type = "chips"
  food_tier = potato_tier
  have_potato = false
  updatePotatoText()
  document.getElementById("plate").innerHTML = "<img src='sprites/chips.png' style='height:100px;width:100px;'></img>"
  document.getElementById("food_info").innerHTML = "Chips, Tier " + food_tier
  document.getElementById("food_options").style.display = "block"
  document.getElementById("eat_food").innerHTML = "Eat Them<br>(" + 8**(food_tier-1) + " coins/min)"
  awardAchievement(4,2)
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
      potato_stage_requirements[food_tier - 1] -= (Math.floor(1 + (potato_stage_requirements[food_tier - 1]/100)))*baked_potato_boost[food_tier - 1]
      if (food_tier == 8) {
        awardAchievement(6,1)
      }
      if (potato_stage_requirements[food_tier - 1] < 1) {
        potato_stage_requirements[food_tier - 1] = 1
      }
      removeFood()
      }
  } else if (food_type == "fries") {
    if (fry_bonus[food_tier] != 100) {
      if (fry_bonus[food_tier] == undefined) {
        fry_bonus[food_tier] = 1
      } else {
        fry_bonus[food_tier] += 1
      }
      removeFood()
    }
  } else if (food_type == "chips") {
    coins_per_second += (8**(food_tier-1)) / 60
    removeFood()
  }
}

function sellFood() {
  var fry_multiplier = 1
  for (i=0; i<fry_bonus.length; i++) {
    fry_multiplier *= 1+(fry_bonus[i]/100)
  }
  coins += 2*8**(food_tier-1)*fry_multiplier
  updateCoinsText()
  removeFood()
}
