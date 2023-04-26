import CourseService from "@/services/CourseService"

export default {
  state: {
    courses: [],
    courseSelected: {
      id: '',
      name: '',
      modules: []
    }
  },
  mutations: {
    
    SET_COURSES(state, courses) {
      state.courses = courses
    },

    SET_COURSE_SELECTED (state, course) {
      state.courseSelected = course
    }

  },
  actions: {
    async getCourses({ commit }) {
        try {
          const response = await CourseService.getCourses();
          commit("SET_COURSES", response.data);
          return response;
          
        } catch (error) {
          console.log(error);
          throw new Error("Não foi possível buscar os cursos.");
        }
    }
  },
}
