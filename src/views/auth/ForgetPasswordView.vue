<template>
    <div>
        <section id="loginPage" 
            :style="{
                backgroundImage: 'url('+ require('@/assets/images/bgLogin.jpg') +')'
            }">
            <div class="loginContent">
                <div class="loginCard">
                    <div class="decor" style="background-image: url('./assets/images/building.jpg')">
                        <div class="content">
                            <span class="logo">
                                <img :src="require('@/assets/images/logo.svg')" alt="">
                            </span>
                            <span class="dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                            <span class="description">
                                <p>
                                    Os melhores e mais completos cursos de Laravel do Brasil, cursos com projetos reais. Do zero ao profissional.
                                </p>
                            </span>
                            <span class="copyright fontSmall">
                                Todos os Direitos reservados - <b>Especializati</b>
                            </span>
                        </div>
                    </div>
                    <div class="login">
                        <div class="content">
                            <span class="logo">
                                <img src="images/logoDark.svg" alt="">
                            </span>
                            <span>
                                <p>Seja muito bem vindo!</p>
                            </span>
                            <span class="dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                            <span class="description">
                                Acesse nossa plataforma e desfrute de cursos completos para sua especialização.
                            </span>
                            <form action="#" method="POST">
                                <div class="groupForm">
                                    <i class="far fa-envelope"></i>
                                    <input type="email" name="email" placeholder="Email" required v-model="email">
                                </div>
                                <button class="btn primary" type="submit" @click.prevent="forgetPassword()">
                                    <span v-if="loading">Recuperando...</span>
                                    <span v-else>Recuperar</span>
                                </button>
                            </form>
                            <span>
                                <p class="fontSmall">
                                    <router-link :to="{name: 'auth'}" class="link primary">Acessar a conta</router-link>
                                </p>
                            </span>
                        </div>
                        <span class="copyright fontSmall">
                            Todos os Direitos reservados - <b>Especializati</b>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

import { useStore } from 'vuex';
import { ref } from 'vue';
import { notify } from "@kyvg/vue3-notification";

export default {
    name: 'ForgetPasswordView',
    setup() {

    const store = useStore()
    const email = ref('')
    const loading = ref(false);

    const forgetPassword = () => {
        loading.value = true;

        store.dispatch('forgetPassword', {email: email.value})
            .then(()       => {
                notify({
                    title: "Sucesso!",
                    text: "Confira seu e-mail para alterar sua senha.",
                    type: "success"
                });
            })
            .catch(() => {
                notify({
                    title : "Atenção!",
                    text  : "O e-mail inserido está incorreto.",
                    type  : "warning"
                });
            })
            .finally(() => loading.value = false)
    }

    return {
        forgetPassword,
        email,
        loading
    }
}
}
</script>