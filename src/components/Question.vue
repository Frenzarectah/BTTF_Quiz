<script setup>
import { defineProps, defineEmits } from 'vue';
defineProps(['obj','question_counter','current_question','percent']);
const emit = defineEmits(['selectOption']);

const emitSelectedOption = (isCorrect) =>{
    emit("selectOption",isCorrect)
}
 </script>

<template>
  <div>
    <header>
      <h4>Question {{ question_counter }}</h4>
      <div class="bar">
        <div class="completion" :style="{width: percent}"></div>
      </div>
    </header>

    <div>
      <div class="question-container">
        <h1 class="question">
          {{ obj.text }}
        </h1>
      </div>
      <div class="options-container">
        <div class="option" v-for="opt in obj.options" :key="opt.id" @click="emitSelectedOption(opt.isCorrect)">
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
    font-family: "Lilita One", sans-serif;
    font-weight: 400;
    font-style: normal;
}
h4{
    font-size: 30px;
}
.bar{
    width:300px;
    height: 50px;
    border: 3px solid #fc9f5b;
    border-radius: 5px;
}
.completion{
    height:100%;
    width:0%;
    background-color: #fc9f5b;
}
.question-container{
    margin-top:20px;
    font-family: "Lilita One", sans-serif;
    font-weight: 400;
    font-style: normal;
}
.question{
    font-size: 40px;
}
.option{
    display: flex;
    align-items: center;
    margin-bottom:10px;
    cursor: pointer;
    width:100%;
    height:90px;
    transition: width 0.2s ease-out, height 0.2s ease-out;
}
.option:hover{
  width:110%;
  height:110px;
}
.options-container{
    font-family: "Lilita One", sans-serif;
    font-weight: 400;
    font-style: normal;
}
.option-label{
    background-color:  #fc9f5b;
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