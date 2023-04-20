<template>
    <div class="comments">
        <div class="header">
            <span class="title">Dúvidas</span>
            <button class="btn primary">
                <i class="fas fa-plus"></i>
                Enviar nova dúvida
            </button>
        </div>

        <supports-global/>
    </div>
</template>
  
  
<script>
import SupportsGlobal from '@/components/SupportsGlobal.vue';
export default {
    name: 'SupportsList',
    components: {
        SupportsGlobal
    }
}
</script>
  