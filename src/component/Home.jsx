import React, { useEffect, useMemo, useState } from "react";
import { imagesData } from "../component/data";

const Home = () => {

  const [state, setState] = useState([]);
  useEffect(() => {
    setState(imagesData);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function getFilteredList() {
    if (!selectedCategory || selectedCategory === "all") {
      return state;
    }
    return state.filter((item) => item.cat === selectedCategory);
  }

  let filteredList = useMemo(getFilteredList, [selectedCategory, state]);

  return (
    <>
      <div className="container col-md-4 mt-3">
        <h1>Categories - Search</h1>
        <div className="d-flex mt-3 input-group" role="search">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(event) => setSelectedCategory(event.target.value)}
            data-testid="search-input"
          />
        </div>

        <div className="mt-3 d-flex justify-content-evenly">
          <button
            type="button"
            className="btn btn-dark"
            value="all"
            onClick={handleCategoryChange}
          >
            All
          </button>
          <button
            type="button"
            className="btn btn-dark"
            value="food"
            onClick={handleCategoryChange}
          >
            Food
          </button>
          <button
            type="button"
            className="btn btn-dark"
            value="wonders"
            onClick={handleCategoryChange}
          >
            Wonders
          </button>
          <button
            type="button"
            className="btn btn-dark"
            value="birds"
            onClick={handleCategoryChange}
          >
            Birds
          </button>
          <button
            type="button"
            className="btn btn-dark"
            value="places"
            onClick={handleCategoryChange}
          >
            Places
          </button>
        </div>
      </div>
      <div className="container mt-4">
        {filteredList.length === 0 ? (
          <div className="display-5 p-5 mt-5">No Result Found!</div>
        ) : (
          <div></div>
        )}
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-4 g-3" >
          {filteredList.map((item, key) => (
            <div className="col" key={key}>
              <img src={item.img} alt={item.cat} height="250" width="250" data-testid="search-result"/>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
