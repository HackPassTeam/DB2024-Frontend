import axios from "axios";


const token = localStorage.getItem("accessToken")


export const axiosClient = axios.create({
	baseURL: import.meta.env.VITE_APP_BASE_URL,
	timeout: 5000,
	headers: {
		// "Content-Type": "application/json",
		"Authorization": "Bearer " + token,
		"ngrok-skip-browser-warning": "skip-browser-warning",
	}
})


axiosClient.interceptors.response.use(
	response => { return  response },
	error => {
		let res = error.response

		if (res.status === 401) {
			window.location.pathname = "/auth/login"
		}

		console.error(`Looks like there was a problem. Status Code: ` + res.status)
		return Promise.reject(error)
	},
)
