import React from 'react';

const MediumArticles = (props) => {
  const { title, link, thumbnail, content, pubDate } = props.articleData;

  function article() {
    return <a target="_blank" rel="noopener" href={`${link}`}>
      <div className="image-container">
        <img src={`${thumbnail}`} className="image" alt={truncateText(cleanTitle(title), 0, 60)}></img>
      </div>
      <div className="td-container">
        <h3>{truncateText(cleanTitle(title), 0, 60)}</h3><br />
        <p>{truncateText(toText(content), 48, 300) + "..."}</p><br />
        <h4>{convertDate(pubDate)}</h4>
      </div>
    </a>

  }

  function cleanTitle(checkTitle) {
    checkTitle = checkTitle.replace("amp;", "");
    return checkTitle
  }

  function truncateText(text, start, len) {
    return text.length > len ? text.slice(start, len) : text;
  }

  function toText(block) {
    let tag = document.createElement('div');
    tag.innerHTML = block;
    block = tag.innerText;
    return block
  }

  function convertDate(date) {
    let dateArray = date.slice(0, 10).split("-")
    let year = dateArray.shift();
    dateArray.push(year)
    console.log(date)
    return `Published: ${dateArray.join("/")}`;
  }

  return (
    <div className="article-container">
      {article()}
    </div>
  );
}

export default MediumArticles;
