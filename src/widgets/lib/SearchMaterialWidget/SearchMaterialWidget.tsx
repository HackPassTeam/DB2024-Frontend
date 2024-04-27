import { FaSearch } from "react-icons/fa";
import { FaFilter } from "react-icons/fa6";
import {
	Button,
	HStack,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightAddon,
	useDisclosure
} from "@chakra-ui/react";
import { useState } from "react";
import { ChooseTagWidget } from "./ChooseTagWidget.tsx";


export const SearchMaterialWidget = () => {

	// states
	const [ inputValue, setInputValue ] = useState<string>("")
	const { isOpen, onOpen, onClose } = useDisclosure()

	// logic
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value)
	}
	const handleSubmit = () => {

	}

	// view
	return (
		<HStack m="2rem" mt="0">
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
	)
}
