import { useEffect, useState } from "react";
import { API } from "@/shared";
import {Box, Button, Text, VStack} from "@chakra-ui/react";


export const TheoryPage = () => {

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
			<Text>
				<Box
					bg="#1a1919"
					w="20rem"
					p="1rem"
					borderRadius="1rem"
				>
					{ theory }
				</Box>
			</Text>

			<Button onClick={ () => {} }>
				Пройти тест по уроку
			</Button>
		</VStack>
	)
}
