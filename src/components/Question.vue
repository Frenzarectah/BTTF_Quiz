<script setup>
import { defineProps } from 'vue';
defineProps(['obj','question_counter','current_question']);

</script>

<template>
  <div>
    <header>
      <h4>Question {{ question_counter }}</h4>
      <div class="bar">
        <div class="completion"></div>
      </div>
    </header>

    <div>
      <div class="question-container">
        <h1 class="question">
          {{ obj.text }}
        </h1>
      </div>
      <div class="options-container">
        <div class="option" v-for="opt in obj.options" :key="opt.id">
          <p class="option-label">{{ opt.label }}</p>
          <div class="option-value">{{ opt.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
header{
    margin-top: 20px;
}
h4{
    font-size: 30px;
}
.bar{
    width:300px;
    height: 50px;
    border: 3px solid bisque;
}
.completion{
    height:100%;
    width:0%;
    background-color: bisque;
}
.question-container{
    margin-top:20px;
}
.question{
    font-size: 40px;
}
.option{
    display: flex;
    align-items: center;
    margin-bottom:10px;
    cursor: pointer;
}
.option-label{
    background-color: bisque;
    width:60px;
    height:60px;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.option-value{
    background-color: rgb(244,239,239);
    width:100%;
    height: 60px;
    font-size: 30px;
    padding:0 10px;
    display: flex;
    align-items: center;
}
</style>