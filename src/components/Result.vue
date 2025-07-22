<script setup>
const { correct,total } = defineProps(['correct','total']);
</script>
<template>
    <div class="results">
        <p>Your results...</p>
        <div v-if="correct <= 5">
            <img alt="biff" width="200px" height="200px" src="/src/assets/biff.jpg">     
             <h3>BIFF</h3>
             <p> Your knowledge of BTTF is poor and confused... just like Biff and his gang! So quit being cocky and go rewatch the trilogy... again and again!</p>
        </div>
        <div v-else-if="correct >= 9 && correct < 10">
            <img alt="marty "width="200px" height="200px" src="/src/assets/marty.jpg"/>
              <h3>MARTY MCFLY</h3>
              <p> You did well, 6 to 9 correct answers! Your knowledge of BTTF is really good, but not perfect just yet. Watch the trilogy once or twice more and you’ll be a true time-travel expert!</p>
        </div>
        <div v-else="correct == 10">
            <img width="200px" height="200px" src="/src/assets/doc.jpg">
               <h3>DOC BROWN</h3>
               <p>GREAT SCOTT! You're awesome! Seems like you wrote the three films yourself! 10/10! You are a BTTF Genius, just like Doc!</p>
        </div>    
          <h1>
            {{ correct }}/{{ total }}
        </h1>
    </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
  background-color: #fffaff;
}
div{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.results{
    text-align: center;
    padding: 100px 0;
    font-family: "Lilita One", sans-serif;
    font-weight: 400;
    font-style: normal;
}
p{
    font-size:25px;
    width:500px;
}
h1{
    font-size:80px;
}
img{
    border-radius:50%;
}
@media screen and (max-height: 900px) {
    p{
    font-size:25px;
    width:90%;
}
}
</style>