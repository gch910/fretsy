import { useSelector } from "react-redux";
import { Redirect, Link, useParams } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  // const id = useParams();
  const sessionUser = useSelector((state) => state.session.user);

  if (!sessionUser) return <Redirect to="/login" />;

  return (
    <>
      <div className="banner-1">
        <div className="banner1-img-div">
          {/* <Link to={`/categories/${id}`}> */}
            <img
              className="banner1-img"
              src="https://images.reverb.com/image/upload/s--ji_-4M-n--/f_auto,t_supersize/v1552861911/jwvuegzmrim71w639rol.jpg"
            ></img>
          {/* </Link> */}
        </div>
        <div className="banner1-img-div" id="banner1-img2">
          <img
            className="banner1-img"
            src="https://images.reverb.com/image/upload/s--ji_-4M-n--/f_auto,t_supersize/v1552861911/jwvuegzmrim71w639rol.jpg"
          ></img>
        </div>
        <h3 className="banner-img-text" id="banner-text-2">
          Goodbye
        </h3>
        <h3 className="banner-img-text" id="banner-text-1">
          Hello
        </h3>
      </div>
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
