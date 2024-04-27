import { useEffect, useState } from "react";
import { API } from "@/shared";
import {Box, Button, VStack} from "@chakra-ui/react";
import { Link } from "react-router-dom";


export const MaterialPage = () => {

	const [ theories, setTheories] = useState()

	useEffect(() => {
		// get the id and put it to the http query
		const urlParams = new URLSearchParams(window.location.search)
		const myParam = urlParams.get('id')
		API.Edu.getTheories(Number(myParam)!)
			.then(res => {
				setTheories(res.data.theories)
			})
	}, [])

	return (
		<VStack justifyContent="center">
			{ theories?.map(theory => { return <Box key={ theory.id } bg="#1a1919" w="20rem" p="1rem" borderRadius="1rem" >
				<Link to={`/theory?id=${ theory.id }`}>
					{ theory.title }
				</Link>
			</Box>}) }

			<Button onClick={ () => {} }>
				Пройти тест по материалу
			</Button>
		</VStack>
	)
}
