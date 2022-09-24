<template>
  <div class="main_app background">
    <div class="course-wrapper">
      <VCourse 
        v-for="(course, index) in courses"
          :course="course"
          :key="index"
        ></VCourse>
    </div>
  </div>
</template>

<script>
import VCourse from '../components/VCourse.vue'

export default {
  name: 'App',
  props: {
    courses: Array
  },
  components: {
    VCourse
  },
  created(){
    console.log(this.courses)
  }
}

</script>

<style>

body{
  margin: 0px;
}

.main_app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

.background{
  background-color: #E31736;
  padding: 10px;
}

.course-wrapper {
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: white;
  border-radius: 5px;
}
</style>
