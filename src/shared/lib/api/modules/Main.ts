import { axiosClient } from "@shared/lib/api/axiosClient.ts";
import { GET_TAGS_URL } from "@shared/lib/config/apiConstants.ts";


export class Main {

	public static getTags = async () => {
		return axiosClient.post(GET_TAGS_URL, { q: "" })
	}
}
