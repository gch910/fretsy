import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllProductsByCategory } from "../../store/products";
import "./CategoryItems.css";

const CategoryItems = () => {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const [params, setParams] = useState();
  
  // console.log(products.products);

  useEffect(() => {
    dispatch(getAllProductsByCategory(categoryId));
  }, [dispatch, categoryId]);

  return (
    <div>
      <div id="category-h1-div">
        <h1>{products?.categoryName?.name}</h1>
      </div>
      <div id="category-grid">
        {products?.products?.map((product) => (
          <div className="category-product">
            <Link to={`/products/${product?.id}`}>
              <h1>{product?.name}</h1>
            </Link>
            <Link to={`/products/${product?.id}`}>
              <img id="category-image" src={product?.img}></img>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryItems;
