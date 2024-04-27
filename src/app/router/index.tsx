import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "@/widgets";

import {
	AccountPage,
	ChatPage,
	HomePage,
	LoginPage,
	RegisterPage
} from "@/pages";


export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={ <Layout /> }>
					<Route path="home" element={ <HomePage /> } />
					<Route path="chat" element={ <ChatPage /> } />
					<Route path="account" element={ <AccountPage /> } />
				</Route>
				<Route path="auth">
					<Route path="login" element={ <LoginPage /> } />
					<Route path="register" element={ <RegisterPage /> } />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
