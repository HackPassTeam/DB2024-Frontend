import { AccountWidget}  from "@/widgets";
import { useCheckAuth } from "@/shared";


export const AccountPage = () => {

	useCheckAuth()

	return <AccountWidget />
}
