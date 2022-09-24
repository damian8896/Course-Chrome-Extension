import { createApp } from 'vue'
import popupView from '../view/popup.vue'
import Course from '../models/Course.js'

let t = [new Course("english", 10, "english"), new Course("test", 10, "test"), new Course("test", 10, "test"), new Course("test", 10, "test"), new Course("test", 10, "test"), new Course("test", 10, "test")];
console.log(t);
createApp(popupView, {courses: t}).mount('#app')
