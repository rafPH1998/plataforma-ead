<template>
  <div class="content">
      <ul class="listCourses">
        <card-course
          class="animate__animated animate__fadeIn"
          style="margin-top: 15px;"
          v-for="courses in allCourses.data" 
          :key="courses.id"
          :course="courses"
          :bgName="'laravel'">
        </card-course>
      </ul>
  </div>
</template>


<script>

import CardCourse from './components/CardCourse.vue'
import { onMounted, computed} from 'vue'
import { useStore } from 'vuex';

export default {
  name: 'HomeView',
  components: {
    CardCourse
  },
  setup() {

    const store = useStore()
    const allCourses = computed(() => store.state.courses.courses)

    onMounted(() => {
      store.dispatch('getCourses')
    })

    return {
      allCourses
    }
  }
}
</script>
