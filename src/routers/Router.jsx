import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import CoursePage from "../pages/course/CoursePagersePage";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import WOW from "wowjs";
import Loader from "../components/Loader";
import Home from "../pages/Home";
import {
  authenticatedFunction,
  loadingFunction,
  setUserFunction
} from "../redux/actions/AuthAction";
import { getToken, getType, setToken } from "../utils/functions";
// import ProductPage from "../pages/product/ProductPageductPage";

function Router() {
  const { authenticated, loading, loginShow, type } = useSelector(
    (state) => state.authValue
  );
  // console.log("authenticated", authenticated);
  let dispatch = useDispatch();
  let typeNow = type || getType();
  // console.log("type :>> ", type);
  // console.log("typeNow", typeNow);
  let route =
    typeNow == 1
      ? "profile"
      : typeNow == 2
        ? "/lawyer-profile"
        : typeNow == 3
          ? "kazi-profile"
          : typeNow == 6
            ? "agent-profile"
            : "";
  const userData = () => {
    const access_token = getToken();
    // console.log("route", route);

    return getToken() && route
      ? axios.get(route, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      : Promise.resolve(null);
  };

  useEffect(() => {
    userData()
      .then((user) => {
        // console.log(`user>>>INIT:`, user);
        dispatch(loadingFunction(false));
        dispatch(setUserFunction(user.data));
        dispatch(authenticatedFunction(true));
        // setLoading(false);
      })
      .catch((error) => {
        // console.log("error", error);
        dispatch(loadingFunction(false));
        // setLoading(false);
        setToken("");
        // setIntendedUrl("/");
      });
  }, [authenticated]);

  useEffect(() => {
    if (!loading) {
      new WOW.WOW({
        live: true,
      }).init();
    }
  }, [loading]);

  return loading ? (
    <Loader />
  ) : (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
