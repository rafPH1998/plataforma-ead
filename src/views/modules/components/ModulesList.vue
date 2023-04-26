<template>
     <div class="left">
        <div class="card">
            <div class="title bg-laravel">
                <span class="text">Modulos</span>
                <span class="icon far fa-stream"></span>
            </div>
            
            <template v-if="getModules.length > 0">
                <div class="modules" v-for="modules in getModules" :key="modules.id">
                    <div class="name">
                        <span class="text">{{modules.name}}</span>
                        <span class="icon fas fa-sort-down"></span>
                    </div>
                    <ul class="classes" v-if="modules.lessons.length > 0">
                        <li class="active" v-for="lessons in modules.lessons" :key="lessons.id">
                            <span class="check active fas fa-check"></span>
                            <span class="nameLesson">{{ lessons.name }}</span>
                        </li>
                    </ul>
                    <span v-else style="color: white; font-size: 12px; padding: 10px;">
                        Nenhuma aula para este módulo.
                    </span>
                </div>
            </template>
            <span v-else style="color: white; font-size: 12px; padding: 10px;">
                Nenhum módulo cadastrado no momento.
            </span>
        </div>
    </div>
</template>

<script>

import { useStore } from 'vuex';
import { computed } from 'vue'

export default {
    name: 'ModulesList',

    setup() {

        const store = useStore();
        const getModules = computed(() => store.state.courses.courseSelected.modules)

        return {
            getModules
        }
    }
}
</script>
  