import axios from "axios";
import { API_URL } from "./Apis";

export default function SendWithToken() {
	const http = axios.create({
		baseURL: `${API_URL}/`,
		headers: {
			"Content-type": "application/json",
			Authorization: localStorage.getItem("token"),
		},
	});

	const http2 = axios.create({
		baseURL: `${API_URL}/`,
		headers: {
			"Content-Type":
				"multipart/form-data; boundary=----WebKitFormBoundaryyrV7KO0BoCBuDbTL",
			Authorization: localStorage.getItem("token"),
		},
	});

	return {
		http,
		http2,
	};
}
