import "./Product.css"

const ProductImage = ({ product }) => {
  return (
    <div id="product-div">
      <h1>{product.name}</h1>
      <div className="product-image-div">
        <img id="product-image" src={`${product.img}`} />
      </div>
    </div>
  );
};

export default ProductImage;
