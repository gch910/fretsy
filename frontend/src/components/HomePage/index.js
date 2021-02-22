import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const sessionUser = useSelector((state) => state.session.user);

  if (!sessionUser) return <Redirect to="/login" />;

  return (
    <>
      <div className="banner-1">
        <h1>Home Page</h1>
      </div>
    </>
  );
};

export default HomePage;
