import "./App.css";
import Home from "./Home";
import Main from "./Main";
import Images from "./Images";
import { useState } from "react";

function App() {
  const [data, setData] = useState({});

  const searchData = (responseData) => {
    setData(responseData);
  };
  console.log(data);

  return (
    <div>
      <Home />
      <Main searchData={searchData} />
      <br />

      {Object.keys(data).length > 0 && (
        <p className="container">About {data.totalItems} books found</p>
      )}

      {Object.keys(data).length > 0 && <Images data={data} />}
    </div>
  );
}

export default App;
