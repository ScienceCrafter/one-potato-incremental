
var seed_research_cost = 1

var study_level = 1
var study_progress = 0

var seed_upgrade_cost = 1
var seed_upgrade_level = 0

var speed_upgrade_cost = 1
var speed_upgrade_level = 0

var max_potato_tier = 1

function seedResearch() {
  if (seeds < seed_research_cost + 1) {
    return
  }
  seeds -= seed_research_cost
  updateSeedsText()
  if (seed_research_cost < 10) {
    seed_research_cost += 1
    if (seed_research_cost == 10) {
      document.getElementById("seed_research_max").style.display = "inline-block"
    }
  }
  document.getElementById("seed_research").innerHTML = "Research Seeds <br>" + seed_research_cost + icons[0]
  potato_dna += 1
  updateDNAText()
}

function seedResearchMax() {
  if (seeds < 10) {
    return
  }
  potato_dna += (seeds - (seeds % 10)) / 10
  updateDNAText()
  seeds = seeds % 10
  updateSeedsText()
  if (seed_research_cost < 10) {
    seed_research_cost += 1
  }
  document.getElementById("seed_research").innerHTML = "Research Seeds (" + seed_research_cost + ")"
}
if (seeds <= 0) {
  seeds += 1
}

function seedUpgrade() {
  if (potato_dna < seed_upgrade_cost) {
    return
  }
  potato_dna -= seed_upgrade_cost
  updateDNAText()
  seed_upgrade_cost = Math.floor(seed_upgrade_cost * 1.15) + 1
  seed_upgrade_level += 1
  document.getElementById("seed_upgrade").innerHTML = "Seeds per potato [" + (seed_upgrade_level + 2) + "]<br>" + seed_upgrade_cost + icons[1]
}

function speedUpgrade() {
  if (potato_dna < speed_upgrade_cost) {
    return
  }
  potato_dna -= speed_upgrade_cost
  updateDNAText()
  speed_upgrade_cost = Math.floor(speed_upgrade_cost * 1.15) + 1
  speed_upgrade_level += 1
  document.getElementById("speed_upgrade").innerHTML = "Growth speed [" + (speed_upgrade_level + 1) + "]<br>" + speed_upgrade_cost + icons[1]
}

function potatoStudy() {
  if (have_potato == true && potato_stage == study_level && seeds != 0) {
    have_potato = false
    if (study_progress == 4) {
      study_progress = 0
      study_level += 1
      max_potato_tier += 1
    } else {
      study_progress += 1
    }
    document.getElementById("potato_study").innerHTML = "Study your potato [" + study_progress + "/5]"
    updatePotatoText()
    if (document.getElementById("plant_auto").checked) {
      plant()
    }
  }
}
