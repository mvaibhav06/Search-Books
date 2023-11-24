import React from "react";
import Image from "./Image";

const Images = ({ data }) => {
  const books = data.items;
  const renderedImages = books.map((book) => {
    return (
      <Image
        key={book.id}
        title={book.volumeInfo.title}
        author={book.volumeInfo.authors[0]}
        publisher={book.volumeInfo.publisher}
        url={book.volumeInfo.imageLinks.thumbnail}
        onclick={book.saleInfo.buyLink}
      />
    );
  });
  return <div className="images">{renderedImages}</div>;
};

export default Images;
