<template>
    <div class="comments" v-show="lessons.name">
        <div class="header">
            <span class="title">
                Dúvidas (total: {{ supports.length }})
                {{loading ? 'Carregando...' : '' }}
            </span>
            <button class="btn primary" 
                @click.prevent="openModal()">
                <i class="fas fa-plus"></i>
                Enviar nova dúvida
            </button>
        </div>

        <supports-global/>

        <supports-modal
            :show-modal="modal.showModal"
            :support-reply="modal.supportReply"
            @closeModal="modal.showModal = false"
            >
        </supports-modal>
    </div>
</template>
  
  
<script>
import { computed, watch, ref } from 'vue'
import { useStore } from 'vuex';
import SupportsGlobal from '@/components/SupportsGlobal.vue';
import SupportsModal from '@/components/SupportsModal.vue';

export default {
    name: 'SupportsList',
    components: {
        SupportsGlobal,
        SupportsModal
    },
    setup(){
        const store = useStore();
        const loading = ref(false)

        const lessons = computed(() => store.state.courses.lessonPlayer)
        const supports = computed(() => store.state.supports.supports.data)

        const modal = ref({
            showModal: false,
            supportReply: ""
        })

        const openModal = () => modal.value = {showModal: true, supportReply: ''}

        watch(() => store.state.courses.lessonPlayer, () => {
                loading.value = true
                store.dispatch('getSupports', lessons.value.id)
                    .finally(() => loading.value = false)
            }
        )

        return {
            lessons,
            loading,
            supports,
            openModal,
            modal
        }
    }
}
</script>
  