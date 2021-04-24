
function makeSeeds() {
  if (have_potato == true) {
    have_potato = false
    seeds += (seed_upgrade_level + 2) * 10**(potato_stage-1)
  }
  updatePotatoText()
  updateSeedsText()
  if (document.getElementById("plant_auto").checked) {
    plant()
  }
}

function sellPotato() {
  if (have_potato == true && seeds != 0) {
    have_potato = false
    coins += 1 * 10**(potato_stage-1)
  }
  updatePotatoText()
  updateCoinsText()
  if (document.getElementById("plant_auto").checked) {
    plant()
  }
}
