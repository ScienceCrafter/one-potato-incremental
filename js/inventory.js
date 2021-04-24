
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
}
