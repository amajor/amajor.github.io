import React from 'react';

const MediumArticles = (props) => {
  const { title, link, thumbnail, content, pubDate } = props.articleData;

  function article() {
    const articleTitle = truncateText(cleanTitle(title), 0, 60);
    const articleContent = truncateText(toText(content), 48, 300) + "...";
    const articlePublicationDate = convertDate(pubDate);

    return (
      <div className="card">
        <img src={`${thumbnail}`} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{articleTitle}</h5>
          <p className="card-text">{articleContent}</p>
          <p className="card-text"><em>{articlePublicationDate}</em></p>
          <a target="_blank" rel="noreferrer" className="btn btn-primary" href={`${link}`}>
            Read more...
          </a>
        </div>
      </div>
    )

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
