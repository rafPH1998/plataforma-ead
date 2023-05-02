
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

    

}