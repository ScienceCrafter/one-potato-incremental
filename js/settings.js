
var progress_bar_style = "fancy"
var auto_saving = true
//var notation = "scientific" (declared earlier)

function progressBarStyle() {
  if (progress_bar_style == "simple") {
    progress_bar_style = "fancy"
    document.getElementById("progress_bar_style_setting").innerHTML = 'Progress Bars:<br><p style="color:#f00;display:inline;">F</p><p style="color:#f80;display:inline;">a</p><p style="color:#0b0;display:inline;">n</p><p style="color:#0bb;display:inline;">c</p><p style="color:#00f;display:inline;">y</p>'
    colors = ["#f00","#f80","#ff0","#0f0","#0ff","#00f","#f0f","#f00","#f80","#ff0","#0f0","#0ff","#00f","#f0f","#f00","#f80","#ff0","#0f0","#0ff","#00f","#f0f","#f00","#f80"]
  } else if (progress_bar_style == "fancy") {
    progress_bar_style = "simple"
    document.getElementById("progress_bar_style_setting").innerHTML = 'Progress Bars:<br>Simple'
    colors = ["#f00","#00f","#f00","#00f","#f00","#00f","#f00","#00f","#f00","#00f","#f00","#00f","#f00","#00f","#f00","#00f","#f00","#00f","#f00","#00f","#f00","#00f","#f00","#00f"]
  }
}

function numberNotationType() {
  if (notation == "scientific") {
    notation = "classical"
    document.getElementById("number_notation_setting").innerHTML = "Number Notation:<br>Classical (32.64 QaVi)"
  } else if (notation == "classical") {
    notation = "scientific"
    document.getElementById("number_notation_setting").innerHTML = "Number Notation:<br>Scientific (3.26e+76)"
  }
}

function toggleAutoSave() {
  if (auto_saving) {
    document.getElementById("auto_save_setting").innerHTML = "Auto Save: Off"
    auto_saving = false;
  } else {
    document.getElementById("auto_save_setting").innerHTML = "Auto Save: On"
    auto_saving = true;
  }
}
