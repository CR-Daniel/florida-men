let score = 0;
let highScore = 0; // add this line to track high score
let correctCard;

const correctStatements = [
  'The sky is blue',
  'Apples are red',
  'Dogs say bark',
  // add more correct statements as needed
];

const wrongStatements = [
  'The sky is green',
  'Apples are blue',
  'Dogs say meow',
  // add more wrong statements as needed
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
