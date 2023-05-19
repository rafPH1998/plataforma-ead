<template>
  <div class="pageTitle">
      <span class="title">Minhas dúvidas</span>
      <span class="dots">
          <span></span>
          <span></span>
          <span></span>
      </span>
  </div>

  <div class="content">
      <div class="container">
          
        <div class="left">
          <div class="card">
            <div class="title bg-laravel">
              <span class="text">Filtros</span>
            </div>
            <div class="modules">
              <ul class="classes" style="font-size: 14px;">
                <li :class="{'active' : status === ''}" @click="getMySupportForStatus('')">Todos</li>
                <li :class="{'active' : status === 'A'}" @click="getMySupportForStatus('A')">Aguardando Minha Resposta</li>
                <li :class="{'active' : status === 'P'}" @click="getMySupportForStatus('P')">Aguardando Professor</li>
                <li :class="{'active' : status === 'C'}" @click="getMySupportForStatus('C')">Finalizados</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="right">
            <div class="content">
              <div class="comments">
                  <span v-if="loading" style="color: white;">Carregando dúvidas...</span>
                  <span v-else><supports-global/></span>
              </div>
            </div>

            <pagination-component
                :pagination="mySupports"
                @changePage="changePage">
            </pagination-component>

        </div>
      </div>
  </div>
</template>
  
<script>
import { onMounted, ref, computed } from 'vue'
import { useStore } from 'vuex';

import SupportsGlobal from '@/components/SupportsGlobal.vue';
import PaginationComponent from '@/layouts/components/PaginationComponent.vue'

export default {
    name: 'MySupports',
    components: {
      SupportsGlobal,
      PaginationComponent
    },

    setup() {

      const store = useStore()
      const status = ref('')
      const loading = ref(false)

      onMounted(() => store.dispatch('getMySupports'))

      const mySupports = computed(() => store.state.supports.supports)

      const getMySupportForStatus = (newStatus) => {
        loading.value = true

        status.value = newStatus
        store.dispatch('getMySupports', {status: status.value})
            .finally(() => {
              loading.value = false
            })
      }
      const changePage = (page) => {
        store.dispatch('getMySupports', {
          status: status.value,
          page
        })
      }

      return {
        status,
        loading,
        mySupports,
        changePage,
        getMySupportForStatus
      }
    }
}
</script>
  