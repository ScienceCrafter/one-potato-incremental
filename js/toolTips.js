//grab some buttons by their id
let potatoStudyButton =  document.getElementById("potato_study");
let makeSeedsButton = document.getElementById("make_seeds");
let plantButton = document.getElementById("plant_button");
let harvestButton = document.getElementById("harvest_button");
let sellPotatoButton = document.getElementById("sell_potato");
let labTabButton = document.getElementById("lab_tab_button");
let shopTabButton = document.getElementById("shop_tab_button");
let kitchenTabButton = document.getElementById("kitchen_tab_button");
let prestigeTabButton = document.getElementById("prestige_tab_button");
let achievementTabButton = document.getElementById("achivement_tab_button");
let saveGameButton = document.getElementById("save_game_button");
let loadGameButton = document.getElementById("load_game_button");
let hardResetButton = document.getElementById("hard_reset_button");

//function to add tool tip to a particular button
//tooltip styles can be modified in the styles.css
function addToolTip (thisButton, _thisToolTipText){
    //add the tooltip class to thisButton
    thisButton.classList.add("toolTip");
    //create an empty span for the tooltip text
    let thisToolTipContainer = document.createElement("span");
    //add the tooltiptext class to the empty span
    thisToolTipContainer.classList.add("toolTipText");
    //attach the empty tooltip span to this particular button    
    thisButton.appendChild(thisToolTipContainer);
    //fill tooltip text with _thisToolTipText
    thisToolTipContainer.innerText = _thisToolTipText;
}

//add tooltips to buttons
//need to disable tooltips for buttons that aren't currently *pressable*
//ie: shouldn't show "harvest potatoe" tooltip if there isn't a potatoe ready to harvest
addToolTip(potatoStudyButton, `Study Your ${potato_stage_text[potato_stage]} To Unlock The Next Tier`);
addToolTip(makeSeedsButton, `Turn Your Potato Into ${(seed_upgrade_level + 2) * 10**(potato_tier-1) + " "}Seeds`);
addToolTip(plantButton, `Plant Potato`);
addToolTip(harvestButton, `Harvest ${potato_stage_text[potato_stage]}`);
addToolTip(labTabButton, `The Potato Lab!`);
addToolTip(shopTabButton, `Potato Coins Burning a Hole In Your Pocket?`);