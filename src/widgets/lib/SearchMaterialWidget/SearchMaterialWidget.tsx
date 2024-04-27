import { FaSearch } from "react-icons/fa";
import { FaFilter } from "react-icons/fa6";
import {
	Box,
	Button,
	HStack,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightAddon, Text,
	useDisclosure, VStack
} from "@chakra-ui/react";
import { useState } from "react";
import { ChooseTagWidget } from "./ChooseTagWidget.tsx";
import {API} from "@/shared";
import {Link} from "react-router-dom";


export const SearchMaterialWidget = () => {

	// states
	const [ inputValue, setInputValue ] = useState<string>("")
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [ materials, setMaterials ] = useState()

	// logic
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()

		setInputValue(e.target.value)
	}
	const handleSubmit = () => {
		API.Edu.getMaterials(inputValue).then(res => setMaterials(res.data.educational_material))
	}

	// view
	return (
		<VStack w="100%" paddingInline="2rem">
			<HStack mt="0" w="100%" marginBottom="1rem">
				<Button onClick={ onOpen }>
					<FaFilter />
				</Button>

				<ChooseTagWidget isOpen={ isOpen } onOpen={ onOpen } onClose={ onClose } />

				<InputGroup>
					<InputLeftElement pointerEvents='none'>
						<FaSearch />
					</InputLeftElement>

					<Input
						type="text"
						name="search"
						placeholder="Найти тему"
						value={ inputValue }
						onChange={ handleChange }
					/>

					<InputRightAddon>
						<Button onClick={ handleSubmit }>
							Найти
						</Button>
					</InputRightAddon>
				</InputGroup>
			</HStack>

			{ materials?.map(material => (
				<Link to={`/material?id=${ material.id }`}>
					<Box
						bg="#1a1919"
						key={ material.id }
						w="20rem"
						p="1rem"
						borderRadius="1rem"
					>
						<Text fontWeight="bold" fontSize="1.5rem"> { material.name } </Text>
						<Text> { material.description } </Text>
						<Text opacity="0.5"> { material.created_at } </Text>
					</Box>
				</Link>
			))}
		</VStack>
	)
}
