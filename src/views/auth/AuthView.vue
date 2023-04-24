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
                                <button 
                                    :class="[
                                        'btn', 
                                        'primary',
                                        loading ? 'loading' : ''
                                    ]" 
                                    type="submit" 
                                    @click.prevent="login()">
                                    <span v-if="loading">Logando...</span>
                                    <span v-else>Login</span>
                                </button>
                            </form>
                            <span>
                                <p class="fontSmall">Esqueceu sua senha?
                                    <router-link :to="{name: 'forgot.password'}" class="link primary">
                                        Clique aqui
                                    </router-link>
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
import router from '@/router';
import { notify } from "@kyvg/vue3-notification";

export default {
    name: 'AuthView',
    setup() {

        const store = useStore()
        const email = ref('')
        const password = ref('')
        const loading = ref(false);

        const login = () => {
            loading.value = true;

            store.dispatch('auth', {
                email      : email.value,
                password   : password.value,
                device_name: 'teste'
            })
            .then(() => router.push({name: 'campus.home'}))
            .catch(() => {
                notify({
                    title: "Falha ao autenticar!",
                    text: "Senha e/ou e-mail inválidos!",
                    type: "error"
                });
            })
            .finally(() => {
                loading.value = false
            })
        }

        return {
            login,
            email,
            password,
            loading
        }
    }
}
</script>