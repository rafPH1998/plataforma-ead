
import BaseService from "./BaseService";

export default class CourseService extends BaseService
{

    static async getCourses()
    {
        try {
            const response = await this.request({ auth: true })
                                       .get("/courses");
            return response;
        } catch (error) {
            console.log(error);
            throw new Error("Não foi possível buscar os cursos.");
        }
    }


    static async markViewedLesson(lessonId)
    {
        try {
            const response = await this.request({ auth: true })
                                       .post("/lessons/viewed", {
                                            lesson: lessonId
                                       });
            return response;
        } catch (error) {
            console.log(error);
            throw new Error("Não foi possível buscar os cursos.");
        }
    }
    

}