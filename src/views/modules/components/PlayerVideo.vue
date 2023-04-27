<template>
    <div class="training">
        <div class="card bg-laravel">
            <span class="icon">
                <img src="images/icons/laravel.svg" alt="">
            </span>
            <span class="title">{{ getLesson.name }}</span>
            <router-link :to="{'name': 'campus.home'}" class="btn laravel">
                Voltar
            </router-link>
        </div>
        <iframe 
            v-if="getLesson.video"
            width="100%" height="auto" 
            :src="getLesson.video" 
            :title="getLesson.name" 
            frameborder="0" 
            allow="accelerometer; autoplay; 
            clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    </div>
    <div class="description-lesson" v-if="getLesson.video">
        {{ lesson.description }}
    </div>
</template>

<script>

import { useStore } from 'vuex';
import { computed } from 'vue'

export default {
  name: 'PlayerVideo',
  setup(){
    const store = useStore()
    
    const getLesson = computed(() => store.state.courses.lessonPlayer)

    return {
        getLesson
    }
  }
}
</script>