<script setup>
const { correct,total } = defineProps(['correct','total']);
</script>
<template>
    <div class="results">
        <p>Your results...</p>
        <div v-if="correct <= 5">
            <img alt="biff" width="200px" height="200px" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnekorandom.files.wordpress.com%2F2021%2F05%2Fe208a-back-to-the-future-biff-tannen-1955.jpg&f=1&nofb=1&ipt=07141d6dc3c93f6ff3b7875865933733dcaab5e463ba6dac6fa22b1e874a7d67">     
             <h3>BIFF</h3>
             <p> Your knowledge about BTTF is poor and confused, just like Biff and his pal, so stop to be arrogant and go see the films again and again!</p>
        </div>
        <div v-else-if="correct >= 9 && correct < 10">
            <img alt="marty "width="200px" height="200px" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.jacketsmasters.com%2Fwp-content%2Fuploads%2F2022%2F10%2Fback-to-the-future-marty-mcfly-red-vest.jpg&f=1&nofb=1&ipt=75e255b292f66618cba40f5a8fd33c1d14429881105a5fd9dcc26d8166a07c2c"/>
              <h3>MARTY MCFLY</h3>
              <p> Congrats! You made it well, from 6 to 9 correct answers! Your knowledge of BTTF is very good but not the best, make it perfect by watching the trilogy once or twice, It'll be better!</p>
        </div>
        <div v-else="correct == 10">
            <img width="200px" height="200px" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcostumerocket.com%2Fwp-content%2Fuploads%2F2023%2F01%2Fdoc-brown-costume.jpg&f=1&nofb=1&ipt=049d37392422e619b4e54ae38da39087fa8a63e39dc3befaff9161f9977444aa">
               <h3>DOC BROWN</h3>
               <p>GREAT SCOTT! You're awesome! Seems like you wrote the three films by yourself! 10/10! You are a BTTF Genius, just like DOC!</p>
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