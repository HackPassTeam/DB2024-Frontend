import { Outlet } from "react-router-dom";
import { HeaderWidget, TabView } from "@/widgets";
import { AppRoot } from "@vkontakte/vkui";
import { useCheckAuth } from "@/shared";


export const Layout = () => {

	useCheckAuth()

	return (
		<AppRoot>
			<HeaderWidget title="Messier 43" />
				<Outlet />

				<TabView />
		</AppRoot>
	)
}
