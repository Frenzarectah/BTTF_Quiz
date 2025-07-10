<script setup>
import { defineProps } from 'vue';

const { quiz } = defineProps(['quiz'])
</script>
<template>
    <div class="card">
        <img :src="quiz.img" alt="math">
        <div class="card-text">
            <h2>{{quiz.name}}</h2>
            <p>{{quiz.questions.length}} Questions</p>
        </div>
    </div>
</template>
<style scoped>
.card{
    border: none;
    margin:20px;
    width:200px;
    overflow:hidden;
    border-radius: 5px;
    box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
    cursor: pointer;
    transition: transform 0.3s;
  }
  .card:hover{
    transform: rotate(3deg);
  }
  .card img{
    width:100%;
    height:200px;
  }
  .card .card-text{
    padding: 0 5px;
  }
  
</style>