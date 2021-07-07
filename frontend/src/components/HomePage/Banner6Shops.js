import { Link  } from "react-router-dom";


const Banner6Shops = ({ products }) => {
  const productsArray = products?.productsByShop;
  const productsArray2 = products?.productsByShop2;
  const productsArray3 = products?.productsByShop3;

  return (
    <div className="banner-6">
      <div id="banner6-h1-div">
        <h1 id="banner6-h1">Explore Our Shops:</h1>
      </div>
      <div id="banner-shop-1">
        {productsArray?.map((product, idx) => (
          <div id="banner6-item-div">
            <div id="banner-name-1">
                <Link id="b6-shop-link" to={`/shop-items/${product?.Shop?.id}`}>
                  <h1 className="banner-name">{product?.Shop?.name}</h1>
                </Link>
            </div>
            <div>
              <div>
                <Link to={`/products/${product?.id}`}>
                  <img id="banner6-image" src={product?.img} />
                </Link>
                <Link id="b6-product-link" to={`/products/${product?.id}`}>
                  <h3>{product?.name}</h3>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div id="banner-shop-2">
        {productsArray2?.map((product) => (
          <div id="banner6-item-div">
            <Link id="b6-shop-link" to={`/shop-items/${product?.Shop?.id}`}>
              <h1 className="banner-name">{productsArray2[0]?.Shop?.name}</h1>
            </Link>
            <div>
              <Link to={`/products/${product?.id}`}>
                <img id="banner6-image" src={product?.img} />
              </Link>
              <Link id="b6-product-link" to={`/products/${product?.id}`}>
                <h3>{product?.name}</h3>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div id="banner-shop-3">
        {productsArray3?.map((product) => (
          <div id="banner6-item-div">
            <Link id="b6-shop-link" to={`/shop-items/${product?.Shop?.id}`}>
              <h1 className="banner-name">{productsArray3[0]?.Shop?.name}</h1>
            </Link>
            <div>
              <Link to={`/products/${product?.id}`}>
                <img id="banner6-image" src={product?.img} />
              </Link>
              <Link id="b6-product-link" to={`/products/${product?.id}`}>
                <h3>{product?.name}</h3>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner6Shops;
