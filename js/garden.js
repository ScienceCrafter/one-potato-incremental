
var colors = ["#f00","#f80","#ff0","#0f0","#0ff","#00f","#f0f","#f00","#f80","#ff0","#0f0","#0ff","#00f","#f0f","#f00","#f80","#ff0","#0f0","#0ff","#00f","#f0f","#f00","#f80"]
var potato_planted = false
var growth_progress = 0
var auto_plant
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
  "<img src='sprites/potato8.png'></img>", // 8bit potato
  "<img src='sprites/potato9.png'></img>", // error potato
  "<img src='sprites/potato10.png'></img>", // photorealistic potato
  "<img src='sprites/potato11.png'></img>", // antimatter potato
  "<img src='sprites/potato12.png'></img>", // shadow potato
  "<img src='sprites/potato13.png'></img>", // cookie potato
  "<img src='sprites/potato14.png'></img>", // fire potato
  "<img src='sprites/potato15.png'></img>", // ice potato
  "<img src='sprites/potato16.png'></img>"] // legendary potato
var potato_stage_text = [
  "Seeds",
  "Terrible Potato",
  "Pale Potato",
  "Meh Potato",
  "Robust Potato",
  "Hearty Potato",
  "Smooth Potato",
  "Blue Potato",
  "8bit Potato",
  "Error Potato",
  "Photorealistic Potato",
  "Antimatter Potato",
  "Shadow Potato",
  "Cookie Potato",
  "Fire Potato",
  "Ice Potato",
  "Legendary Potato"
]
var potato_stage_requirements = [100,600,3000,5000,20000,100000,500000,2560000,5000000,20000000,1e+9,5e+11,1e+15,1e+19,1e+22,1e+27]

function updatePlotText() {
  if (potato_planted == false) {
    document.getElementById("plot").innerHTML = ""
    document.getElementById("plot_info").innerHTML = "<br>No potato is growing here"
    document.getElementById("plot_progress_bar_bar").style.width = "0%"
  } else {
    document.getElementById("plot").innerHTML = potato_stages[potato_stage]
    document.getElementById("plot_info").innerHTML = numberFormat(growth_progress,0,1) + "/" + numberFormat(potato_stage_requirements[potato_stage]) + "<br>Currently Tier " + potato_stage + " (" + (potato_stage_text[potato_stage] || "ERROR 404 POTATO NOT FOUND") + ")"
    document.getElementById("time_to_grow").innerHTML = Math.floor(growth_progress/((1 + speed_upgrade_level) * (mashed_potatoes + 1)) * (100 * (0.8**fertilizer_level)) / 1000) + " / " + Math.floor((potato_stage_requirements[potato_stage] || 1e150)/((1 + speed_upgrade_level) * (mashed_potatoes + 1)) * (100 * (0.8**fertilizer_level)) / 1000) + "s"
    if (potato_stage != max_potato_tier) {
      document.getElementById("plot_progress_bar_bar").style.width = 1+(growth_progress/potato_stage_requirements[potato_stage])*99 + "%"
    } else {
      document.getElementById("plot_progress_bar_bar").style.width = "100%"
      document.getElementById("plot_progress_bar_bar").style.background = colors[potato_stage-1]
      document.getElementById("plot_info").innerHTML = potato_stage_requirements[potato_stage-1] + "/" + potato_stage_requirements[potato_stage-1] + "<br>Currently Tier " + potato_stage + " (" + (potato_stage_text[potato_stage] || "ERROR 404 POTATO NOT FOUND") + ")"
    }
  }

}


function autoGrow() {
  growth_progress += (1 + speed_upgrade_level) * (((mashed_potatoes/100)+1)**3.2) * prestige_1_buff;
  if (growth_progress < (potato_stage_requirements[potato_stage] || 1e150)) {
    auto_grow = setTimeout(autoGrow, 100 * (0.8**fertilizer_level))
  } else {
    potato_stage += 1
    if (potato_stage > best_potato_seen) {
      best_potato_seen += 1;
      potatopediaUnlock(best_potato_seen);
    }
    document.getElementById("plot_progress_bar_vessel").style.background = colors[potato_stage - 1]
    document.getElementById("plot_progress_bar_bar").style.background = colors[potato_stage]
    if (potato_stage != max_potato_tier) {
      growth_progress = 0
      auto_grow = setTimeout(autoGrow, 100 * (0.8**fertilizer_level))
    }
    if (document.getElementById("harvest_auto").checked && (document.getElementById("harvest_auto_setting").value <= potato_stage || max_potato_tier == potato_stage)) {
      clearInterval(auto_grow)
      harvest()
    }
  }
  updatePlotText()
}

function plant() {
  if (potato_planted == true || (have_potato == true && seeds == 0)) {
    return
  }
  if (seeds >= 0 && cloning_unlocked == false) {
    seeds -= 1
  }
  updateSeedsText()
  potato_planted = true
  potato_stage = 0
  setTimeout(autoGrow, 100)
}

function harvest() {
  if (!document.getElementById("plant_auto").checked) {
    clearInterval(auto_plant)
  }
  if (potato_stage == 0 || !potato_planted) {
    return
  }
  if (have_potato == true) {
    if (document.getElementById("harvest_auto").checked) {
      setTimeout(harvest, 100)
    }
    return
  }
  clearInterval(auto_grow)
  growth_progress = 0
  potato_planted = false
  updatePlotText()
  have_potato = true
  potato_tier = potato_stage
  if (auto_cook_recipie != 0) {
    if (auto_cook_recipie == 1) {
      makeBakedPotato()
    }
    else if (auto_cook_recipie == 2) {
      makeFries()
    }
    else if (auto_cook_recipie == 3) {
      makeChips()
    }
  }
  else if (document.getElementById("make_seeds_auto").checked) {
    makeSeeds()
  }
  if (document.getElementById("plant_auto").checked) {
    plant()
    auto_plant = setInterval(plant(),1000) // we keep trying until it works
  }
  updatePotatoText()
  document.getElementById("plot_progress_bar_vessel").style.background = "#888"
  document.getElementById("plot_progress_bar_bar").style.background = "#f00"
  if (potato_tier == 3) {
    awardAchievement(3,0)
  } else if (potato_tier == 4) {
    awardAchievement(4,0)
  } else if (potato_tier == 6) {
    awardAchievement(5,0)
  } else if (potato_tier == 8) {
    awardAchievement(6,0)
  } else if (potato_tier == 11) {
    awardAchievement(2,2)
  } else if (potato_tier == 16) {
    awardAchievement(7,2)
  }
}
