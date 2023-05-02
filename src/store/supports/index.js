
import SupportService from "@/services/SupportService";

export default {
  state: {
    supports: {
        data: [],
        meta: {
            total: 0,
            page: 0,
            last_page: 0,
        },
    }
  },
  mutations: {

    SET_SUPPORTS (state, supports) {
      state.supports = Object.assign({}, state.supports, supports)
    },

    ADD_NEW_SUPPORTS (state, support) {
        state.supports.data.push(support)
    },

    REMOVE_SUPPORTS (state) {
      state.supports = {
        id: '',
        status: '',
        description: '',
      }
    },

  },
  actions: {
    async getSupports({ commit }, lessonId) {
        try {
          const response = await SupportService.getSupportsByLesson(lessonId);
          commit("SET_SUPPORTS", response.data);
          return response;
          
        } catch (error) {
          console.log(error);
          throw new Error("Não foi possível buscar os cursos.");
        }
    }
  },
}
