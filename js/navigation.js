
var active_tab = ""

function navigate(tab) {
  document.getElementById("lab_tab").style.display = "none"
  document.getElementById("shop_tab").style.display = "none"
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
}
