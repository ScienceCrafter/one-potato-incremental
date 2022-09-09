
var baked_potato_boost = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var fry_boost = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var mashed_potatoes = 0
var study_req = 5
var study_req_cost = 5
var retain_automators = false
var autocook_unlocked = false
var prestige_1_buff = 1;


function softReset() {
  have_potato = true
  potato_tier = 1
  max_potato_tier = 1
  coins = 0
  seeds = 0
  potato_planted = false
  growth_progress = 0
  potato_stage = 0
  potato_dna = 0
  food_tier = 0
  fry_bonus = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  potato_stage_requirements = [100,600,3000,5000,20000,100000,500000,2560000,5000000,20000000,1e+9,5e+11,1e+15,1e+19,1e+22,1e+27]
  fertilizer_price = 5
  fertilizer_level = 0
  seed_research_cost = 1
  study_progress = 0
  seed_upgrade_cost = 1
  seed_upgrade_level = 0
  speed_upgrade_cost = 1
  speed_upgrade_level = 0
  document.getElementById("harvest_auto").checked = false;
  document.getElementById("plant_auto").checked = false;
  document.getElementById("make_seeds_auto").checked = false;
  if (!retain_automators) {
    document.getElementById("buy_auto_seeder").disabled = false
    document.getElementById("make_seeds_auto_p").style.display = "none"
  }
  updatePotatoText()
  updateCoinsText()
  updateSeedsText()
  updatePlotText()
  updateDNAText()
  document.getElementById("buy_fertilizer").innerHTML = "Buy fertilizer [" + fertilizer_level + "/" + max_fertilizer_level + "]<br>" + fertilizer_price + icons[2]
  document.getElementById("seed_research").innerHTML = "Research Seeds <br>" + seed_research_cost + icons[0]
  document.getElementById("potato_study").innerHTML = "Study your potato [" + study_progress + "/5]"
  document.getElementById("seed_upgrade").innerHTML = "Seeds per potato [" + (seed_upgrade_level + 2) + "]<br>" + seed_upgrade_cost + icons[1]                                                                   //vetbthlevfqtymetsfarimdxjsrfmglxjiix
  document.getElementById("speed_upgrade").innerHTML = "Growth speed [" + (speed_upgrade_level + 1) + "]<br>" + speed_upgrade_cost + icons[1]
}

function prestige() {
  awardAchievement(0,2)
  if (have_potato == false || potato_tier <= 7) {
    return
  }
  mashed_potatoes += 7**(potato_tier-8)
  updateMashedPotatoText()
  for (i=0;i<baked_potato_boost.length;i++) {
    if (potato_stage_requirements[i]==1) {
      baked_potato_boost[i] += 1
    }
  }
  for (i=0;i<fry_boost.length;i++) {
    if (fry_bonus[i]==100+fry_boost[i] && fry_boost[i] != 200) {
      fry_boost[i] += 1;
    }
  }
  softReset()
}

function prestigeUpgradeAutomatorsRetained() {
  if (mashed_potatoes < 10) {
    return
  }
  mashed_potatoes -= 10
  updateMashedPotatoText()
  retain_automators = true
  document.getElementById("prestige_upgrade_automators_retained").disabled = "true"
}

function prestigeUpgradeAutoCook() {
  if (mashed_potatoes < 200) {
    return
  }
  mashed_potatoes -= 200
  updateMashedPotatoText()
  autocook_unlocked = true
  awardAchievement(6,2)
  document.getElementById("autocooker_div").style.display = "block"
  document.getElementById("prestige_upgrade_auto_cook").disabled = "true"
}

function prestigeUpgradeStudyReq() {
  if (mashed_potatoes < study_req_cost) {
    return
  }
  mashed_potatoes -= study_req_cost
  study_req_cost *= 10
  study_req -= 1
  updateMashedPotatoText()
  document.getElementById("prestige_upgrade_study_req").innerHTML = "Swift Studies ["+(5-study_req)+"/4]<br>"+study_req_cost+"<span><img src='sprites/mashed_potato_icon.png' class='small_icon'></img></span>"
  if (study_req == 1) {
    document.getElementById("prestige_upgrade_study_req").disabled = "true"
  }
  document.getElementById("potato_study").innerHTML = "Study your potato [" + study_progress + "/" + study_req +"]"
}
