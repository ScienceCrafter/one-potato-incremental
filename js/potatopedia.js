var best_potato_seen = 0 // that's got to be the best potato i've ever seen!
var pp_focus = 0 // potatopedia focus

var potato_stages_alt = [
  "sprites/seeds.png",
  "sprites/potato1.png", // terrible potato
  "sprites/potato2.png", // pale potato
  "sprites/potato3.png", // meh potato
  "sprites/potato4.png", // robust potato
  "sprites/potato5.png", // hearty potato
  "sprites/potato6.png", // smooth potato
  "sprites/potato7.png", // blue potato
  "sprites/potato8.png", // 8bit potato
  "sprites/potato9.png", // error potato
  "sprites/potato10.png", // photorealistic potato
  "sprites/potato11.png", // antimatter potato
  "sprites/potato12.png", // shadow potato
  "sprites/potato13.png", // cookie potato
  "sprites/potato14.png", // fire potato
  "sprites/potato15.png", // ice potato
  "sprites/potato16.png"] // legendary potato

var potato_flavor_texts = [
  "Hey, you gotta start somewhere",
  "A light slightly blighty unsightly potato",
  "This potato doesn't care (it is a potato)",
  "This one might actually be edible!",
  "Part of a balanced breakfast",
  "The smooth texture of this potato is only slightly concerning to the local villagers (it tastes great though!)",
  "Dabedee dabedye",
  "the wrist gaaaaaaaaame",
  "A problem has occured with your PotatOS. Please rebake your potato if problems persist. ERROR CODE 17643",
  "One Potato Incremental: Now in 4k",
  "Say hi to hevi for me :)",
  "If you stare into the potato for long enough the potato stares back",
  "Fries made out of this one taste better than you might expect... not good, mind you, just better.",
  "Unfortunately, you still need to cook it",
  "This potato wants revenge >:)",
  "You've come a long way, congratulations!"
]

function potatopediaUnlock(id) {
  document.getElementById("potatopedia_"+id).src = potato_stages_alt[id];
  if (best_potato_seen > 5) {
    document.getElementById("potatopedia_tab_button").style["background-color"] = "#8f8";
  }
}

function ppFocus(id) { // nice
  if (id > best_potato_seen) {return}
  if (pp_focus) {document.getElementById("potatopedia_"+pp_focus).style["background-color"] = "#bbb";}
  if (id == pp_focus) {
    document.getElementById("potatopedia_infodiv").style.display = "none";
    pp_focus = 0;
    return
  }
  document.getElementById("potatopedia_infodiv").style.display = "block";
  document.getElementById("potatopedia_"+id).style["background-color"] = "green";
  pp_focus = id;
  document.getElementById("potatopedia_infodiv_header").innerHTML = "#"+id+" - "+potato_stage_text[id];
  document.getElementById("potatopedia_infodiv_content").innerHTML = "\""+potato_flavor_texts[id-1]+"\"<br>growth time: "+numberFormat(potato_stage_requirements[id-1])+"/1 (maxxed "+(baked_potato_boost[id-1]+(potato_stage_requirements[id-1]==1?1:0))+" times)<br>fry bonus: "+fry_bonus[id-1]+"/"+(100+fry_boost[id-1]);
}
