import React from 'react';

const MediumArticles = (props) => {
  const { title, link, thumbnail, content, pubDate, categories } = props.articleData;

  const article = () => {
    const articleTitle = cleanTitle(title);
    const articleContent = toDescription(content);
    const articlePublisher = toPublisher(content);
    const articlePublicationDate = convertDate(pubDate);
    const articleCategories = categories.toString().replaceAll(",", ", ");

    return (
      <div className="card">
        <img src={`${thumbnail}`} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{articleTitle}</h5>
          <p className="card-text">
            {articleContent}
          </p>
          <p className="card-text">
            <small><em>{articlePublicationDate}</em></small>
          </p>
          <a target="_blank" rel="noreferrer" className="btn btn-dark" href={`${link}`}>
            Read on {articlePublisher}
          </a>
          <p className="card-text" style={{ marginTop: "20px" }}>
            <small><em>Categories: {articleCategories}</em></small>
          </p>
        </div>
      </div>
    )

  }

  const cleanTitle = (checkTitle) => {
    checkTitle = checkTitle.replace("amp;", "");
    return checkTitle
  }

  const toPublisher = (mediumContent) => {
    const regex = /Continue reading on (.+) »/gm;
    let m;
    let publisherName = "Medium";
    while ((m = regex.exec(mediumContent)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex) {
        regex.lastIndex++;
      }
      
      // The result can be accessed through the `m`-variable.
      // m.forEach((match, groupIndex) => {
      //   console.log(`Found match, group ${groupIndex}: ${match}`);
      // });

      publisherName = m[1];
    }
    return publisherName;
  }

  const toDescription = (block) => {
    let tag = document.createElement('div');
    tag.innerHTML = block;
    block = tag.innerText;
    const description = block.trim().split('\n')[0]; 
    return description;
  }

  const convertDate = (date) => {
    let dateArray = date.slice(0, 10).split("-")
    let year = dateArray.shift();
    dateArray.push(year)
    return `Published: ${dateArray.join("/")}`;
  }

  return (
    <div className="article-container">
      {article()}
    </div>
  );
}

export default MediumArticles;
