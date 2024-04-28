import { useEffect, useState } from "react";
import { API, useCheckAuth } from "@/shared";
import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { GoBackWidget } from "@/widgets";


export const TheoryPage = () => {

	useCheckAuth()

	const [ theory, setTheory ] = useState<string>()

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search)
		const myParam = urlParams.get('id')
		API.Edu.getTheory(Number(myParam)!)
			.then(res => {
				setTheory(res.data.content)
			})
	}, []);

	return (
		<VStack justifyContent="center">
			<GoBackWidget />
			<Text>
				<Box
					bg="rgba(50, 50, 50, 0.6)"
					w="20rem"
					p="1rem"
					borderRadius="1rem"
				>
					{ theory }
				</Box>
			</Text>

			<Button onClick={ () => {} } marginTop="0.5rem">
				Пройти тест по уроку
			</Button>
		</VStack>
	)
}
