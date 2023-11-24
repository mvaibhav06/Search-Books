import React from "react";

const Image = ({ title, author, publisher, url, onclick }) => {
  return (
    <div className="image-container">
      <img src={url} alt="title" />
      <div className="img-data">
        <h6>{title}</h6>
        <h6>Authors:</h6>
        <p>{author}</p>
        <h6>Publisher:</h6>
        <p>{publisher}</p>

        <a className="btn btn-secondary" href={onclick}>
          More
        </a>
      </div>
    </div>
  );
};

export default Image;
