function getRandomBio() {
  const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "She sells seashells by the seashore.",
    "He threw three free throws.",
    "How much wood would a woodchuck chuck if a woodchuck could chuck wood?",
    "I scream, you scream, we all scream for ice cream.",
    "A big black bug bit a big black bear.",
    "Peter Piper picked a peck of pickled peppers.",
    "Sally sells sea shells by the seashore.",
    "Sheena leads, Sheila needs.",
    "Fuzzy Wuzzy was a bear, Fuzzy Wuzzy had no hair.",
  ];

  const paragraphLength = Math.floor(Math.random() * 5) + 5; 
  let paragraph = "";

  for (let i = 0; i < paragraphLength; i++) {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    paragraph += sentences[randomIndex] + " ";
  }

  return paragraph.trim();
}

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateRandomAddress() {
  const streetNumbers = Array.from({ length: 100 }, (_, i) => i + 1);
  const streetNames = ['Main St', 'Second St', 'Third St', 'Elm St', 'Maple Ave', 'Oak St', 'Pine St', 'Cedar Ave'];
  const cities = ['Springfield', 'Riverside', 'Greenville', 'Franklin', 'Clinton'];
  const states = ['CA', 'TX', 'NY', 'FL', 'PA'];
  const zipCodes = Array.from({ length: 1000 }, (_, i) => `${10000 + i}`);

  const streetNumber = getRandomElement(streetNumbers);
  const streetName = getRandomElement(streetNames);
  const city = getRandomElement(cities);
  const state = getRandomElement(states);
  const zipCode = getRandomElement(zipCodes);

  return `${streetNumber} ${streetName}, ${city}, ${state} ${zipCode}`;
}

module.exports = { getRandomBio,generateRandomAddress};
