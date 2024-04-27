import { FC } from "react";

import { Text, Box } from "@chakra-ui/react";


interface IHeaderWidgetProps {
    title: string
}


export const HeaderWidget: FC<IHeaderWidgetProps> = (props) => {
    return (
        <Box
            width="100%"
            padding="1.5rem"
        >
            <Text
                color="white"
                fontSize="2.5rem"
                fontWeight="bold"
            >
                { props.title }
            </Text>
        </Box>
    )
}
