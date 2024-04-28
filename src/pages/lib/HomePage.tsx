import { SearchMaterialWidget } from "@/widgets";
import { useCheckAuth } from "@/shared";


export const HomePage = () => {

	useCheckAuth()

	return <SearchMaterialWidget />
}
