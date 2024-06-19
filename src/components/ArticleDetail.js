import React from 'react';
import { useLocation } from 'react-router-dom';

const ArticleDetail = () => {
  const location = useLocation();

  // Check if location.state and location.state.article are not null
  if (!location.state || !location.state.article) {
    // Handle the case where state or article is null (e.g., redirect to homepage, show an error message)
    return <div>Article not found</div>;
  }

  const { article } = location.state;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <img src={article.urlToImage} alt={article.title} className="w-full h-64 object-cover rounded" />
      <p className="text-gray-600 mt-4">{article.content}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2 block">
        Read full article
      </a>
    </div>
  );
};

export default ArticleDetail;
