import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './index.css'
import { AdaptivityProvider, ConfigProvider } from "@vkontakte/vkui";

import { ChakraProvider } from "@chakra-ui/react";


ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ChakraProvider>
			<ConfigProvider>
				<AdaptivityProvider>
					<App />
				</AdaptivityProvider>
			</ConfigProvider>
		</ChakraProvider>
	</React.StrictMode>,
)
