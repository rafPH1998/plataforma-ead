<template>
    <div class="">
        <li>
            <span :class="['card', 'bg-' + bgName]">
                <span class="icon">
                    <img :src="[course.image !== '' ? course.image : require('@/assets/images/logo.svg')]" :alt="course.title">
                </span>
                <span class="title">{{course.name}}</span>
                <span class="action">
                    <a href="#" @click.prevent="loadCourse()" class="btn laravel">Acessar </a>
                </span>
            </span>
            <span class="dots">
                <span></span>
                <span></span>
                <span></span>
            </span>
        </li>
    </div>
  </template>
  
  <script>

  import router from '@/router';
  import { useStore } from 'vuex';

  export default {
    name: 'CardCourse',
    props: ['course', 'bgName'],

    setup(props) {
        const store = useStore();

        const loadCourse = () => {
            store.commit('SET_COURSE_SELECTED', props.course);
            router.push({name: 'campus.modules'})
        }

        return {
            loadCourse
        }
    }
  }
  </script>
  