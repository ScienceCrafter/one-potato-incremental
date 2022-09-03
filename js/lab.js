
var seed_research_cost = 1

var study_progress = 0

var seed_upgrade_cost = 1
var seed_upgrade_level = 0

var speed_upgrade_cost = 1
var speed_upgrade_level = 0

var cloning_unlocked = false

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
  document.getElementById("seed_research").innerHTML = "Research Seeds <br>" + 10 + icons[0]
  if (seeds <= 0) {
    seeds += 10;
    potato_dna -= 1;
    updateSeedsText();
    updateDNAText();
  }
}


function seedUpgrade() {
  if (potato_dna < seed_upgrade_cost) {
    return
  }
  potato_dna -= seed_upgrade_cost
  updateDNAText()
  seed_upgrade_cost = Math.floor(seed_upgrade_cost * 1.05) + 1
  seed_upgrade_level += 1
  document.getElementById("seed_upgrade").innerHTML = "Seeds per potato [" + numberFormat((seed_upgrade_level + 2)) + "]<br>" + numberFormat(seed_upgrade_cost) + icons[1]
  awardAchievement(1,0)
}

function speedUpgrade() {
  if (potato_dna < speed_upgrade_cost) {
    return
  }
  potato_dna -= speed_upgrade_cost
  updateDNAText()
  speed_upgrade_cost = Math.floor(speed_upgrade_cost * 1.05) + 1
  speed_upgrade_level += 1
  document.getElementById("speed_upgrade").innerHTML = "Growth speed [" + numberFormat((speed_upgrade_level + 1)) + "]<br>" + numberFormat(speed_upgrade_cost) + icons[1]
  awardAchievement(1,0)
}

function cloning() {
  if (potato_dna < 500000) {
    return
  }
  potato_dna -= 500000
  updateDNAText()
  cloning_unlocked = true
  document.getElementById("cloning_upgrade").disabled = "true"
  awardAchievement(3,2)
}

function potatoStudy() {
  if (have_potato == true && potato_tier == max_potato_tier && seeds != 0) {
    have_potato = false
    study_progress += 1
    if (study_progress >= study_req) {
      study_progress = 0
      max_potato_tier += 1
      awardAchievement(2,0)
    }
    document.getElementById("potato_study").innerHTML = "Study your potato [" + study_progress + "/" + study_req +"]"
    updatePotatoText()
  }
}
