import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "@/widgets";

import {
	AccountPage,
	HomePage,
	LoginPage,
	MaterialPage,
	RegisterPage,
	TheoryPage
} from "@/pages";


export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={ <Layout /> }>
					<Route path="home" element={ <HomePage /> } />
					<Route path="account" element={ <AccountPage /> } />
					<Route path="material" element={ <MaterialPage /> } />
					<Route path="theory" element={ <TheoryPage /> } />
				</Route>
				<Route path="auth">
					<Route path="login" element={ <LoginPage /> } />
					<Route path="register" element={ <RegisterPage /> } />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
