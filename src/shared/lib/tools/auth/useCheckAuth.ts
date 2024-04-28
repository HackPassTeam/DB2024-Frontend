import { useEffect } from "react";


export const useCheckAuth = () => {
	useEffect( () => {
		if (localStorage.getItem("token") && localStorage.getItem("token") !== "") {
			if (window.location.pathname === "/auth/login" || window.location.pathname === "/auth/register") {
				window.location.pathname = "/home"
			}
		} else {
			if (window.location.pathname === "/auth/login" || window.location.pathname === "/auth/register") {
				//
			} else {
				localStorage.removeItem('token');
				window.location.pathname = "/auth/login"
			}
		}
	}, [])
}
