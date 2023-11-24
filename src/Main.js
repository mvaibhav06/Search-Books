import { useState } from "react";
import axios from "axios";

const Main = ({ searchData }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/books/v1/volumes",
        {
          params: {
            key: "AIzaSyDFG969vL9L-UA88qR4PpUQRnEey5X11sE",
            q: searchTerm,
          },
        }
      );
      searchData(response.data);
    } catch (error) {
      console.log("Error in fetching data: ", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <div className="container">
      <p className="dummy-data">
        You don't need to know the name of the book, if you know the name of
        <br />
        the author or publisher, just type, search and find
      </p>
      <form onSubmit={handleSubmit}>
        <div className="inp">
          <input
            className="form-control"
            placeholder="Type author, book name..."
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default Main;
