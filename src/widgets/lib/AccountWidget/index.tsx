import { Button, HStack } from "@chakra-ui/react";
import { IoLogOutOutline } from "react-icons/io5";


export const AccountWidget = () => {

	const handleLogOut = () => {
		localStorage.clear()
		window.location.reload()
	}

	return <HStack justifyContent="center">
		<Button leftIcon={ <IoLogOutOutline /> } onClick={ handleLogOut }>
			Выйти из аккаунта
		</Button>
	</HStack>
}
