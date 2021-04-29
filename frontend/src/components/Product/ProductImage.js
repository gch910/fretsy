import "./Product.css"

const ProductImage = ({ product }) => {
  return (
    <div id="product-div">
      <div className="product-image-div">
        <img id="product-image" src={`${product?.product?.img}`} />
      </div>
    </div>
  );
};

export default ProductImage;
