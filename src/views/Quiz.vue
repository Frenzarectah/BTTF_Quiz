<script setup>
import questions from '../data/data.json'
import Question from '../components/Question.vue';
import Result from '@/components/Result.vue';
import { useRoute } from 'vue-router';
import { ref, computed } from 'vue';

const route = useRoute()

const current_question = ref(0);
const correct_questions = ref(0);
const showResult = ref(false);

const question = questions.find(q => q.id === parseInt(route.params.id)).questions;
const barPercentage = computed(()=>(current_question.value+1)/question.length*100+"%");
const question_status = computed(()=> `${current_question.value+1}/${question.length}`);

const onOptionSelected = (isCorrect) =>{
 if(isCorrect){
    correct_questions.value++;
 }
 if(current_question.value < question.length -1){
 current_question.value++;
 }else{
    showResult.value = true;
 }

}

</script>
<template>
        <div class="container" v-if="!showResult">
        <Question @select-option="onOptionSelected" :obj="question[current_question]" :question_counter="question_status" :page="current_question" :percent="barPercentage"/>  <!-- here's the passage of the obj paginated_question to component -->
        </div>
        <Result v-else :correct="correct_questions" :total="question.length"/>
</template>

<style scoped>
.container{
    display:flex;
    justify-content: center;
    background-color: #fff0ff;
}
</style>