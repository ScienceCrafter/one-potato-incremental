
var have_potato = true
var potato_tier = 1
var seeds = 0
var potato_dna = 0
var coins = 0

function updatePotatoText() {
  if (have_potato == false) {
    document.getElementById("potato").innerHTML = "<img src='sprites/potato_empty.png'></img>"
  } else {
    document.getElementById("potato").innerHTML = potato_stages[potato_tier]
  }
}

function updateSeedsText() {
  if (seeds == 0) {
    document.getElementById("seeds").innerHTML = "No seeds"
  }
  document.getElementById("seeds").innerHTML = seeds
}

function updateDNAText() {
  if (potato_dna == 0) {
    document.getElementById("potato_dna").innerHTML = "No potato dna"
  }
  document.getElementById("potato_dna").innerHTML = potato_dna
}

function updateCoinsText() {
  if (coins == 0) {
    document.getElementById("coins").innerHTML = "No coins"
  }
  document.getElementById("coins").innerHTML = coins
  if (coins >= 1000000) {
    awardAchievement(3,1)
    if (coins >= 1000000000) {
      awardAchievement(4,1)
    }
  }
}

function saveGame() {
  localStorage.setItem("local_have_potato",Number(have_potato))
  localStorage.setItem("local_potato_tier",potato_tier)
  localStorage.setItem("local_max_potato_tier",max_potato_tier)
  localStorage.setItem("local_study_progress",study_progress)
  localStorage.setItem("local_seeds",seeds + Number(potato_planted)) // we give a seed back if a potato was planted
  localStorage.setItem("local_potato_dna",potato_dna)
  localStorage.setItem("local_coins",coins)
  localStorage.setItem("local_dna_upgrade_seeds_level",seed_upgrade_level)
  localStorage.setItem("local_dna_upgrade_seeds_cost",seed_upgrade_cost)
  localStorage.setItem("local_dna_upgrade_speed_level",speed_upgrade_level)
  localStorage.setItem("local_dna_upgrade_speed_cost",speed_upgrade_cost)
  for (i = 0;i<potato_stage_requirements.length;i++) {
    localStorage.setItem("local_potato_stage_requirement_"+i,potato_stage_requirements[i])
  }
  localStorage.setItem("local_achievements",achievements)
  localStorage.setItem("local_auto_seeder",auto_seeder_unlocked)
  localStorage.setItem("local_auto_planter",auto_planter_unlocked)
  localStorage.setItem("local_auto_seeder",auto_harvest_unlocked)
  localStorage.setItem("local_seed_research_cost",seed_research_cost)
}

function loadGame() {
  if (localStorage.getItem("local_have_potato") == "1") {
    have_potato = true
  } else {
    have_potato = false
  }
  potato_tier = Number(localStorage.getItem("local_potato_tier"))
  max_potato_tier = Number(localStorage.getItem("local_max_potato_tier"))
  study_progress = Number(localStorage.getItem("local_study_progress"))
  seeds = Number(localStorage.getItem("local_seeds"))
  potato_dna = Number(localStorage.getItem("local_potato_dna"))
  coins = Number(localStorage.getItem("local_coins"))
  if (localStorage.getItem("local_auto_seeder")=="true") {
    coins += 5
    autoSeeder()
  }
  if (localStorage.getItem("local_auto_planter")=="true") {
    coins += 25
    autoPlanter()
  }
  if (localStorage.getItem("local_auto_harvest")=="true") {
    coins += 200
    autoHarvest()
  }
  seed_research_cost = Number(localStorage.getItem("local_seed_research_cost"))
  seed_upgrade_level = Number(localStorage.getItem("local_dna_upgrade_seeds_level"))
  seed_upgrade_cost = Number(localStorage.getItem("local_dna_upgrade_seeds_cost"))
  speed_upgrade_level = Number(localStorage.getItem("local_dna_upgrade_speed_level"))
  speed_upgrade_cost = Number(localStorage.getItem("local_dna_upgrade_speed_cost"))
  for (i = 0;i<potato_stage_requirements.length;i++) {
    potato_stage_requirements[i] = Number(localStorage.getItem("local_potato_stage_requirement_"+i))
  }
  var achievements_temporary = localStorage.getItem("local_achievements").split(",")
  for (i = 0;i<achievements_temporary.length;i++) {
    achievements_temporary[i] = Number(achievements_temporary[i])
    if (achievements_temporary[i]) {
      awardAchievement(i%8,Math.floor(i/8))
    }
  }
  updatePotatoText()
  updateSeedsText()
  updateDNAText()
  updateCoinsText()
  document.getElementById("seed_research").innerHTML = "Research Seeds <br>" + seed_research_cost + icons[0]
  document.getElementById("potato_study").innerHTML = "Study your potato [" + study_progress + "/5]"
  if (seed_research_cost == 10) {
    document.getElementById("seed_research_max").style.display = "inline-block"
  }
  document.getElementById("seed_upgrade").innerHTML = "Seeds per potato [" + (seed_upgrade_level + 2) + "]<br>" + seed_upgrade_cost + icons[1]
  document.getElementById("speed_upgrade").innerHTML = "Growth speed [" + (speed_upgrade_level + 1) + "]<br>" + speed_upgrade_cost + icons[1]
}
