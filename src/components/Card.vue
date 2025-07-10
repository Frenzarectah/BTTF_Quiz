<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const { quiz } = defineProps(['quiz'])

const router = useRouter();
</script>
<template>
    <div class="card" @click="router.push(`/${quiz.name}`)">
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
    width:250px;
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