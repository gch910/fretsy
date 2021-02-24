import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { categories } from "../../store/categories";
import { getProductsByCategory } from "../../store/products";
import { Redirect, Link, useParams } from "react-router-dom";
import "./HomePage.css";
import LoginFormPage from "../LoginFormPage";
import Banner1Categories from "./Banner1Categories";
import Banner3Categories from "./Banner3Categories";
// import category from "../../backend/db/models/category";

const HomePage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const categoryObject = useSelector((state) => state.categories);
  const productsByCategory = useSelector((state) => state.products);

  let categoryValues = Object.values(categoryObject);
  let productCategoryValues = Object.values(productsByCategory);

  const allCategories = categoryValues;

  let random = Math.floor(Math.random() * categoryValues.length);

  if (categoryValues.length > 4) {
    if (random >= categoryValues.length - 4) {
      random -= 4;
    }

    categoryValues = categoryValues.slice(random, random + 5);
  }

  const categoryName = allCategories.find(value => value?.id == productCategoryValues[0]?.categoryId)

  const randomCategory = () => {
    const number = Math.floor(Math.random() * 4);
    return number
  } 
  const random2 = randomCategory();
  // console.log(thisShoulNotChange);

  useEffect(() => {
    dispatch(categories());
    dispatch(getProductsByCategory(random2));
  }, [dispatch]);

  if (!sessionUser) return <Redirect to="/login" />;
  //category.map lines 13/14
  return (
    <div id="home-page-grid">
      <Banner1Categories categoryValues={categoryValues} />
      <Banner3Categories productCategoryValues={productCategoryValues} />

      <div className="banner-2">
        <h1>Check out some of our {categoryName?.name}</h1>
      </div>
      
      <div className="banner-4">
        <h1>4</h1>
      </div>
      <div className="banner-5">
        <h1>5</h1>
      </div>
      <div className="banner-6">
        <h1>6</h1>
      </div>
      <div className="banner-7">
        <h1>7</h1>
      </div>
      <div className="banner-8">
        <h1>8</h1>
      </div>
      <div className="banner-9">
        <h1>9</h1>
      </div>
    </div>
  );
};

export default HomePage;
