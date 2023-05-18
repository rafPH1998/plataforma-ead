
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

    static async forgetPassword(email)
    {
        return new Promise((resolve, reject) => {
            this.request()
                .post('/forgot-password', email)
                .then((response) =>  resolve(response))
                .catch((error) => reject(error))
        }) 
    }

    static async resetPassword(params)
    {
        return new Promise((resolve, reject) => {
            this.request()
                .post('/reset-password', params)
                .then((response) =>  resolve(response))
                .catch((error) => reject(error))
        }) 
    }


    static async getMe()
    {
        const token = await localStorage.getItem(TOKEN_NAME)

        if (!token) {
            return Promise.reject('Token not Found')
        }

        return new Promise((resolve, reject) => {
            this.request({auth: true})
                .get('/me')
                .then((response) =>  resolve(response))
                .catch((error) => {
                    localStorage.removeItem(TOKEN_NAME)
                    reject(error.response)
                })
        }) 
    }

    static async logout()
    {
        return new Promise((resolve) => {
            this.request({auth: true})
                .post('/logout')
                .then(() =>  {
                    localStorage.removeItem(TOKEN_NAME)
                    resolve('OK')
                })
        }) 
    }
    

}