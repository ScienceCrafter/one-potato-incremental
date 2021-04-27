
var achievements = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var play_time = 0

function incrementPlayTime() {
  play_time += 1
  setTimeout(incrementPlayTime,1000)
  if (play_time > 3600) {
    awardAchievement(7,0)
    if (play_time > 72000) {
      awardAchievement(7,1)
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
  }
}
