let score = 0;
let highScore = 0; // add this line to track high score
let correctCard;

const correctStatements = [
    "Florida woman backing pickup out of driveway hits gas instead of brake, plows into house across the street -- all the way into the house",
    "Florida man accused of assaulting girl lured away from birthday party",
    "Florida Woman thought to have stuffed 93 year-old dead Mom in freezer",
    "Florida man strikes again, Brandon Duhaime absolutely whomps Logan O’Connor in this scrap, so many haymakers 🥊 #mnwild - Alex Micheletti on Twitter",
    "Florida man charged with hate crimes for 'racially-motivated' attack against Black driver",
    "Florida Man, Sheriff's office volunteer accused of selling oxycodone from patrol car",
    "Florida man shot and killed while attempting to steal pizza and Pokemon cards from Target",
    "Florida man wrongfully convicted for 3 decades on his release: ‘I never stopped believing’",
    "Florida Woman offers ex-husband in home sale: He'll cook and clean",
    "Police: Florida man claims he’s Jesus, kisses a minor in gym locker room",
    "Florida Man Arrested After Baby Alligator, Guns, Drugs Found Inside Truck",
    "Police: Florida man says he was Jesus, traps minor in locker room, kisses him",
    "Florida Nursing Assistant Caught Sexually Abusing 90-Year-Old Woman Under His Care",
    "Appeals Court Upholds Conviction Of Florida Man That Robbed Coin Laundry, Fled With Loot In Plastic Pumpkin",
    "Florida Man Found Naked, Screaming In Local Front Yard",
    "Mostly Nude Florida Woman Airbnb Renter 'is a narcotics user with a history of violent, erratic behavior and keeps 'a collection of butcher knives'” in her room",
    "Florida Man Arrested For Beating Puppy Tells Police: 'I Know I Spanked Him Hard'",
    "Florida Man attempts to cut, then saw off, ankle monitor",
    "Florida Man orders sushi, steals Buddha statue, puts it in his car and returns to restaurant for his food.",
    "Florida man attempts to cut, then saw off, ankle monitor",
    "Florida woman charged with child abuse after slapping 1-year-old",
    "Florida Man, teacher confessed to hiding camera in school bathroom in suicide note",
    "Florida Man on meth bites deputy after running through traffic in Tampa",
    "Florida Woman kills man who tried to run her over with her own car, Tampa police say",
    "Florida Man removes helicopter wreckage from lake. Finds another wrecked helicopter right next to it.",
    "Florida man confesses to video calling strangers while naked",
    "Florida man gets 2 years in prison for golf cart thefts",
    "Florida Man Uses State's New Book-Banning Law To Object To The Bible",
    "Florida sheriff encourages people to shoot burglars to ‘save the taxpayers money’",
    "Elderly duffer Florida Man chases, then shoots man, and beats him with a golf club, for walking his dog on the course.",
    "Spider monkey with 'Batman' markings born at Florida man's zoo",
    "Florida Man attacks Uber driver for making U-turn.",
    "Florida Man Arrested After Making Random Obscene Video Calls To Strangers",
    "Florida Man Steals From Home Depot, Beats Employees And Customers Who Tried To Stop Him",
    "Florida mom threatens to ‘blow up’ school because son wasn’t fed enough at cafeteria",
    "Florida Man Pleads Guilty To Possession Of A Ghost Machinegun",
    "Florida man catches a gator using a trash can",
    "Florida man sheriff says go ahead and shoot burglars, save the taxpayers some money",
    "Florida bride and caterer charged after serving marijuana-laced food at wedding",
    "Florida man seeks Bible ban throughout the state's schools",
    "Florida Man Runs From Deputies, 25 Feet Up A Tree With Some Loose Boots",
    "Florida woman threatens to blow up her son’s high school because he wasn’t being fed enough food in cafeteria",
    "Alligator found scratching at front door of Florida man's home",
    "Florida Man Sets World Record By Watching 'Spider-Man: No Way Home' 292 Times In Theaters",
    "Florida woman sues after presidential politics turned a $75 used couch purchase into a $30K Tampa Bay lawsuit",
    "Florida Woman Bride Who Spiked Wedding Food With Pot Facing Felony Charges",
    "Florida Woman, Teacher Arrested After Smacking Student With A Broomstick",
    "Florida Man and Woman toss fish into Alabama for prizes.",
    "Florida man cop smiles for mug shot after getting arrested on DUI charge",
    "Florida Man Wanted In Three States For Scamming Investors Out Of Cash",
    "Clearwater police charge Florida Woman teacher with DUI after finding 6 vodka bottles in car, affidavit says",
    "Florida man arrested in Pace home invasion spree; homeowner offered shooting lessons",
    "Clearwater police charge Florida woman teacher with DUI after finding 6 vodka bottles in car",
    "Competency evaluation filed for Florida woman who ran naked through Aldi parking lot",
    "Florida man DUI driver arrested after colliding with stopped FHP cruiser on each one, and no return/line break. I need them all to be on one line. Please also remove any duplicate lines. Thank you."
];

const wrongStatements = [
    "Florida Man Uses Alligator as Makeshift Boat Oar During Flood",
    "Florida Woman Claims to have Found Jimmy Hoffa's Remains in her Backyard",
    "Florida Man Arrested for Attempting to Sell Invisible Artwork",
    "Florida Woman Marries a Palm Tree, Claims it is the Love of her Life",
    "Florida Man Evicts Iguana from his Property Using Hot Sauce and a Flamingo Statue",
    "Florida Man Arrested for Teaching Squirrel to Steal Lawn Decorations",
    "Florida Woman Claims her Parrot can Predict Lottery Numbers",
    "Florida Man Trapped in Vending Machine while Trying to Steal Snacks",
    "Florida Woman Protests Speed Limit by Riding a Tortoise Down Main Street",
    "Florida Man Uses Buried Treasure Map Found in Thrift Store Book, Discovers Old Pirate's Booty",
    "Florida Woman Arrested for Using Drone to Deliver Cupcakes to Neighbors",
    "Florida Man Builds Moat around his House to Keep Away Pesky Salespeople",
    "Florida Woman Claims her Hair Extensions are Made from Sasquatch Fur",
    "Florida Man Evicts Skunk from his Property Using a Didgeridoo and Vegemite",
    "Florida Woman Finds Mermaid Scale in her Bowl of Cereal, Declares herself Queen of the Ocean",
    "Florida Man Arrested for Trying to Race an Alligator on a Hoverboard",
    "Florida Woman Claims to have Discovered a New Constellation from her Porch Swing",
    "Florida Man Steals Ice Cream Truck, Leads Police on Slow-Speed Chase",
    "Florida Woman Hosts Seance to Contact the Spirit of her Late Goldfish",
    "Florida Man Uses Coconut Shells as Makeshift Armor during Supermarket Brawl",
    "Florida Woman Claims she has Found the Fountain of Youth in her Garden Pond",
    "Florida Man Rides Ostrich to Work in Protest of High Gas Prices",
    "Florida Man Claims his Cat has Predicted the End of the World",
    "Florida Woman Uses Flamethrower to Roast Thanksgiving Turkey",
    "Florida Man Uses Alligator as Makeshift Boat Oar During Flood",
    "Florida Woman Claims to have Found Jimmy Hoffa's Remains in her Backyard",
    "Florida Man Arrested for Attempting to Sell Invisible Artwork",
    "Florida Woman Marries a Palm Tree, Claims it is the Love of her Life",
    "Florida Man Evicts Iguana from his Property Using Hot Sauce and a Flamingo Statue",
    "Florida Man Arrested for Teaching Squirrel to Steal Lawn Decorations",
    "Florida Woman Claims her Parrot can Predict Lottery Numbers",
    "Florida Man Trapped in Vending Machine while Trying to Steal Snacks",
    "Florida Woman Protests Speed Limit by Riding a Tortoise Down Main Street",
    "Florida Man Uses Buried Treasure Map Found in Thrift Store Book, Discovers Old Pirate's Booty",
    "Florida Woman Arrested for Using Drone to Deliver Cupcakes to Neighbors",
    "Florida Man Builds Moat around his House to Keep Away Pesky Salespeople",
    "Florida Woman Claims her Hair Extensions are Made from Sasquatch Fur",
    "Florida Man Evicts Skunk from his Property Using a Didgeridoo and Vegemite",
    "Florida Woman Finds Mermaid Scale in her Bowl of Cereal, Declares herself Queen of the Ocean",
    "Florida Man Arrested for Trying to Race an Alligator on a Hoverboard",
    "Florida Woman Claims to have Discovered a New Constellation from her Porch Swing",
    "Florida Man Steals Ice Cream Truck, Leads Police on Slow-Speed Chase",
    "Florida Woman Hosts Seance to Contact the Spirit of her Late Goldfish",
    "Florida Man Uses Coconut Shells as Makeshift Armor during Supermarket Brawl",
    "Florida Woman Claims she has Found the Fountain of Youth in her Garden Pond",
    "Florida Man Rides Ostrich to Work in Protest of High Gas Prices",
    "Florida Man Claims his Cat has Predicted the End of the World",
    "Florida Woman Uses Flamethrower to Roast Thanksgiving Turkey"
];

function pickStatements() {
  const randomIndex = Math.floor(Math.random() * correctStatements.length);
  correctCard = Math.random() < 0.5 ? 1 : 2;

  document.getElementById('statement-1').innerText = correctCard === 1 ? correctStatements[randomIndex] : wrongStatements[randomIndex];
  document.getElementById('statement-2').innerText = correctCard === 2 ? correctStatements[randomIndex] : wrongStatements[randomIndex];

  // Reset card colors
  document.getElementById('card-1').classList.remove('correct', 'wrong');
  document.getElementById('card-2').classList.remove('correct', 'wrong');
}

function guess(cardNumber) {
  const card = document.getElementById(`card-${cardNumber}`);
  if (cardNumber === correctCard) {
    score++;
    // Check if the new score is higher than the high score and update if it is
    if (score > highScore) {
      highScore = score;
      document.getElementById('high-score').innerText = highScore;
    }
    card.classList.add('correct');
  } else {
    score = 0;
    card.classList.add('wrong');
  }

  document.getElementById('score').innerText = score;

  // Add a delay before loading new statements to allow the player to see the result
  setTimeout(pickStatements, 1000); 
}

pickStatements(); // load initial statements
``
