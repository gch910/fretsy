import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { categories } from "../../store/categories";
import { getProductsByCategory } from "../../store/products";
import { getProductsByCategory2 } from "../../store/products";
import { Redirect, Link, useParams } from "react-router-dom";
import "./HomePage.css";
import LoginFormPage from "../LoginFormPage";
import Banner1Categories from "./Banner1Categories";
import Banner3Categories from "./Banner3Categories";
import Banner5Categories from "./Banner5Categories";
import LoginHome from "./LoginHome";
// import category from "../../backend/db/models/category";

const HomePage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const categoryObject = useSelector((state) => state.categories);
  const productsByCategory = useSelector((state) => state.products);

  let categoryValues = Object.values(categoryObject);
  // let productCategoryValues = Object.values(productsByCategory);

  const randomCategory1 = productsByCategory?.category1;
  const randomCategory2 = productsByCategory?.category2;
  // const test2 = productsByCategory.category1?.name
  console.log(randomCategory1, randomCategory2);

  const allCategories = categoryValues;

  let random = Math.floor(Math.random() * categoryValues.length);

  if (categoryValues.length > 4) {
    if (random >= categoryValues.length - 4) {
      random -= 4;
    }

    if (sessionUser) {
      categoryValues = categoryValues.slice(random, random + 5);
    } else {
      categoryValues = categoryValues.slice(random, random + 4);
    }
  }

  let categoryName1;

  if (randomCategory1) {
    categoryName1 = allCategories.find(
      (value) => value?.id == randomCategory1[0]?.categoryId
    );
  }
  let categoryName2;

  if (randomCategory2) {
    categoryName2 = allCategories.find(
      (value) => value?.id == randomCategory2[0]?.categoryId
    );
  }

  const randomGenerator2 = () => {
    const number = Math.floor(Math.random() * 4);
    return number;
  };
  let random2 = randomGenerator2();
  const randomGenerator3 = () => {
    const number = Math.floor(Math.random() * 4);
    return number;
  };
  let random3 = randomGenerator3();
  // console.log(thisShoulNotChange);
  if (random2 === random3) {
    if (random3 >= 1) {
      random3 -= 1;
    } else {
      random3 += 1;
    }
  }

  useEffect(() => {
    dispatch(categories());
    dispatch(getProductsByCategory(random2));
    dispatch(getProductsByCategory2(random3));
  }, [dispatch]);

  // if (!sessionUser) return <Redirect to="/login" />;
  if (!sessionUser)
    return (
      <div id="home-page-grid">
        <LoginHome categoryValues={categoryValues}/>
        <Banner3Categories randomCategory1={randomCategory1} />
        <Banner5Categories randomCategory2={randomCategory2} />

        <div className="banner-2">
          <div id="banner2-h1-container">
            <h1>Check out some of our {categoryName1?.name}</h1>
          </div>
        </div>

        <div className="banner-4">
          <h1 id="banner4-text">How about some {categoryName2?.name}</h1>
        </div>
        <div className="banner-9">
          <h1>9</h1>
        </div>
      </div>
    );
  //category.map lines 13/14
  return (
    <div id="home-page-grid">
      <Banner1Categories categoryValues={categoryValues} />
      <Banner3Categories randomCategory1={randomCategory1} />
      <Banner5Categories randomCategory2={randomCategory2} />

      <div className="banner-2">
        <div id="banner2-h1-container">
          <h1>Check out some of our {categoryName1?.name}</h1>
        </div>
      </div>

      <div className="banner-4">
        <h1 id="banner4-text">How about some {categoryName2?.name}</h1>
      </div>
      <div className="banner-9">
        <h1>9</h1>
      </div>
    </div>
  );
};

export default HomePage;
