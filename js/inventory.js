
var have_potato = true
var potato_tier = 1
var seeds = 0
var potato_dna = 0
var coins = 0
var coins_per_second = 0

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
  document.getElementById("seeds").innerHTML = numberFormat(seeds)
}

function updateDNAText() {
  if (potato_dna == 0) {
    document.getElementById("potato_dna").innerHTML = "No potato dna"
  }
  document.getElementById("potato_dna").innerHTML = numberFormat(potato_dna)
}

function updateCoinsText() {
  if (coins == 0) {
    document.getElementById("coins").innerHTML = "No coins"
  }
  document.getElementById("coins").innerHTML = numberFormat(coins)
  if (coins >= 1000000) {
    awardAchievement(3,1)
    if (coins >= 1000000000) {
      awardAchievement(4,1)
    }
  }
}

function updateMashedPotatoText() {
  document.getElementById("mashed_potatoes").innerHTML = numberFormat(mashed_potatoes)
  document.getElementById("mashed_potatoes_info").innerHTML = "You have "+numberFormat(mashed_potatoes)+" <span><img src='sprites/mashed_potato_icon.png' class='small_icon'></img></span>, granting you a bonus "+numberFormat(Math.floor((((mashed_potatoes/100)+1)**3.2)*100)/100)+" x to growth speed"
  if (mashed_potatoes == 0) {
    document.getElementById("mashed_potatoes").innerHTML = "No mashed potatoes"
  }
}

function autoSaveGame() {
  if (auto_saving) {
    saveGame();
  }
}

function saveGame() {
  // tell the game there is a save
  localStorage.setItem("local_game_saved",true)
  // basic potato related stuff
  localStorage.setItem("local_have_potato",Number(have_potato))
  localStorage.setItem("local_potato_tier",potato_tier)
  localStorage.setItem("local_max_potato_tier",max_potato_tier)
  localStorage.setItem("local_study_progress",study_progress)
  // ressources
  localStorage.setItem("local_seeds",seeds + Number(potato_planted)) // we give a seed back if a potato was planted
  localStorage.setItem("local_potato_dna",potato_dna)
  localStorage.setItem("local_coins",coins)
  localStorage.setItem("local_coins_per_second",coins_per_second)
  localStorage.setItem("local_mashed_potatoes",mashed_potatoes)
  // dna stuff
  localStorage.setItem("local_dna_upgrade_seeds_level",seed_upgrade_level)
  localStorage.setItem("local_dna_upgrade_seeds_cost",seed_upgrade_cost)
  localStorage.setItem("local_dna_upgrade_speed_level",speed_upgrade_level)
  localStorage.setItem("local_dna_upgrade_speed_cost",speed_upgrade_cost)
  localStorage.setItem("local_seed_research_cost",seed_research_cost)
  // kitchen stuff
  localStorage.setItem("local_potato_stage_requirement",potato_stage_requirements)
  localStorage.setItem("local_fry_bonus",fry_bonus)
  // potatopedia stuff
  localStorage.setItem("local_best_potato_seen",best_potato_seen);
  // achievements
  localStorage.setItem("local_achievements",achievements)
  // shop stuff
  localStorage.setItem("local_auto_seeder",auto_seeder_unlocked)
  localStorage.setItem("local_auto_planter",auto_planter_unlocked)
  localStorage.setItem("local_auto_harvest",auto_harvest_unlocked)
  localStorage.setItem("local_fertilizer_level",fertilizer_level)
  localStorage.setItem("local_fertilizer_price",fertilizer_price)
  // prestige stuff
  localStorage.setItem("local_baked_potato_boost",baked_potato_boost)
  localStorage.setItem("local_fry_boost",fry_boost)
  localStorage.setItem("local_study_req",study_req)
  localStorage.setItem("local_study_req_cost",study_req_cost)
  localStorage.setItem("local_retain_automators",retain_automators)
  localStorage.setItem("local_autocook_unlocked",autocook_unlocked)
  // settings
  localStorage.setItem("local_notation",notation);
  console.log("game saved")
}

function loadGame() {
  // if there is no save game (i.e. new player/hard reset)
  if (localStorage.getItem("local_game_saved") != "true") {
    console.log("no save was found")
    return
  }
  // basic potato related stuff
  if (localStorage.getItem("local_have_potato") == "1") {
    have_potato = true
  } else {
    have_potato = false
  }
  potato_tier = Number(localStorage.getItem("local_potato_tier"))
  max_potato_tier = Number(localStorage.getItem("local_max_potato_tier"))
  study_progress = Number(localStorage.getItem("local_study_progress"))
  // ressources
  seeds = Number(localStorage.getItem("local_seeds"))
  potato_dna = Number(localStorage.getItem("local_potato_dna"))
  coins = Number(localStorage.getItem("local_coins"))
  coins_per_second = Number(localStorage.getItem("local_coins_per_second"))
  mashed_potatoes = Number(localStorage.getItem("local_mashed_potatoes"))
  updatePotatoText()
  updateSeedsText()
  updateDNAText()
  updateCoinsText()
  updateMashedPotatoText()
  // dna stuff
  seed_research_cost = Number(localStorage.getItem("local_seed_research_cost"))
  seed_upgrade_level = Number(localStorage.getItem("local_dna_upgrade_seeds_level"))
  seed_upgrade_cost = Number(localStorage.getItem("local_dna_upgrade_seeds_cost"))
  speed_upgrade_level = Number(localStorage.getItem("local_dna_upgrade_speed_level"))
  speed_upgrade_cost = Number(localStorage.getItem("local_dna_upgrade_speed_cost"))
  // kitchen stuff
  potato_stage_requirements = localStorage.getItem("local_potato_stage_requirement").split(",")
  for (i in potato_stage_requirements) {potato_stage_requirements[i] = Number(potato_stage_requirements[i])}
  fry_bonus = localStorage.getItem("local_fry_bonus").split(",")
  for (i in fry_bonus) {fry_bonus[i] = Number(fry_bonus[i])}
  fry_multiplier = 1
  for (i=0; i<fry_bonus.length; i++) {fry_multiplier *= 1+(fry_bonus[i]/100)}
  // potatopedia
  best_potato_seen = Number(localStorage.getItem("local_best_potato_seen"));
  for (i=0; i<best_potato_seen; i++) {
    potatopediaUnlock(i+1);
  }
  document.getElementById("potatopedia_tab_button").style.background = "revert"
  // achievements
  var achievements_temporary = localStorage.getItem("local_achievements").split(",")
  for (i = 0;i<achievements_temporary.length;i++) {
    achievements_temporary[i] = Number(achievements_temporary[i])
    if (achievements_temporary[i]) {
      awardAchievement(i%8,Math.floor(i/8))
    }
  }
  document.getElementById("achievement_tab_button").style.background = "revert"
  // shop stuff
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
  document.getElementById("harvest_auto").checked = false;
  document.getElementById("plant_auto").checked = false;
  document.getElementById("make_seeds_auto").checked = false;
  fertilizer_level = Number(localStorage.getItem("local_fertilizer_level"))
  fertilizer_price = Number(localStorage.getItem("local_fertilizer_price"))
  // prestige stuff
  baked_potato_boost = localStorage.getItem("local_baked_potato_boost").split(",")
  for (i in baked_potato_boost) {baked_potato_boost[i] = Number(baked_potato_boost[i])}
  fry_boost = localStorage.getItem("local_fry_boost").split(",")
  for (i in fry_boost) {fry_boost[i] = Number(fry_boost[i])}
  study_req = Number(localStorage.getItem("local_study_req"))
  study_req_cost = Number(localStorage.getItem("local_study_req_cost"))
  if (localStorage.getItem("local_retain_automators")=="true") {
    mashed_potatoes += 10
    prestigeUpgradeAutomatorsRetained()
  }
  if (localStorage.getItem("local_autocook_unlocked")=="true") {
    mashed_potatoes += 200
    prestigeUpgradeAutoCook()
  }
  document.getElementById("seed_research").innerHTML = "Research Seeds <br>" + seed_research_cost + icons[0]
  document.getElementById("potato_study").innerHTML = "Study your potato [" + study_progress + "/" + study_req + "]"
  if (seed_research_cost == 10) {
    document.getElementById("seed_research_max").style.display = "inline-block"
  }
  document.getElementById("seed_upgrade").innerHTML = "Seeds per potato [" + (seed_upgrade_level + 2) + "]<br>" + seed_upgrade_cost + icons[1]
  document.getElementById("speed_upgrade").innerHTML = "Growth speed [" + (speed_upgrade_level + 1) + "]<br>" + speed_upgrade_cost + icons[1]
  document.getElementById("buy_fertilizer").innerHTML = "Buy fertilizer [" + fertilizer_level + "]<br>" + fertilizer_price + icons[2]
  document.getElementById("prestige_upgrade_study_req").innerHTML = "Swift Studies ["+(5-study_req)+"/4]<br>"+study_req_cost+"<span><img src='sprites/mashed_potato_icon.png' class='small_icon'></img></span>"
  if (study_req == 1) {
    document.getElementById("prestige_upgrade_study_req").disabled = "true"
  }
  // settings
  notation = localStorage.getItem("local_notation");
}

var warning_triggered = false

function hardReset() {
  if (warning_triggered == false) {
    alert("Are you sure you want to reset EVERYTHING? (Press reset button again within the next 5 seconds)")
    warning_triggered = true
    setTimeout(function(){warning_triggered=false}, 4500)
    return
  }
  document.getElementById("harvest_auto").checked = false;
  document.getElementById("plant_auto").checked = false;
  document.getElementById("make_seeds_auto").checked = false;
  localStorage.setItem("local_game_saved",false)
  location.reload()
}
