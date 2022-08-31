
var achievements = []
var play_time = 0

function incrementPlayTime() {
  play_time += 1
  if (coins_per_second) {
    coins += (coins_per_second * fry_multiplier)
    updateCoinsText()
  }
  setTimeout(incrementPlayTime,1000)
  if (play_time > 3600) {
    awardAchievement(7,0)
    if (play_time > 72000) {
      awardAchievement(7,1)
      if (play_time > 180000) {
        awardAchievement(5,2)
      }
    }
  }
}
incrementPlayTime()

function awardAchievement(x,y) {
  if (achievements[x+(8*y)] == 1) {
    return
  }
  achievements[x+(8*y)] = 1
  document.getElementById("achievement_"+x+"_"+y).style.background = "#8f8"
  if (active_tab != "achievement") {
    document.getElementById("achievement_tab_button").style["background-color"] = "#8f8"
  }
  if (x == 0 && y == 0) {
    document.getElementById("lab_tab_button").disabled = false
    document.getElementById("achievement_tab_button").disabled = false
  } else if (x == 2 && y == 0) {
    document.getElementById("shop_tab_button").disabled = false
    document.getElementById("sell_potato").style.display = "block"
  } else if (x == 3 && y == 0) {
    document.getElementById("kitchen_tab_button").disabled = false
  } else if (x == 4 && y == 0) {
    document.getElementById("potatopedia_tab_button").disabled = false
  } else if (x == 5 && y == 0) {
    document.getElementById("make_fries").disabled = false
  } else if (x == 6 && y == 0) {
    document.getElementById("prestige_tab_button").disabled = false
  } else if (x == 2 && y == 2) {
    document.getElementById("make_chips").disabled = false
    document.getElementById("auto_cook_3").classList.add("microwave_button");
    document.getElementById("auto_cook_3").innerHTML = "3";
    document.getElementById("auto_cook_3").disabled = false
  }
}
