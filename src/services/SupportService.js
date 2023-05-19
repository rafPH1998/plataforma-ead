
import BaseService from "./BaseService";

export default class SupportService extends BaseService
{

    static async getSupportsByLesson(lessonId)
    {
        try {
            const response = await this.request({ auth: true })
                                       .get("/supports", {
                                            params: {lesson: lessonId}
                                       });
            return response;
        } catch (error) {
            console.log(error);
            throw new Error("Não foi possível buscar os cursos.");
        }
    }

    static async storeSupport(params)
    {
        try {
            const response = await this.request({ auth: true })
                                       .post("/supports", params)
            return response;
            
        } catch (error) {
            console.log(error);
            throw new Error("Não foi possível buscar os cursos.");
        }
    }

    static async storeReplyToSupport(params)
    {
        try {
            const response = await this.request({ auth: true })
                                       .post("/replies", params)
            return response;
            
        } catch (error) {
            console.log(error);
            throw new Error("Não foi possível buscar os cursos.");
        }
    }

    static async getMySupports(params)
    {
        try {
            const response = await this.request({ auth: true })
                                       .get("/my-supports", {params})
            return response;
            
        } catch (error) {
            console.log(error);
            throw new Error("Não foi possível buscar os cursos.");
        }
    }

}