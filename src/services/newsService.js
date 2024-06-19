import axios from 'axios';

const API_KEY = '78c1ed8b165d4f8ab9a2d773e3a68cf4';
const BASE_URL = 'https://newsapi.org/v2';

export const fetchNews = async (category = '', page = 1) => {
  const url = `${BASE_URL}/top-headlines?country=us&category=${category}&page=${page}&apiKey=${API_KEY}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};
