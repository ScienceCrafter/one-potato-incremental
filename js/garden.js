
var colors = ["#f00","#f80","#ff0","#0f0","#0ff","#00f","#f0f","#f00","#f80"]
var potato_planted = false
var growth_progress = 0
var auto_grow = undefined
var potato_stage = 1
var potato_stages = [
  "<img src='sprites/seeds.png'></img>",
  "<img src='sprites/potato1.png'></img>", // terrible potato
  "<img src='sprites/potato2.png'></img>", // pale potato
  "<img src='sprites/potato3.png'></img>", // meh potato
  "<img src='sprites/potato4.png'></img>", // robust potato
  "<img src='sprites/potato5.png'></img>", // hearty potato
  "<img src='sprites/potato6.png'></img>", // smooth potato
  "<img src='sprites/potato7.png'></img>", // blue potato
  "<img src='sprites/potato8.png'></img>"] // 8bit potato
var potato_stage_text = [
  "Seeds",
  "Terrible Potato",
  "Pale Potato",
  "Meh Potato",
  "Robust Potato",
  "Hearty Potato",
  "Smooth Potato",
  "Blue Potato",
  "8bit Potato"
]
var potato_stage_requirements = [100,500,3000,5000,20000,100000,500000,2560000]

function updatePlotText() {
  if (potato_planted == false) {
    document.getElementById("plot").innerHTML = ""
    document.getElementById("plot_info").innerHTML = "No potato is growing here"
    document.getElementById("plot_progress_bar_bar").style.width = "0%"
  } else {
    document.getElementById("plot").innerHTML = potato_stages[potato_stage]
    document.getElementById("plot_info").innerHTML = growth_progress + "/" + potato_stage_requirements[potato_stage] + "<br>Currently Tier " + potato_stage + " (" + potato_stage_text[potato_stage] + ")"
    if (potato_stage != max_potato_tier) {
      document.getElementById("plot_progress_bar_bar").style.width = 1+(growth_progress/potato_stage_requirements[potato_stage])*99 + "%"
    } else {
      document.getElementById("plot_progress_bar_bar").style.width = "100%"
      document.getElementById("plot_progress_bar_bar").style.background = colors[potato_stage-1]
      document.getElementById("plot_info").innerHTML = potato_stage_requirements[potato_stage-1] + "/" + potato_stage_requirements[potato_stage-1] + "<br>Currently Tier " + potato_stage + " (" + potato_stage_text[potato_stage] + ")"
    }
  }

}


function autoGrow() {
  growth_progress += 1 + speed_upgrade_level
  if (growth_progress < potato_stage_requirements[potato_stage]) {
    auto_grow = setTimeout(autoGrow, 100 * (0.8**fertilizer_level))
  } else {
    potato_stage += 1
    document.getElementById("plot_progress_bar_vessel").style.background = colors[potato_stage - 1]
    document.getElementById("plot_progress_bar_bar").style.background = colors[potato_stage]
    if (potato_stage != max_potato_tier) {
      growth_progress = 0
      auto_grow = setTimeout(autoGrow, 100 * (0.8**fertilizer_level))
    } else {
      if (document.getElementById("harvest_auto").checked) {
        harvest()
      }
    }
  }
  updatePlotText()
}


function plant() {
  if (potato_planted == true || seeds == 0 || have_potato) {
    return
  }
  seeds -= 1
  updateSeedsText()
  potato_planted = true
  potato_stage = 0
  setTimeout(autoGrow, 100)
}

function harvest() {
  if (potato_stage == 0 || !potato_planted) {
    return
  }
  clearInterval(auto_grow)
  growth_progress = 0
  potato_planted = false
  updatePlotText()
  have_potato = true
  if (document.getElementById("make_seeds_auto").checked) {
    makeSeeds()
  }
  updatePotatoText()
  document.getElementById("plot_progress_bar_vessel").style.background = "#888"
  document.getElementById("plot_progress_bar_bar").style.background = "#f00"
}
