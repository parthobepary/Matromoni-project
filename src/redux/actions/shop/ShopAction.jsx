/** @format */

// import ShopServices from "../../../apis/ShopServices";
import ShopServices from "../../../api/ShopServices";
import { addInLocal, getFromLocal } from "../../../utils/functions";
import { ShopSlices } from "../../slices/ShopSlices";
// import { shopSlice } from "../slices/shopSlice";
const { actions: slice } = ShopSlices;

export const topProductList = () => async (dispatch) => {
	let res = await ShopServices.topProductList();
	// //console.log("resdsfsdfsdfsd :>> ", res.data);
	dispatch(slice.getTopProductData(res));
};
export const singleProductList = (id) => async (dispatch) => {
	let res = await ShopServices.singleProductListApi(id);
	dispatch(slice.getSingleProductData(res));
};
export const suggestedProductList = () => async (dispatch) => {
	let res = await ShopServices.suggestProductListApi();
	dispatch(slice.getSuggestProductData(res));
};

export const bestRatedProdictList = () => async (dispatch) => {
	let res = await ShopServices.bestRatedProductListApi();
	dispatch(slice.getBestRatedProductData(res));
};

export const RelatedProductAction = (category) => async (dispatch) => {
	let res = await ShopServices.categoryList();

	const relatedProducts = res.data.data.filter(
		(prod) => prod.name === category
	);
	// console.log("resdsfsdfsdfsd :>> ", relatedProducts[0].products);

	dispatch(slice.getRelatedProduct(relatedProducts[0].products));
};

export const allProductAction = () => async (dispatch) => {
	const res = await ShopServices.allProduct();

	dispatch(slice.getAllProductData(res.data.data));
};

export const PriceAfterPercentage = (price, percentage) => (dispatch) => {
	return price - (percentage / 100) * price;
};
// shop cart action

export const plus = (id) => (dispatch) => {
	dispatch(AddToCartAction(id, "add"));
};
export const minus = (id) => (dispatch) => {
	console.log(id);
	dispatch(AddToCartAction(id, "remove"));
};
export const addToCart = (id) => (dispatch) => {
	dispatch(AddToCartAction(id, "addToCart"));
};

export const removeFromCart = (id) => (dispatch) => {
	dispatch(AddToCartAction(id, "removeFromCart"));
};

export const AddToCartAction = (id, method) => (dispatch) => {
	let carts = getFromLocal() ?? [];
	let count = 2;

	const oldCart = carts.find((item) => item.id == id);
	console.log("carts", carts);

	if (carts.length == 0) {
		if (method === "add") {
			carts = [...carts, { id: id, count: count }];
		} else if (method === "addToCart") {
			carts = [...carts, { id: id, count: 1 }];
		}
	} else if (carts.length > 0 && oldCart && method === "add") {
		const objIndex = carts.findIndex((obj) => obj.id == id);

		carts[objIndex].count = carts[objIndex].count + 1;
	} else if (carts.length > 0 && oldCart && method === "remove") {
		const objIndex = carts.findIndex((obj) => obj.id == id);
		if (carts[objIndex].count > 1) {
			carts[objIndex].count = carts[objIndex].count - 1;
		} else {
			carts[objIndex].count = 1;
		}
	} else if (carts.length > 0 && oldCart && method === "addToCart") {
		if (carts.length == 0) {
			count = 1;
			carts = [...carts, { id: id, count: count }];
		} else {
			carts = carts;
		}
	} else if (
		carts.length > 0 &&
		oldCart &&
		method === "removeFromCart"
	) {
		carts = carts.filter((item) => item.id !== id);
	} else {
		count = 2;
		carts = [...carts, { id: id, count: count }];
	}
	// localStorage.setItem("shopCart", JSON.stringify(carts));
	addInLocal(carts);
	dispatch(slice.getCartData(carts));
};

export const cartDataAction = () => (dispatch) => {
	let carts = getFromLocal();
	dispatch(slice.getCartData(carts));
};

export const returnCount = (array, id) => (dispatch) => {
	if (array) {
		let count = 1;
		count = array.find((item) => item.id == id)?.count ?? count;
		return count;
	}
};

// export const categoryProductData = (data) => (dispatch) => {
//   dispatch(slice.getcategoryWiseProductData(data));
// };

// export const singleProductDataFunc = (id) => async (dispatch) => {
//   let res = await ShopServices.singleProduct(id);

//   dispatch(slice.getSingleProductData(res.data));
// };

export const cartDataFunc = (data) => (dispatch) => {
	dispatch(slice.getCartData(data));
};
