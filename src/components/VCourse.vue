<template>
  <div class="main_app">
    <div class="course-container">
      <h1 class="label">{{course.name}}</h1>
      <h1 class="label">{{course.rating}}</h1>
      <h1 class="label">{{course.subject}}</h1>
    </div>
  </div>
</template>

<script>
import Course from '../models/Course.js'

export default {
  name: 'VCourse',
  props: {
    course: Course
  },
  created () {
    // console.log(this.course.name)
  }
}
</script>

<style>

.main_app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.course-container{
  background-color: #F5F8FA;
  border-radius: 5px;
  display: flex;
  width: 300px;
  padding: 20px;
  justify-content: space-evenly;
  margin: 0px;
  margin-bottom: 15px;
}

.label{
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 400;
}
</style>
