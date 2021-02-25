import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react"
import { useParams } from "react-router-dom";
import { getCartItems } from "../../store/shoppingCart";

const ShoppingCart = () => {
    const { userId } = useParams();
    const sessionUser = useSelector((state) => state.session.user);
    const sessionCart = useSelector((state) => state.carts);
    const dispatch = useDispatch();

    const cartArray = Object.values(sessionCart)

    console.log("session cart", cartArray[0]?.Product)

    useEffect(() => {
        dispatch(getCartItems(userId))
    }, [dispatch])


    return (
        <div id="shopping-cart-grid">
            <h1>Here is your shopping cart</h1>
            <div>
                {cartArray?.map(item => (
                    <div>
                        <h1>{item?.Product.name}</h1>
                        <img src={item?.Product.img}></img>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ShoppingCart;