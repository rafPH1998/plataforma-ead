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
                        <router-link :to="{name: 'campus.home'}">Sair</router-link>
                    </li>
                </ul>
            </transition>
        </div>
    </div>
</template> 

<script>
import { ref } from 'vue'

export default {
    name: 'HeaderComponent',
    setup() {
        const showMenu = ref(false)

        const toggleMenu = () => {
            showMenu.value = !showMenu.value
        }

        return {
            toggleMenu,
            showMenu
        }
    }
}

</script>