<template>
    <div class="content" v-if="supports.data.length !== 0">
        <div class="card" v-for="support in supports.data" :key="support.id">
            <div class="commentContent main animate__animated animate__fadeIn">
                <span class="avatar">
                    <img :src="[
                        support.user.image ?
                        support.user.image :
                        require('@/assets/images/avatars/user01.svg')
                    ]" alt="">
                </span>
                <span class="comment">
                    <div class="balloon">
                        <span class="fas fa-sort-down"></span>
                        <span class="owner">Eu - {{support.dt_updated}}</span>
                        <span class="text">
                            {{support.description}}
                        </span>
                    </div>
                </span>
                <button class="btn primary">
                    <span v-if="showSupports !== support.id" @click.prevent="openToggleSupports(support.id)">Ver respostas ({{ support.replies.length }})</span>
                    <span v-else @click.prevent="closeToggleSupports()">Ocultar respostas</span>
                </button>
            </div>
            <div class="answersContent" v-show="showSupports == support.id">
                <div 
                    v-for="reply in support.replies" 
                    :key="reply.id"
                    :class="[
                        'commentContent',
                        support.user.id !== reply.user.id ? 'rightContent' : ''

                    ]">   
                    <span class="avatar" v-if="support.user.id === reply.user.id">
                        <img
                            :src="[
                            reply.user.image ?
                            reply.user.image :
                            require('@/assets/images/avatars/user01.svg')
                        ]" alt="">
                    </span>
                    <div class="comment">
                        <div class="balloon">
                            <span class="fas fa-sort-down"></span>
                            <span class="owner">
                                {{ support.user.id === reply.user.id ? 'Eu' : reply.user.name }} - 07/10/2021
                            </span>
                            <span class="text">
                                {{reply.description}}
                            </span>
                        </div>
                    </div>
                    <span class="avatar" v-if="support.user.id !== reply.user.id">
                        <img
                            :src="[
                            reply.user.image ?
                            reply.user.image :
                            require('@/assets/images/avatars/user02.svg')
                        ]" alt="">
                    </span>
                </div>
                <span class="answer">
                    <button class="btn primary" @click.prevent="openModal(support.id)">Responder</button>
                </span>
            </div>
        </div>
    </div>
    <div v-else>
        <div class="content">
            <div class="card">
                <div class="commentContent main">
                    <p style="color: white; font-size: 12px">Nenhum suporte para essa aula!</p>
                </div>
            </div>
        </div>
    </div>

    <supports-modal
        :show-modal="modal.showModal"
        :support-reply="modal.supportReply"
        @closeModal="modal.showModal = false"
        >
    </supports-modal>
    

</template>
  
  
<script>

import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import SupportsModal from '@/components/SupportsModal.vue';

export default {
    name: 'SupportsGlobal',
    components: {
        SupportsModal
    },

    setup() {
        const store = useStore();
        const showSupports = ref('0')

        const supports = computed(() => store.state.supports.supports)

        const openToggleSupports = (idSupport) => {
            showSupports.value = idSupport
        }

        const closeToggleSupports = () => {
            showSupports.value = 0
        }

        const modal = ref({
            showModal: false,
            supportReply: ""
        })

        const openModal = (supportId) => {modal.value = {showModal: true, supportReply: supportId}}
        
        return {
            supports,
            showSupports,
            openToggleSupports,
            closeToggleSupports,
            modal,
            openModal
        }
    }
}
</script>
  