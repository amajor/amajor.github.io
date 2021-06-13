import React, { useState, useEffect } from 'react';
import MediumArticles from '../MediumArticles';

const MediumArticlesContainer = () => {
    const mediumUser = "@amajordeveloper";
    const mediumFeed = `https://medium.com/feed/${mediumUser}`;
    const rss2json = `https://api.rss2json.com/v1/api.json?rss_url=${mediumFeed}`;
    const [myArticle, setMyArticle] = useState([]);

    useEffect(() => {
      fetch(rss2json)
        .then(res => res.json())
        .then(data => {
          setMyArticle(data)
          console.log(data)
        })
    }, [rss2json]);

    function displayArticles() {
      console.log(myArticle)
      return myArticle.items && myArticle.items.map(article => {
        return article.categories.length > 0 && <MediumArticles key={article.pubDate} articleData={article} />
      })
    }

    return (
      <div className="articles-container">
        {displayArticles()}
      </div>
    );
}

export default MediumArticlesContainer;
