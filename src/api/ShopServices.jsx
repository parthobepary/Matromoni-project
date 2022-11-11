import axios from "axios";

const ShopServices = {};

ShopServices.allProduct = async () => {
  const url = "product";
  const res = axios
    .get(url)
    .then((response) => response)
    .catch((err) => err.response ?? err);

  return res;
};

ShopServices.review = async (data) => {
  let url = `productReview`;
  let res = axios
    .post(url, data)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
  return res;
};
ShopServices.topProductList = async () => {
  let url = "product-top";
  let res = axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });

  return res;
};

ShopServices.singleProductListApi = async (id) => {
  let url = `/product/${id}`;
  let res = axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });

  return res;
};
ShopServices.suggestProductListApi = async () => {
  let url = "product-suggested";
  let res = axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });

  return res;
};

ShopServices.bestRatedProductListApi = async () => {
  let url = "product-rated";
  let res = axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });

  return res;
};

ShopServices.categoryList = async () => {
  let url = "categories";
  let res = axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });

  return res;
};

// ShopServices.singleProduct = async (id) => {
//   let pid = id ?? 1;
//   let url = `product/` + pid;
//   let res = axios
//     .get(url)
//     .then((response) => {
//       return response;
//     })
//     .catch((err) => {
//       return err.response;
//     });

//   return res;
// };

// ShopServices.review = async (data) => {
//   let url = `productReview`;
//   let res = axios
//     .post(url, data)
//     .then((response) => {
//       return response;
//     })
//     .catch((err) => {
//       return err.response;
//     });

//   return res;
// };

export default ShopServices;
