
function makeSeeds() {
  if (have_potato == true) {
    have_potato = false
    seeds += (seed_upgrade_level + 2) * 10**(potato_tier-1)
    awardAchievement(0,0)
  }
  updatePotatoText()
  updateSeedsText()
}

function sellPotato() {
  if (have_potato == true && seeds > 0) {
    have_potato = false
    coins += 1 * 7**(potato_tier-1)
  }
  updatePotatoText()
  updateCoinsText()
}

function buySeed() {
  if (coins >= 1) {
    coins -= 1
    seeds += 1
    updateSeedsText()
    updateCoinsText()
  }
}
