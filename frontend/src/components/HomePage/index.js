import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { categories, getRandomCategories } from "../../store/categories";
import { getProductsByCategory } from "../../store/products";
import { getProductsByShop } from "../../store/products";
import { getProductsByShop2 } from "../../store/products";
import { getProductsByShop3 } from "../../store/products";
import { getAllShops} from "../../store/shops";
import "./HomePage.css";
import Banner1Categories from "./Banner1Categories";
import Banner3Categories from "./Banner3Categories";
import Banner5Categories from "./Banner5Categories";
import LoginHome from "./LoginHome";
import Banner6Shops from "./Banner6Shops";


const HomePage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const productsByCategory1 = useSelector((state) => state.products.category1);
  const productsByCategory2 = useSelector((state) => state.products.category2);
  const randomCat1 = useSelector((state) => state.categories.randomCat1);
  const randomCat2 = useSelector((state) => state.categories.randomCat2);
  //this is very general - we are grabbing all of the state from the products reducer
  const products =  useSelector((state) => state.products);
  const [isLoaded, setIsLoaded] = useState(false);

  
  const randomGenerator = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };
 
  let randomShopNumber1 = randomGenerator(1, 8);
  let randomShopNumber2 = randomGenerator(1, 8);
  let randomShopNumber3 = randomGenerator(1, 8);

  let categoryName1;

  if(productsByCategory1) categoryName1 = productsByCategory1[0]?.Category?.name

  let categoryName2;

  if(productsByCategory2) categoryName2 = productsByCategory2[0]?.Category?.name

  useEffect(() => {
    //this gets the random categories for banner1 - randomCat1 and login banner - randomCat2
    dispatch(getRandomCategories()).then(() => setIsLoaded(true))
    dispatch(categories());
    dispatch(getAllShops())
    //this is what gets the products from randomly generated categories and sets it on state.products
    //productsByCategory1 and productsByCategory2 are then passed as props to banners 3 and 5
    dispatch(getProductsByCategory())

  
  }, [dispatch]);

  useEffect(()=> {
    //these are used in banner6 to grab shops from state.products
    dispatch(getProductsByShop(randomShopNumber1));
    dispatch(getProductsByShop2(randomShopNumber2));
    dispatch(getProductsByShop3(randomShopNumber3));
    
  },[])


  if (!sessionUser) {
    return isLoaded && (
      <div id="home-page-grid">
        <LoginHome categoryValues={randomCat2} />
        <Banner3Categories randomCategory1={productsByCategory1} />
        <Banner5Categories randomCategory2={productsByCategory2} />

        <div className="banner-2">
          <div id="banner2-h1-container">
            <h1 id="banner2-text">{categoryName1 && "Check Out Some of Our " + categoryName1}</h1>
          </div>
        </div>

        <div className="banner-4">
          <h1 id="banner4-text">{categoryName2 && "How About Some " + categoryName2}</h1>
        </div>
        <Banner6Shops products={products}/>
      </div>
    );
      }

  return isLoaded &&  (
    <div id="home-page-grid">
      <Banner1Categories categoryValues={randomCat1} />
      <Banner3Categories randomCategory1={productsByCategory1} />
      <Banner5Categories randomCategory2={productsByCategory2} />

      <div className="banner-2">
        <div id="banner2-h1-container">
          <h1 id="banner2-text">{categoryName1 && "Check Out Some of Our " + categoryName1}</h1>
        </div>
      </div>

      <div className="banner-4">
        <h1 id="banner4-text">{categoryName2 && "How About Some " + categoryName2}</h1>
      </div>
      <Banner6Shops products={products}/>
    </div>
  );
};

export default HomePage;
