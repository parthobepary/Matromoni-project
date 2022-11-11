const authToken = "matrimonial_auth_token";
const cart = "cart";
const userType = "userType";

export const getToken = () => window.localStorage.getItem(authToken);

export const setToken = (token) => {
  console.log("token", token);
  token
    ? window.localStorage.setItem(authToken, token)
    : window.localStorage.removeItem(authToken);
};

export const setType = (type) => {
  // console.log("token", token);
  type
    ? window.localStorage.setItem(userType, type)
    : window.localStorage.removeItem(userType);
};
export const getType = () => window.localStorage.getItem(userType);
export const getCart = () => {
  let carts = localStorage.getItem("cart") || "";

  if (typeof carts !== "undefined" && carts !== null && carts !== "") {
    carts = JSON.parse(carts) || [];
  }
  return carts;
};

export const setCart = (data = []) => {
  console.log(data, "local");
  data
    ? window.localStorage.setItem(cart, JSON.stringify(data))
    : window.localStorage.removeItem(cart);
};

export const addInLocal = (data) => {
  return localStorage.setItem("shopCart", JSON.stringify(data));
};
export const getFromLocal = () => {
  return JSON.parse(localStorage.getItem("shopCart"));
};

const addToCart = (id) => {
  // setIsClicked(!isClicke);
  // console.log(carts);
};

export const setSearchedData = (data) =>
  window.localStorage.setItem("searched", JSON.stringify(data));

export const getSearchedData = () => localStorage.getItem("searched");

export const log = (...args) => {
  console.clear();

  console.log(...args);
};
