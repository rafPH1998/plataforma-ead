<template>
  <div class="content">
      <ul class="listCourses">
        <card-course 
          :title="'Fake'"
          :image="''"
          :bgName="'laravel'">
        </card-course>
      </ul>
  </div>
</template>


<script>

import CardCourse from './components/CardCourse.vue'

export default {
  name: 'HomeView',
  components: {
    CardCourse
  }
}
</script>
