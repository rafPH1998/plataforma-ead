<template>
     <div class="left">
        <div class="card">
            <div class="title bg-laravel">
                <span class="text">Modulos</span>
                <span class="icon far fa-stream"></span>
            </div>
            
            <template v-if="getModules.length > 0">
                <div  
                    v-for="modules in getModules" 
                    :key="modules.id"
                    @click.prevent="toggleModules(modules)"
                    :class="[
                        'modules active',
                    ]">
                    <div class="name">
                        <span class="text">{{modules.name}}</span>
                        <span class="icon fas fa-sort-down"></span>
                    </div>

                    <ul class="classes" 
                        v-if="modules.lessons.length > 0" 
                        v-show="showModules == modules.id">
                        <li
                            v-for="lessons in modules.lessons" 
                            :class="[
                                lessons.id == showLesson.id ? 'active' : ''
                            ]"
                            :key="lessons.id" 
                            @click.prevent="addLeessonInPlayer(lessons)"
                            @click.stop>
                            <span v-if="lessons.views.length > 0" class="check active fas fa-check"></span>
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
import { ref } from 'vue'

export default {
    name: 'ModulesList',

    setup() {

        const store = useStore();
        const showModules = ref('0');

        const toggleModules = (module) => {
            if (showModules.value == module.id) {
                showModules.value = '0';
            } else {
                showModules.value = module.id;
                store.commit('REMOVE_LESSON_PLAYER', module.lesson)
            }
        }
        
        const addLeessonInPlayer = (lesson) => {
            store.commit('SET_LESSON_PLAYER', lesson)
            store.dispatch('markViewedLesson', lesson.id)
        }

        const showLesson = computed(() => store.state.courses.lessonPlayer)
        const getModules = computed(() => store.state.courses.courseSelected.modules)

        return {
            getModules,
            showLesson,
            showModules,
            toggleModules,
            addLeessonInPlayer
        }
    }
}
</script>
  