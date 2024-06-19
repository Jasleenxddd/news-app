import React, { useState, useEffect } from 'react';
import { fetchNews } from '../services/newsService';
import ArticleCard from './ArticleCard';
import Pagination from './Pagination';

const categories = ['business', 'entertainment', 'technology'];

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await fetchNews(category, page);
        setArticles(data.articles);
        setTotalPages(Math.ceil(data.totalResults / 20));
      } catch (err) {
        setError('Failed to fetch news');
      } finally {
        setLoading(false);
      }
    };
    loadNews();
  }, [category, page]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">NewsApp</h1>
      <div className="mb-4">
        {categories.map(cat => (
          <button
            key={cat}
            className={`px-4 py-2 mr-2 rounded ${category === cat ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {articles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </div>
  );
};

export default Home;
