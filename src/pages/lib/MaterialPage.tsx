import { useEffect, useState } from "react";
import { API } from "@/shared";
import {Box, Button, VStack} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {GoBackWidget} from "@/widgets";


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
			<GoBackWidget />

			{/* @ts-expect-error sad */}
			{ theories?.map(theory => { return <Box key={ theory.id } bg="rgba(50, 50, 50, 0.6)" w="20rem" p="1rem" borderRadius="1rem" >
				<Link to={`/theory?id=${ theory.id }`}>
					{ theory.title }
				</Link>
			</Box>}) }

			<Button onClick={ () => {} } marginTop="0.5rem">
				Пройти тест по курсу
			</Button>
		</VStack>
	)
}
