import axios from "axios";
import { Provider } from "react-redux";
import { ToastContainer, Zoom } from "react-toastify";

import "./App.css";
import { store } from "./redux/store";
import Router from "./routers/Router";
import { getToken } from "./utils/functions";
import { customPosition } from "./utils/Modals";

function App() {
	// useEffect(() => {

	// }, []);

	axios.defaults.headers["Accept"] = "application/json";
	axios.defaults.headers.post["Content-Type"] =
		"application/json;charset=utf-8";
	axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

	axios.interceptors.request.use((config) => {
		if (navigator.onLine) {
			config.baseURL ="https://backend.shongshari.com/api/"
			// "http://matrimonial-1.test/api/";
			 
			// config.baseURL = "http://192.168.3.107/matrimonial/public/api/";

			// config.baseURL = "http://admin.mm.hostinglawn.com/api/";
			config.withCredentials = true;
			const access_token = getToken();
			config.headers.Authorization = access_token
				? `Bearer ${access_token}`
				: "";

			return config;
		} else {
			customPosition("center", "error", "No internet connectin");
		}
	});
	return (
		<>
			<Provider store={store()}>
				<Router />

				<ToastContainer transition={Zoom} />
			</Provider>
		</>
	);
}

export default App;
