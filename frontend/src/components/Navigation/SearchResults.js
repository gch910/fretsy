import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SearchResults.css";

const SearchResults = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.search_results);

  return (
    <>
      <h1 id="search-results-h1">Results</h1>
      <div id="search-results-grid">
        {products?.map((product) => (
          <div className="category-product">
            <div id="search-results-image-div">
              <Link to={`/products/${product?.id}`}>
                <img id="search-results-image" src={product?.img}></img>
              </Link>
            </div>
            <Link id="search-results-h3" to={`/products/${product?.id}`}>
              <h3>{product?.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchResults;
