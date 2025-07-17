<script setup>
import questions from '../data/data.json'
import Question from '../components/Question.vue';
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';

const route = useRoute()
const question = questions.find(q => q.id === parseInt(route.params.id)).questions ;
//const paginated_question = question.find(q => q.id === parseInt(route.params.page));
const current_question = ref(0);
const question_status = `${current_question.value}/${question.length}`;
</script>
<template>
        <div class="container">
        <Question :obj="question[current_question]" :question_counter="question_status" :page="current_question"/>  <!-- here's the passage of the obj paginated_question to component -->
        </div> 
        <button @click="current_question++">Next Question</button>       
</template>
<style scoped>
.container{
    display:flex;
    justify-content: center;
}
</style>