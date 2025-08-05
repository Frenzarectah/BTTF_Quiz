<script setup>
import questions from '../data/data.json';
import Card from '../components/Card.vue';
import { ref,watch } from "vue"
import gsap from 'gsap';

const quizzes = ref(questions);
const search = ref("")

watch(search, () =>{
 quizzes.value = questions.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
})

const before = (el) =>{
  el.style.opacity = 0;
  el.style.transform = "translateX(-20px)";
}
const enter = (el) =>{
  gsap.to( el, {
    x: 0,
    opacity: 1,
    duration: 0.5,
    delay: el.dataset.idx * 0.3
  })
}

</script>

<template>
  <body>
    <div class="container">
      <header>
        <h1>Back to the future trilogy quiz time</h1>
        <input  v-model.trim="search" type="text" placeholder="Search...">
      </header>
      <div class="options-container">
        <TransitionGroup name="appear" appear @before-enter="before" @enter="enter">
          <Card v-for="(quiz,idx) in quizzes" :key="quiz.id" :quiz="quiz" :data-idx="idx"/>
        </TransitionGroup>
      </div>
    </div>
  </body>
</template>
<style scoped>
  body{
    background-color: #fffaff;
  }
  .container{
    max-width: 1000px;
    margin: 0 auto;
    font-family: "Lilita One", sans-serif;
    font-weight:100;
    font-style: light;
    background-color: #fffaff;
  }
  header{
    margin-bottom: 10px;
    margin-top: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  header h1{
    font-weight: bold;
    margin-right:30px;
  }
  header input{
    border: none;
    background-color: rgba(128,128,128,0.1);
    padding: 10px;
    border-radius: 5px;
  }
  .options-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 40px;
  }
</style>