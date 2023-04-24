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
                                <div class="groupForm">
                                    <i class="far fa-key"></i>
                                    <input type="password" name="password" placeholder="Senha" required v-model="password">
                                    <i class="far fa-eye buttom"></i>
                                </div>
                                <button class="btn primary" type="submit" @click.prevent="resetPassword()">
                                    <span v-if="loading">Alterando...</span>
                                    <span v-else>Mudar senha</span>
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

import router from '@/router';
import AuthService from '@/services/AuthService';
import { ref } from 'vue';
import { notify } from "@kyvg/vue3-notification";

export default {
    name: 'ResetPasswordView',
    props: {
        token: {
            required: true
        },
    },
    
    setup(props) {

        const email = ref('')
        const password = ref('')
        const loading = ref(false);

        const resetPassword = () => {
            loading.value = true;

            AuthService.resetPassword({
                email    : email.value,
                password : password.value,
                token    : props.token
            })
            .then(() => {
                notify({
                    title: "Boa!",
                    text: "Senha alterada com sucesso!",
                    type: "success"
                });

                router.push({name: 'auth'})
            })
            .catch(() => {
                notify({
                    title: "Falha ao recuperar senha!",
                    text: "Senha e/ou e-mail inválidos!",
                    type: "error"
                });
            })
            .finally(() => loading.value = false)
        }

    return {
        resetPassword,
        email,
        password,
        loading
    }
}
}
</script>