
var notation = "classical"
var big_num_list = ["", "M", "B", "T", "Qa", "Qi", "Sx", "Se", "Oc", "No"]
var big_num_list_plus = ["", "Dc", "Vi", "Tg", "Qg", "Qq", "Sg", "St", "Og", "Ag"]

function numberFormat(number, force_scientific=false, force_floor=false) {
  var string = "" + Math.floor(number)
  if (number <= 999) {
    return force_floor ? string : centRound(number);
  } else if (number <= 999999) {
    string = string.slice(0,-3) + " " + string.slice(-3)
    return string
  } else if (number <= 999999999) {
    string = string.slice(0,-6) + " " + string.slice(-6)
    string = string.slice(0,-3) + " " + string.slice(-3)
    return string
  }
  if (notation == "scientific" || force_scientific == true) {
    var oom = Math.floor(Math.log10(number))
    number = Math.round(number / 10**(oom - 2))/100
    return number + "e+" + oom
  } else if (notation == "classical") {
    if (number > 9e299) {
      return numberFormat(number,true)
    }
    var number_index = Math.floor((Math.floor(Math.log10(number)) - 3)/3)
    return Math.floor((number/(10**((number_index+1)*3)))*100)/100 + " " + big_num_list[number_index%10] + big_num_list_plus[Math.floor(number_index/10)]
  } else {
    return number
  }
  return
}

function centRound(number) {
  return Math.floor(number*100)/100
}
