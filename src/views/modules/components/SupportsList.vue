<template>
    <div class="comments" v-show="lessons.name">
        <div class="header">
            <span class="title">Dúvidas (total: {{ supports.length }})</span>
            <button class="btn primary">
                <i class="fas fa-plus"></i>
                Enviar nova dúvida
            </button>
        </div>

        <supports-global />
    </div>
</template>
  
  
<script>
import { computed, watch, ref } from 'vue'
import { useStore } from 'vuex';
import SupportsGlobal from '@/components/SupportsGlobal.vue';

export default {
    name: 'SupportsList',
    components: {
        SupportsGlobal
    },
    setup(){
        const store = useStore();
        const loading = ref(false)

        const lessons = computed(() => store.state.courses.lessonPlayer)
        const supports = computed(() => store.state.supports.supports.data)

        watch(() => store.state.courses.lessonPlayer, () => {
                loading.value = true
                store.dispatch('getSupports', lessons.value.id)
                    .finally(() => loading.value = false)
            }
        )

        return {
            lessons,
            loading,
            supports
        }
    }
}
</script>
  