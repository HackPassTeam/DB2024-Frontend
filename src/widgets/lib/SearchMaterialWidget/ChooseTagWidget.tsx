import {
	Box,
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent, DrawerFooter,
	DrawerHeader,
	DrawerOverlay, Input,
	InputGroup,
	InputLeftElement, InputRightAddon, Tag, TagCloseButton, TagLabel, Text
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { FC, useEffect, useState } from "react";
import { API } from "@/shared";


interface IChooseTagWidgetProps {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}


export const ChooseTagWidget: FC<IChooseTagWidgetProps> = (props) => {


	const [ tags, setTags ] = useState()
	{/* @ts-expect-error sad */}
	const [ selectedTags, setSelectedTags ] = useState()

	// logic
	const handleSearchTags = () => {}

	{/* @ts-expect-error sad */}
	const selectTag = (tagId: number) => {
		// let elementToMove = tags?.splice(2, 1)[0];
		// setSelectedTags?.push(elementToMove);

	}

	{/* @ts-expect-error sad */}
	const deselectTag = (tagId: number) => {}

	useEffect(() => {
		API.Main.getTags()
			.then(res => {
				// let tagsSet = new Set(res.data.tags)
				// setTags(tagsSet)
				setTags(res.data.tags)
				console.log(res.data.tags)
			})
	}, [])


	// view
	return (
		<Drawer
			isOpen={ props.isOpen }
			placement='right'
			onClose={ props.onClose }
			// finalFocusRef={ btnRef }
		>
			<DrawerOverlay />
			<DrawerContent>
				<DrawerCloseButton />
				<DrawerHeader color="black"> Выберите теги </DrawerHeader>

				<DrawerBody>
					<InputGroup>
						<InputLeftElement pointerEvents='none'>
							<FaSearch color="black" />
						</InputLeftElement>

						<Input
							placeholder='Название тега'
							color="black"
						/>

						<InputRightAddon>
							<Button onClick={ handleSearchTags }>
								Найти
							</Button>
						</InputRightAddon>
					</InputGroup>


					<Box m="1rem">
						<Text color="black" marginBottom="0.5rem"> Выбранные теги </Text>

						{/* @ts-expect-error sad */}
						{ selectedTags?.map( selectedTag => { return <Tag key={ selectedTag?.id } size='lg' bg={ "#" + selectedTag?.color + "3B" } borderRadius='full' marginBottom="0.5rem" marginRight="0.5rem">
							<Box
								w="1.5rem"
								h="1.5rem"
								marginRight="0.5rem"
								borderRadius={ 100 }
								bg={ "#" + selectedTag?.color + "CC" }
							/>
							<TagLabel> { selectedTag?.name } </TagLabel>
							<TagCloseButton onClick={ () => deselectTag(selectedTag?.id) } />
						</Tag> } ) }
					</Box>

					<Box m="1rem">
						<Text color="black" marginBottom="0.5rem"> Все теги </Text>

						{/* @ts-expect-error sad */}
						{ tags?.map( tag => { return <Tag key={tag?.id} size='lg' bg={ "#" + tag?.color + "3B" } borderRadius='full' onClick={ () => selectTag(tag?.id) } marginBottom="0.5rem" marginRight="0.5rem">
							<Box
								w="1.5rem"
								h="1.5rem"
								marginRight="0.5rem"
								borderRadius={ 100 }
								bg={ "#" + tag?.color + "CC" }
							/>
							<TagLabel> { tag?.name } </TagLabel>
						</Tag> } ) }
					</Box>


				</DrawerBody>

				<DrawerFooter>
					<Button variant='outline' mr={ 3 } onClick={ props.onClose }>
						Отмена
					</Button>
					<Button colorScheme='blue'> Сохранить </Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}
