import { HStack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";


export const GoBackWidget = () => {

	const navigate = useNavigate();

	return (
		<HStack
			onClick={ () => navigate(-1) }
			justifyContent="flex-start"
			w="full"
			h="full"
			paddingLeft="1rem"
			paddingBottom="1rem"
			gap="0.25rem"
		>
			<IoIosArrowBack />
			<Text> Назад </Text>
		</HStack>
	)
}
