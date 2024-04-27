import { Button, HStack } from "@chakra-ui/react";
import { IoLogOutOutline } from "react-icons/io5";


export const AccountWidget = () => {
	return <HStack justifyContent="center">
		<Button leftIcon={ <IoLogOutOutline /> }>
			Выйти из аккаунта
		</Button>
	</HStack>
}
