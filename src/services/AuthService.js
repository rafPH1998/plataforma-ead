
import { TOKEN_NAME } from "@/configs/api";
import BaseService from "./BaseService";

export default class AuthService extends BaseService
{

    static async auth(params)
    {
        return new Promise((resolve, reject) => {
            this.request()
                .post('/auth', params)
                .then((response) => {
                    localStorage.setItem(TOKEN_NAME, response.data.token)
                    resolve(response)
                })
                .catch((error) => reject(error))
        })
    }
}