import { axiosClient } from "@shared/lib/api/axiosClient.ts";

import { IFormWidgetLoginData, IFormWidgetRegisterData } from "@widgets/lib/AuthFormWidget";

import { REGISTER_URL, LOGIN_URL, GETME_URL } from "@shared/lib/config/apiConstants.ts";


export class Auth {

    public static register = async (data: IFormWidgetRegisterData) => {
        return axiosClient.post(REGISTER_URL, data)
    }

    public static getMePerson = async () => {
        return axiosClient.get(GETME_URL)
    }

    public static login = async (data: IFormWidgetLoginData) => {
        const params = new URLSearchParams()

        params.append("username", data.email)
        params.append("password", data.password)

        return axiosClient.post(LOGIN_URL, params)
    }

}
