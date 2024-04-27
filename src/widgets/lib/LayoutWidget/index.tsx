import { Outlet, useNavigate } from "react-router-dom";

import {HeaderWidget, TabView} from "@/widgets";
import { useEffect } from "react";
import { AppRoot } from "@vkontakte/vkui";


export const Layout = () => {

	const navigate = useNavigate();

	useEffect( () => {
		if (window.location.pathname === "") {
			navigate("home")
		}
	}, [] )


	return (
		<AppRoot>
			<HeaderWidget title="Messier 43" />
				<Outlet />

				<TabView />
		</AppRoot>
	)
}
