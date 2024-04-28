import { AuthFormWidget } from "@/widgets";
import { useCheckAuth } from "@/shared";


export const RegisterPage = () => {

	useCheckAuth()

	return <AuthFormWidget />
}
