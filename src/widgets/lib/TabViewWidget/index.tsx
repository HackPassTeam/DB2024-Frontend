import { Tabbar, TabbarItem } from "@vkontakte/vkui";
import '@vkontakte/vkui/dist/vkui.css'

import { IoHome } from "react-icons/io5";
import { RiUser6Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { ITabBarItems, TabBarItem } from "@widgets/lib/TabViewWidget/ITabBarItems.ts";


export const TabView = () => {

	// inits
	const navigate = useNavigate();

	// states
	const [ selectedTabBarItem, setSelectedTabBarItem ] = useState<string>(window.location.pathname)
	useEffect(() => {
		console.log(selectedTabBarItem)
	}, []);
	const tabBarItems: ITabBarItems = {
		home: "home",
		account: "account",
	}

	// logic
	const handleTabBarItemClick = (tabBarItem: TabBarItem) => {
		setSelectedTabBarItem(tabBarItem)

		if (selectedTabBarItem === "home" || selectedTabBarItem === "account") {
			navigate(tabBarItem)
		}
	}
	useEffect( () => handleTabBarItemClick(tabBarItems.home), [] )

	// view
	return (
		<Tabbar>
			<TabbarItem
				text={ tabBarItems.home }
				indicator={ <IoHome size={ 20 } /> }
				onClick={ () => handleTabBarItemClick(tabBarItems.home) }
				selected={ selectedTabBarItem === tabBarItems.home }
			/>

			<TabbarItem
				text={ tabBarItems.account }
				indicator={ <RiUser6Fill size={ 20 } /> }
				onClick={ () => handleTabBarItemClick(tabBarItems.account) }
				selected={ selectedTabBarItem === tabBarItems.account }
			/>
		</Tabbar>
	)
}
