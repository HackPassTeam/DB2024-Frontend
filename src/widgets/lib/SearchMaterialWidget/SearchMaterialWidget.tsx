import {FaSearch} from "react-icons/fa";
import {FaFilter} from "react-icons/fa6";
import {
	Box,
	Button,
	HStack,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightAddon,
	Tag,
	TagLabel,
	Text,
	useDisclosure,
	VStack
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ChooseTagWidget } from "./ChooseTagWidget.tsx";
import { API } from "@/shared";
import { Link } from "react-router-dom";


export const SearchMaterialWidget = () => {

	// states
	const [inputValue, setInputValue] = useState<string>("")
	const {isOpen, onOpen, onClose} = useDisclosure()
	const [materials, setMaterials] = useState()

	// logic
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()

		setInputValue(e.target.value)
	}
	const handleSubmit = () => {
		API.Edu.getMaterials(inputValue).then(res => setMaterials(res.data.educational_material))
	}

	useEffect(() => {
		API.Edu.getMaterials(inputValue).then(res => setMaterials(res.data.educational_material))
	}, []);

	// view
	return (
		<VStack w="100%" paddingInline="2rem">
			<HStack mt="0" w="100%" marginBottom="1rem">
				<Button onClick={onOpen}>
					<FaFilter/>
				</Button>

				<ChooseTagWidget isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>

				<InputGroup>
					<InputLeftElement pointerEvents='none'>
						<FaSearch/>
					</InputLeftElement>

					<Input
						type="text"
						name="search"
						placeholder="Название"
						value={inputValue}
						onChange={handleChange}
					/>

					<InputRightAddon>
						<Button onClick={handleSubmit}>
							Найти
						</Button>
					</InputRightAddon>
				</InputGroup>
			</HStack>

			<VStack minW="20rem" maxW="90rem" maxH="70vh" overflowY="scroll" borderRadius="1rem" paddingRight="0.25rem">
				{/* @ts-expect-error sad */}
				{materials?.map(material => (
					<Box
						width="100%"
						bg="rgba(50, 50, 50, 0.6)"
						key={ material.id }
						p="1rem"
						borderRadius="1rem"
					>
						<Link to={`/material?id=${ material.id }`}>
							<Text fontWeight="bold" fontSize="1.5rem" marginBottom="0.5rem"> { material.name } </Text>

							{/* @ts-expect-error sad */}
							{ material.tags.map(tag => (
								<Tag
									key={ tag.id }
									size="md"
									bg={ "#" + tag.color + "3B" }
									borderRadius='full'
									marginBottom="0.5rem"
									marginRight="0.5rem"
								>
									<Box
										w="1rem"
										h="1rem"
										marginRight="0.5rem"
										borderRadius={ 100 }
										bg={ "#" + tag.color + "CC" }
									/>

									<TagLabel color="white"> { tag.name } </TagLabel>
								</Tag>
							))}

							<Text> { material.description } </Text>
							<Text opacity="0.5"> { material.created_at } </Text>
						</Link>
					</Box>))}
			</VStack>
		</VStack>
	)
}
