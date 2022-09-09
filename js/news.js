
var buffer = false
var news_p
var messages = [
  "\"Unlike antimatter dimensions, we could afford 9!\" -ScienceCrafter",
  "\"You can bake your potato and eat it too!\" -Zman",
  "\"Think about this theres probably a alternate reality where people use potatos and soly potatos as a money unit\" -Joel_",
  "\"everything is either a potato or not a potato, the real problem is figuring out which is which before you eat\" -Zman",
  "News tickers? Now introducing, New stickers! ... Stickers coming v45.36.12",
  "according to all known laws of aviation, a potato cannot fly...                 yet.",
  "\"OPI is perfectly optimized for your potato PC, it will even heat it up, perfect for potato cooking!\" -Zman",
  "9 out of 10 people love potatoes...         sorry, there was an error, we meant to say 10 out of 10",
  "80% water!",
  "\"potato\"",
  "potato.",
  "potato!",
  "potato?",
  "potatoes have eyes, but they can't see through them... in the usual way...",
  "Scientists declare: potatoes are not fruit!",
  "\"i am the only one with a green name in the discord, fight me\"",
  "Imagine ur baking potatos and randomly its just like ur potato warranty has ended proceed with caution",
  "Scientists baffled as women are giving birth to potatoes at alarming rates: and how this could effect the economy",
  "hello we've been trying to contact you about your potato's extended warranty",
  "we do not speak of yams here",
  "Just in, Grandma is in a high speed pursuit throwing potatoes at innoncent citizens",
  "Is mashed potatoes irish guacamole?",
  "ScienceCrafter pinned a message to this channel. See all the pins. Today at 12:53",
  "Potato 101",
  "Economists baffled as new potato based currency is used in ireland: \"it just shouldn't work\" says investor Yamie Terr",
  "Potato Coins are now officially worth more than bitcoins, prices may go up in the future",
  "New Currency Potato Coins worth more than a dollar",
  "Potato Coins Skyrockets as first trillionaire, Max Spud, Made His Money by investing Potato Coins",
  "Potato sales have risen while Yams crash: and what this means for the oil industry",
  "The Inca Indians in Peru were the first to cultivate potatoes around 8,000 BC to 5,000 B.C. In 1536 Spanish Conquistadors conquered Peru, discovered the flavors of the potato, and carried them to Europe. Sir Walter Raleigh introduced potatoes to Ireland in 1589 on the 40,000 acres of land near Cork.",
  "everything tastes better with potatoes, even potatoes!",
  "potato farmers find new uses for potato. one farmer says \"well I just put a potato into an oven to see if I would get a different kind of potato\"",
  "Local Florida man arrested after stacking hundreds of mashed potatoes allegedly to \"learn the difference between one and two mashed potatoes\" police were called when the stack of potatoes became a safety concern for neighbors",
  "potato farmer discovers new use for potatoes other than growing more potatoes, \"apparently they were edible\" says Spudly",
  "Man makes potato buddy out of loneliness, calls it a spuddy",
  "News tickers, just as Joel_ unintended",
  "there aren't too many good potato jokes to make, so just pretend this was a funny one",
  "spud",
  "tater",
  "\"the potato robber just stole a seed from you ;)\" and make it steal an actual seed from you -KEKE",
  "hello? is anyone there? can you hear me? I'm stuck inside the potato news ticker factory and I don't have much more time left to-",
  "Man found with two potatoes. He died instantly. dude couldn't handle the power",
  "Pothanos has snapped half the potatoes out of existence",
  "Master every step in the potato path to achieve enlightenment",
  "shh dont tell anyone you can have 2 potatoes by having one in your kitchen and the other one on han-- IT DOES NOT COUNT",
  "Potatoes: The other, other white meat",
  "Potatoes, a great substitute for apples!",
  "I am the Seed of my Potato, Potato is my Body and Butter is my Blood. I have created over a Thousand Seeds, Unknown to Starch, Nor known to Hunger. Have withstood Arthritis to create many Potatoes Yet those Hands will never hold Anything. So, as I Pray-- Unlimited Potato Works",
  "When light was created, so were potatoes",
  "The year is 1944, ScienceCrafter can't release updates for OPI because he doesn't exist yet",
  "\"No, I didn't steal any of these news ticker messages from antimatter dimensions\" -ScienceCrafter",
  "A potato is you!",
  "https://www.youtube.com/watch?v=OB6VcjGsu7k",
  "Potatoes? Why would we need a word to describe more than one Potato?",
  "\"Oooo Got ticker idea\" -trash_panda     \"What is it?\" -Zman     \"Forgot\" -trash_panda",
  "We just couldn't stop at baked potatoes, and now we have fries? What next, ultra thin potatoes, why no one would like that",
  "mfw(my face when) no update&#x1F614&#x1F62D in 13 (13) whole plank times&#x1F62D&#x1F553&#x1F553&#x1F97A&#x1F621&#x1F624&#x1F44F&#x1F631&#x1F976 like&#x1F496&#x1F60E if if u agree!1!&#x1F60E! &#x1F92F&#x1F44F&#x1F614",
  "Scientists have successfully created a computer out of  potatoes, local internet comedian warns this could herald a new age of \"bad PC jokes\"",
  "And then he turns himself into a potato! Calls himself 'potato rick'! Funniest thing i've ever seen",
  "Local man has been discovered to have built a so called 'potato shrine' in the sewers. It was constructed out of peels, chips, and fries, and has been there since at least 2017, more on that later",
  "A new study has come out linking the consumption of antimatter with increased risk of hyper-obsessive potato baking.  Farmers suggest eating more.",
  "This just in: Researchers studying the effects of potato juice injections to cure the common cold create first potato man hybrid. Quote: \"It sits on the couch now, all the time... but at least it can't catch a cold!\"",
  "Tonight at 4, New ultra thin potatoes become the new world icon",
  "Taste the potato.",
  "My name is Idaho Montoya, you peeled my father, prepare to fry",
  "police have recently preformed a raid on illegally owned potato cannons, guns, and launchers yesterday on the local deep frying mafia, more on that later...",
  "a local potato was briefly transformed into an eldrich abomination, more on that later",
  "i don't see why you would need cookies or antimatter, they aren't nearly as versatile as potatoes",
  "use code: \"secret\" for... um... well... secrets, i guess",
  "Breaking news, the creation of fries has broken the economy. Scientists quickly fix the error",
  "Tragic Accident Spoils a Spud. Potatoh no.",
  "Potato Coin Market Crash Leaves Ireland Destitute. Thousands Starve.",
  "Idaho Elects Potato Governor, Becomes World's First Utopian Society",
  "Millions Left Distraught as Neil Armstrong Forgets Potato at Home on First Moon Landing",
  "\"Alright I'm gonna stop spending all of my brainpower on potato headlines for now\" - Liar",
  "Has Science Gone too far? Controversial new Study Suggests That Making Potato Based Headlines is Quote: \"A Waste of Time.\"",
  "GOOD NEWS EVERYONE! turns out we are in the better timeline. we looked into another universe's 2020 and oh boy they had way less glorious potato.",
  "Rioters Ransack Moscow Amidst Talks to Ban Vodka Over Concerns of \"Potato Cruelty\"",
  "The term \"couch potato\" has been determined to be offensive to potatoes, lawsuits pending",
  "each pixel of this message is made from a nano potato.",
  "scientist have managed to split a neutron in a room temperature fission event. a potato was found inside.",
  "I just wanted name name in the ticker - casinodoug",
  "Upon further intensive scientific review by the International Farmers Associations, it was announced that one potatoe is equivalent to one potato. The world has lost its mind.",
  "new law declares teeter totters will now be called tater totters, violations will result in immediate execution",
  "fun fact: did you know the potatoes are getting closer every second?",
  "\"hey look mom i'm on the news ticker!\" -MaxietheTaxi",
  "Potato comes in with 97% of the popular vote. In unrelated news 3% of the population has mysteriously disappeared.",
  "taters gonna tate tate tate tate -Tater Swift",
  "have I ever told you the story of dark potato the wise? I thought not...",
  "when the potato is sus!",
  "One potato, two potato, hearty potato, blue potato",
  "tip: hold enter after clicking a button to auto-spam it",
  "did you know? real potatoes don't have seeds! (the dev is not aware of this information)",
  "what does cloning do???? -everyone (because the dev doesn't know how to make tooltips)",
  "Wow [funny potato joke here] haha!",
  "Potato, from potatopedia the free encyclopedia",
  "Potatos rotat e    potatos ROTAT E     potat o     rotato faster potato      go      g      O    can u fEel it„ p o t at po ?      yES FEEL TH e SPED      WE HAV REAHCED MXAIMUN VLELOCIPY Are you okay? who are you to accuse me",
  "[hyperlink blocked]",
  "A potato flew around my room",
  "no &#x1F620",
  "burger",
  "Watch in awe as the news ticker messages continue their eternal migration to the left side of the screen!",
  "local dog eats emergency potato supply: becomes potato god",
  "Florida Man attempts to eat largest potato ever, breaks neck",
  "\"is my physical health worth a x2 money increase on a game about virtual, singular potatoes? probably\" -ThatOneShinyEevee",
  "\"Only one potato can exist at a time. If you see two, it's actually the same potato moving rapidly\" -ThatOneShinyEevee",
  "Big potato is watching.  His eyes are everywhere",
  "Punks now start their songs with one-potato, two-potato, three-potato, FOUR!",
  "breaking news! We've solved the problem of farming in other planets. In other unrelated news, mars is covered in potatoes",
  "According to the Guinness Book of World Records, the largest potato grown was 7 pounds 1 ounce by J. East (1953) and J. Busby (1982) of Great Britain. Potatoes are about 80% water.",
  "Humans share about 1/3 of their DNA with potatoes",
  "Breaking news, apparently people are 33% potato according to science",
  "in every world there is light and dark, yin and yang, potato and tomato.",
  "remind the dev to add more news messages!",
  "you can suggest your own messages in the discord server!",
  "remind the dev to add more news messages!",
  "you can suggest your own messages in the discord server!"
]
var news_queue = [
  "Welcome to One Potato Incremental! Get started by turning your potato into seeds and then planting them",
  "Look at the achievements for more tips [END OF TUTORIAL]",
]


function newNews() {
  news_p = document.getElementById("news")
  var message
  // first we get the message
  if (news_queue.length != 0) {
    message = news_queue.shift() // if there's a special message in queue, we add it
  } else {
    message = messages[Math.floor(Math.random()*messages.length)] // otherwise we pick a random message from the list
  }
  // then we add some amount of spaces
  var bar_size = Math.ceil(document.getElementById("news_bar").offsetWidth / 8.2)
  news_p.innerHTML = " ".repeat(bar_size+5)
  // then we add the news
  news_p.innerHTML += message
  runNews()
}

function runNews() {
  if (buffer) {
    news_p.style.left = 0
    buffer = false
  } else {
    news_p.style.left = 4.2
    news_p.innerHTML = news_p.innerHTML.substring(1)
    buffer = true
  }
  if (news_p.innerHTML != "") {
    setTimeout(runNews, 30)
    return
  }
  newNews()
}
