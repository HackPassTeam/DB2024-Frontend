import { axiosClient } from "@shared/lib/api/axiosClient.ts";
import { GET_MATERIALS_URL } from "@shared/lib/config/apiConstants.ts";


export class Edu {

	public static getMaterials = async () => {
		return axiosClient.post(GET_MATERIALS_URL)
	}
}
