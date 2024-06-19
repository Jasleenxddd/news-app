import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => {
  const { title, urlToImage, description } = article;

  return (
    <div className="bg-white rounded shadow p-4">
      <img src={urlToImage} alt={title} className="w-full h-48 object-cover rounded" />
      <h2 className="text-xl font-bold mt-2">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
      <Link
        to={{
          pathname: `/article/${encodeURIComponent(title)}`,
          state: { article }
        }}
        className="text-blue-500 mt-2 block"
      >
        Read more
      </Link>
    </div>
  );
};

export default ArticleCard;
