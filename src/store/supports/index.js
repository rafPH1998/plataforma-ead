
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
        state.supports.data.unshift(support)
    },

    REMOVE_SUPPORTS (state) {
      state.supports = {
        id: '',
        status: '',
        description: '',
      }
    },

    ADD_NEW_REPLY_TO_SUPPORTS (state, data) {
      
      const reply = data.reply.data
      const supportId = data.supportId
      const supports = state.supports.data

      supports.forEach((support, index) => {
     
          if (support.id === supportId) {
              supports[index].replies.push(reply)
          }
      })

      state.supports.data = supports
    }

  },
  actions: {
    async getSupports({ commit }, lessonId) {
        try {
          const response = await SupportService.getSupportsByLesson(lessonId);
          commit("SET_SUPPORTS", response.data);
          return response;
          
        } catch (error) {

          throw new Error("Não foi possível buscar os cursos.");
        }
    },

    async storeNewSupport({commit}, params) {
      try {
        const response = await SupportService.storeSupport(params);

        commit("ADD_NEW_SUPPORTS", response.data.data);
        return response;
        
      } catch (error) {
        throw new Error("Não foi possível buscar os cursos.");
      }
    },

    async storeReplyToSupport({commit}, params) {
      try {
        const response = await SupportService.storeReplyToSupport(params);

        const data = {
          reply: response.data,
          supportId: params.support
        }

        commit("ADD_NEW_REPLY_TO_SUPPORTS", data);
        return response;
        
      } catch (error) {
        throw new Error("Não foi possível buscar os cursos.");
      }
    },

    async getMySupports({commit}, status) {
      try {
        const response = await SupportService.getMySupports(status);

        commit("SET_SUPPORTS", response.data);
        return response;
        
      } catch (error) {
        throw new Error("Não foi possível buscar os cursos.");
      }
    },

  },

  
}
