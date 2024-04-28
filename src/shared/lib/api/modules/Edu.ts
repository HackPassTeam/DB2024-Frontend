import { axiosClient } from "@shared/lib/api/axiosClient.ts";
import {GET_MATERIALS_URL, GET_THEORIES_URL, GET_THEORY_URL} from "@shared/lib/config/apiConstants.ts";


export class Edu {

	public static getMaterials = async (searchValue: string) => {
		return axiosClient.post(GET_MATERIALS_URL, {
			"tags": [],
			"q": searchValue,
			"page": 1,
			"size": 20
		})
	}

	public static getTheories = async (id: number) => {
		return axiosClient.post(GET_THEORIES_URL, { id })
	}

	public static getTheory = async (id: number) => {
		return axiosClient.post(GET_THEORY_URL, { id })
	}

}
