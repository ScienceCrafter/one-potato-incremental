
var active_tab = ""

function navigate(tab) {
  document.getElementById("lab_tab").style.display = "none"
  document.getElementById("shop_tab").style.display = "none"
  document.getElementById("kitchen_tab").style.display = "none"
  document.getElementById("achievement_tab").style.display = "none"
  document.getElementById("prestige_tab").style.display = "none"
  if (tab == "lab") {
    if (active_tab == "lab") {
      active_tab = ""
      return
    }
    active_tab = "lab"
    document.getElementById("lab_tab").style.display = "block"
  }
  if (tab == "shop") {
    if (active_tab == "shop") {
      active_tab = ""
      return
    }
    active_tab = "shop"
    document.getElementById("shop_tab").style.display = "block"
  }
  if (tab == "kitchen") {
    if (active_tab == "kitchen") {
      active_tab = ""
      return
    }
    active_tab = "kitchen"
    document.getElementById("kitchen_tab").style.display = "block"
  }
  if (tab == "prestige") {
    if (active_tab == "prestige") {
      active_tab = ""
      return
    }
    active_tab = "prestige"
    document.getElementById("prestige_tab").style.display = "block"
  }
  if (tab == "achievement") {
    if (active_tab == "achievement") {
      active_tab = ""
      return
    }
    active_tab = "achievement"
    document.getElementById("achievement_tab").style.display = "block"
    document.getElementById("achievement_tab_button").style.background = "revert"
  }
}
