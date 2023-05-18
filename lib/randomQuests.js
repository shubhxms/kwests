const getRandomQuests = async (n, allQuests) => {
  // returns n unique quests from all quests

  // let quests = []

  const quests = allQuests.slice();

  // Shuffle the array using Fisher-Yates algorithm
  for (let i = quests.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [quests[i], quests[j]] = [quests[j], quests[i]];
  }

  // Take the first n elements from the shuffled array

  return quests.slice(0, n);
};

export default getRandomQuests;