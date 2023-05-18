<template>
    <div>
        <header id="header">
            <nav>
                <span class="toggleMenu far fa-bars" @click="toggleMenu()"></span>
                <span class="logo">
                    <img :src="require('@/assets/images/logo.svg')" alt="">
                </span>
            </nav>
        </header>

        <div v-show="showMenu">
            <transition name="fade">
                <ul id="mainMenu">
                    <li>
                        <router-link :to="{name: 'campus.home'}">Início</router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'campus.my.supports'}">Minhas dúvidas</router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'campus.home'}" @click.prevent="logout()">Sair</router-link>
                    </li>
                </ul>
            </transition>
        </div>
    </div>
</template> 

<script>
import router from '@/router'
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
    name: 'HeaderComponent',
    setup() {
        const showMenu = ref(false)
        const store = useStore()

        const toggleMenu = () => {
            showMenu.value = !showMenu.value
        }

        const logout = () => {
            store.dispatch('logout')
                .then(() => {
                    router.push({name: 'auth'})
                })
        }

        return {
            toggleMenu,
            logout,
            showMenu
        }
    }
}

</script>