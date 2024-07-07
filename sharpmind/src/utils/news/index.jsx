import React from 'react';
import './index.css';

const News = ({ news }) => {
  return (
    <div className='news-container'>
      <div className='news-heading'>
        <p>Latest News</p>
      </div>
      <div className="news">
        <ul>
          {news.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default News;
