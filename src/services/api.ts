const API_URL = 'https://poetrydb.org/poemcount/20';

export const fetchPoems = async () => {
  try {
    const response = await fetch(`${API_URL}/poemcount/20`);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    throw new Error('Error fetching poems');
  }
};
