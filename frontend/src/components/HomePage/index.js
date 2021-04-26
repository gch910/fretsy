import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { categories } from "../../store/categories";
import { getProductsByCategory, unloadProductsByCategory1, unloadProductsByCategory2 } from "../../store/products";
// import { getProductsByCategory2 } from "../../store/products";
import { getProductsByShop } from "../../store/products";
import { getProductsByShop2 } from "../../store/products";
import { getProductsByShop3 } from "../../store/products";
import { getAllShops} from "../../store/shops";
import { Redirect, Link, useParams } from "react-router-dom";
import "./HomePage.css";
import Banner1Categories from "./Banner1Categories";
import Banner3Categories from "./Banner3Categories";
import Banner5Categories from "./Banner5Categories";
import LoginHome from "./LoginHome";
import Banner6Shops from "./Banner6Shops";
// import category from "../../backend/db/models/category";

const HomePage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const categoryObject = useSelector((state) => state.categories);
  const productsByCategory1 = useSelector((state) => state.products.category1);
  const productsByCategory2 = useSelector((state) => state.products.category2);
  const productsByCategory =  useSelector((state) => state.products);
  const shops = useSelector(state => state.shops);
  const [isLoaded, setIsLoaded] = useState(false);

  const shopArray = Object.values(shops);

  let categoryValues = Object.values(categoryObject);
  
  const randomGenerator = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };
  // let productCategoryValues = Object.values(productsByCategory);
  // let shopNumber = Number(shopArray.length);
  // const randomShop= () => {
  //   const number = Math.ceil(Math.random() * 8);
  //   return number;
  // };
  let randomShopNumber1 = randomGenerator(1, 8);
  let randomShopNumber2 = randomGenerator(1, 8);
  let randomShopNumber3 = randomGenerator(1, 8);
  // console.log("shop number", shopNumber)

  // const randomCategory1 = productsByCategory?.category1;
  // const randomCategory2 = productsByCategory?.category2;

  // const test2 = productsByCategory.category1?.name
  // console.log(randomCategory1, randomCategory2);

  const allCategories = categoryValues;

  let random = Math.floor(Math.random() * 2);

  if (categoryValues.length > 4) {
    if (random >= categoryValues.length - 4) {
      random -= 4;
    }

    if (sessionUser) {
      categoryValues = categoryValues?.slice(random, random + 5);
    } else {
      categoryValues = categoryValues?.slice(random, random + 4);
    }
  }

  let categoryName1;

  if(productsByCategory1) categoryName1 = productsByCategory1[0]?.Category?.name

  let categoryName2;

  if(productsByCategory2) categoryName2 = productsByCategory2[0]?.Category?.name

  // let categoryName2;



  // if (productsByCategory1) {
  //   categoryName1 = allCategories.find(
  //     (value) => value?.id == productsByCategory1[0]?.categoryId
  //   );

  //   console.log("CATEGORY NAME", categoryName1)
  // }

  //  if (productsByCategory2) {
  //   categoryName2 = allCategories.find(
  //     (value) => value?.id == productsByCategory2[0]?.categoryId
  //   );
  // }

  // let random2 = randomGenerator(1, 7);

  // const randomGenerator3 = () => {
  //   const number = Math.ceil(Math.random() * 4);
  //   return number;
  // };

  // let random3 = randomGenerator(1, 7);
  // console.log(thisShoulNotChange);
  // if (random2 === random3) {
  //   if (random3 >= 1) {
  //     random3 -= 1;
  //   } else {
  //     random3 += 1;
  //   }
  // }

  useEffect(() => {
    dispatch(categories());
    dispatch(getAllShops())

  
  }, [dispatch]);

  useEffect(()=> {
    
    dispatch(getProductsByCategory())
    // dispatch(getProductsByCategory2(random3));
    dispatch(getProductsByShop(randomShopNumber1));
    dispatch(getProductsByShop2(randomShopNumber2));
    dispatch(getProductsByShop3(randomShopNumber3)).then(()=> setIsLoaded(true))

    return ()=> {
      dispatch(unloadProductsByCategory1())
      dispatch(unloadProductsByCategory2())
      console.log("=======================")
    }
    
  },[])

  // if (!sessionUser) return <Redirect to="/login" />;
  if (!sessionUser) {
    return isLoaded && (
      <div id="home-page-grid">
        <LoginHome categoryValues={categoryValues} />
        <Banner3Categories randomCategory1={productsByCategory1} />
        <Banner5Categories randomCategory2={productsByCategory2} />

        <div className="banner-2">
          <div id="banner2-h1-container">
            <h1 id="banner2-text">Check out some of our {categoryName1}</h1>
          </div>
        </div>

        <div className="banner-4">
          <h1 id="banner4-text">How about some {categoryName2}</h1>
        </div>
        {/* <div className="banner-6">
          <h1>6</h1>
        </div> */}
        <Banner6Shops products={productsByCategory}/>
      </div>
    );
      }
  //category.map lines 13/14
  return isLoaded &&  (
    <div id="home-page-grid">
      <Banner1Categories categoryValues={categoryValues} />
      <Banner3Categories randomCategory1={productsByCategory1} />
      <Banner5Categories randomCategory2={productsByCategory2} />

      <div className="banner-2">
        <div id="banner2-h1-container">
          <h1 id="banner2-text">Check out some of our {categoryName1}</h1>
        </div>
      </div>

      <div className="banner-4">
        <h1 id="banner4-text">How about some {categoryName2}</h1>
      </div>
      {/* <div className="banner-6">
          <h1>6</h1>
      </div> */}
      <Banner6Shops products={productsByCategory}/>
    </div>
  );
};

export default HomePage;
