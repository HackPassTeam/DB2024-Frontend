import { AuthFormWidget } from "@/widgets";
import { useCheckAuth } from "@/shared";


export const LoginPage = () => {

	useCheckAuth()

	return <AuthFormWidget login />
}
