import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { webUrl } from '../../Constants';
import Navbar from '../../Components/NavBar';

const LandingPage = () => {
  const [articles, setArticle] = useState([]);
  useEffect(() => {
    axios.get(`${webUrl}article/all`).then(response => setArticle(response.data.data));
  }, []);
  console.log(articles, 'articles');
  // for (let i = 0; i < 9; i++) {
  //   articles.push(
  //     <div className="card">
  //       <img
  //         src="https://www.studytonight.com/code/playground//examples/css/resources/no-error-meme.jpg"
  //         alt="Coding is great"
  //         style={{ width: '100%', maxWidth: '100%', objectFit: 'cover' }}
  //       />
  //       <div className="article-title">
  //         <p>This is the title for the article.</p>
  //       </div>
  //     </div>,
  //   );
  // }

  return (
    <>
      <Navbar />

      <div className="fav-article">
        <img
          src="https://www.bestfunforall.com/better/imgs/1%20node%20wallpaper%20%203.jpg"
          alt="Coding is great"
          style={{ width: '100%', height: '400px' }}
        />
      </div>

      <div className="article-container">
        {articles.map(eachArticle => (
          <div className="card">
            <img
              // src="https://www.studytonight.com/code/playground//examples/css/resources/no-error-meme.jpg"
              src={
                eachArticle.thumbnail && eachArticle.thumbnail.path
                  ? '/Users/wafttechnology/DummySetup/React/ShareKnowledgeServer/' +
                    eachArticle.thumbnail.path
                  : 'https://www.studytonight.com/code/playground//examples/css/resources/no-error-meme.jpg'
              }
              alt="Coding is great"
              style={{ width: '100%', maxWidth: '100%', objectFit: 'cover' }}
            />
            <div className="article-title">
              <p>{eachArticle.title}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LandingPage;
