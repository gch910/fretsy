import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllShops } from "../../store/shops";
import { Link } from "react-router-dom";
import "./Shops.css";


const Shops = () => {
    const dispatch = useDispatch();
    const shops = useSelector(state => state.shops);

    const shopArray = Object.values(shops);
    console.log(shopArray)

    useEffect(() => {
        dispatch(getAllShops())
    }, [dispatch])
    
    return (
        <div id="shops-div">
            {shopArray?.map(shop => (
                <div id="shop-div">
                    <Link to={`/shop-items/${shop.id}`}>
                       <h1 id="shop-h1">{shop.name}</h1>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Shops;