const ProductDescription = ({ product }) => {
    return (
        <div id="description-div">
            <h1>{product[0]?.name}</h1>
            <h3>Year: {product[0]?.year}</h3>
            <h3>Model: {product[0]?.model}</h3>
            <h3>Color: {product[0]?.color}</h3>
            <p><h3>About This Product:</h3> {product[0]?.description}</p>
            <h3>In Stock? {product[0]?.available ? "Yes" : "No"}</h3>
            <h3>Price: ${product[0]?.price}</h3>
        </div>
    )
}

export default ProductDescription;