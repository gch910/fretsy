import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { categories } from "../../store/categories";
import { Redirect, Link, useParams } from "react-router-dom";
import "./HomePage.css";
import LoginFormPage from "../LoginFormPage";

const HomePage = () => {
  // const id = useParams();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const categoryObject = useSelector((state) => state.categories);

  const categoryValues = Object.values(categoryObject)

  const categoryList = [];

  for(let i = 0; i < 4; i++) {
    const val = categoryValues[i];

    categoryList.push(val)
  }

  console.log(categoryList)

  useEffect(() => {
    dispatch(categories());
  }, [dispatch]);

  if (!sessionUser) return <Redirect to="/login" />;
  //category.map lines 13/14
  return (
    <>
      <div className="banner-1">
        {categoryList?.map((category, idx) => (
          <div className="banner1-img-div" id={`banner1-img${idx}`}>
            <Link to={`/categories/${category.id}`}>
              <img
                className="banner1-img"
                src="https://images.reverb.com/image/upload/s--ji_-4M-n--/f_auto,t_supersize/v1552861911/jwvuegzmrim71w639rol.jpg"
              ></img>
            </Link>
            <h3 className="banner-img-text" id={`banner-text-${idx}`}>{category.name}</h3>
          </div>
        ))}
      </div>

        {/* <div className="banner1-img-div" id="banner1-img2">
          <img
            className="banner1-img"
            src="https://images.reverb.com/image/upload/s--ji_-4M-n--/f_auto,t_supersize/v1552861911/jwvuegzmrim71w639rol.jpg"
          ></img>
        </div>
        <h3 className="banner-img-text" id="banner-text-2">
          Goodbye
        </h3>
      </div> */}
      <div className="banner-2">
        <h1>2</h1>
      </div>
      <div className="banner-3">
        <h1>3</h1>
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
    </>
  );
};

export default HomePage;
