import {
	Box,
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightAddon,
	Tag,
	TagCloseButton,
	TagLabel,
	Text
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { API } from "@/shared";


interface IChooseTagWidgetProps {
	isOpen: boolean
	onOpen: () => void
	onClose: () => void
	setReqTags: Dispatch<SetStateAction<(number | null)[]>>
}


export const ChooseTagWidget: FC<IChooseTagWidgetProps> = (props) => {

	// states
	const [ tags, setTags ] = useState()
	const [ selectedTags, setSelectedTags ] = useState<Array<number>>([])

	// logic
	const handleSearchTags = (): void => {}

	let uniqueArray = selectedTags.filter((item, index) => {
		return selectedTags.indexOf(item) === index;
	})

	const selectTag = (tagId: number): void => {
		// let uniqueArray = selectedTags.filter((item, index) => {
		// 	return selectedTags.indexOf(item) === index;
		// })

		uniqueArray.push(tagId)
		setSelectedTags(uniqueArray)

		console.log(`SELECTED TAGS: ${ selectedTags }`)
	}

	const deselectTag = (tagId: number): void => {
		setSelectedTags(selectedTags.sort().splice(tagId + 1, 1))
		console.log(selectedTags)
	}

	useEffect( () => {
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

						{ selectedTags?.map( selectedTag => { return (
							<Tag
								key={ selectedTag }
								size='lg'
								bg={ "#" + selectedTag + "3B" }
								borderRadius='full'
								marginBottom="0.5rem"
								marginRight="0.5rem"
							>
								<Box
									w="1.5rem"
									h="1.5rem"
									marginRight="0.5rem"
									borderRadius={ 100 }
									bg={ "#" + selectedTag + "CC" }
								/>

								{/* @ts-expect-error sad */}
								<TagLabel> { selectedTag?.name } </TagLabel>
								{/* @ts-expect-error sad */}
								<TagCloseButton onClick={ () => deselectTag(selectedTag?.id) } />
							</Tag>
						)})}
					</Box>

					<Box m="1rem">
						<Text color="black" marginBottom="0.5rem"> Все теги </Text>

						{/* @ts-expect-error sad */}
						{ tags?.map( tag => { return (
							<Tag
								key={ tag?.id }
								size='lg'
								bg={ "#" + tag?.color + "3B" }
								borderRadius='full'
								onClick={ () => selectTag(tag?.id) }
								marginBottom="0.5rem"
								marginRight="0.5rem"
							>
								<Box
									w="1.5rem"
									h="1.5rem"
									marginRight="0.5rem"
									borderRadius={ 100 }
									bg={ "#" + tag?.color + "CC" }
								/>

								<TagLabel> { tag?.name } </TagLabel>
							</Tag>
						)})}
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
