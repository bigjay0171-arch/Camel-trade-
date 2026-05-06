import axios from 'axios';

// Get random joke from JokeAPI
export const getJokeFromJokeAPI = async (category = 'Any') => {
  try {
    const response = await axios.get(
      `https://v2.jokeapi.dev/joke/${category}?type=single`,
      { timeout: 5000 }
    );
    
    if (response.data.error) {
      throw new Error('Joke not found');
    }
    
    return {
      joke: response.data.joke,
      category: response.data.category,
      source: 'JokeAPI',
      type: 'single',
    };
  } catch (error) {
    throw new Error('Failed to fetch joke from JokeAPI');
  }
};

// Get random dad joke
export const getDadJoke = async () => {
  try {
    const response = await axios.get('https://icanhazdadjoke.com/', {
      headers: { Accept: 'application/json' },
      timeout: 5000,
    });
    
    return {
      joke: response.data.joke,
      category: 'Dad Jokes',
      source: 'Dad Jokes API',
      type: 'single',
    };
  } catch (error) {
    throw new Error('Failed to fetch dad joke');
  }
};

// Get joke from Official Joke API
export const getOfficialJoke = async () => {
  try {
    const response = await axios.get('https://official-joke-api.appspot.com/random_joke', {
      timeout: 5000,
    });
    
    return {
      joke: `${response.data.setup} ${response.data.punchline}`,
      category: response.data.type,
      source: 'Official Joke API',
      type: 'two-part',
    };
  } catch (error) {
    throw new Error('Failed to fetch official joke');
  }
};

// Get random joke from any source
export const getRandomJoke = async (source = 'random') => {
  const jokes = [
    () => getJokeFromJokeAPI('Any'),
    () => getDadJoke(),
    () => getOfficialJoke(),
  ];

  if (source === 'jokeapi') return getJokeFromJokeAPI('Any');
  if (source === 'dadjokes') return getDadJoke();
  if (source === 'official') return getOfficialJoke();

  // Random source
  const randomIndex = Math.floor(Math.random() * jokes.length);
  return jokes[randomIndex]();
};

// Get categorized joke from JokeAPI
export const getJokeByCategory = async (category) => {
  const validCategories = ['programming', 'knock-knock', 'general', 'Any'];
  
  if (!validCategories.includes(category)) {
    category = 'Any';
  }
  
  return getJokeFromJokeAPI(category);
};

// Available categories
export const JOKE_CATEGORIES = [
  { value: 'Any', label: '🎯 Any' },
  { value: 'programming', label: '💻 Programming' },
  { value: 'knock-knock', label: '🚪 Knock-Knock' },
  { value: 'general', label: '😂 General' },
];

// Joke sources
export const JOKE_SOURCES = [
  { value: 'random', label: '🎲 Random Source' },
  { value: 'jokeapi', label: '📚 Joke API' },
  { value: 'dadjokes', label: '👨 Dad Jokes' },
  { value: 'official', label: '🏆 Official Jokes' },
];
