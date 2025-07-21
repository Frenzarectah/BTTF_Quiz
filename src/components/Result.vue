<script setup>
const { correct,total } = defineProps(['correct','total']);
</script>
<template>
    <div class="results">
        <p>Your results...</p>
        <div v-if="correct <= 5">
            <img alt="biff" width="200px" height="200px" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcostumerocket.com%2Fwp-content%2Fuploads%2F2023%2F01%2Fbiff-tannen-costume.jpg&f=1&nofb=1&ipt=cfe86b0cd274f0c9df41838b3a4c6b3a1ff93b5206c049fb78f0eb2b5587463a"/>
             <h3>BIFF</h3>
             <p> Your knowledge about BTTF is poor and confused, just like Biff and his pal, so stop to be arrogant and go see the films again and again!</p>
        </div>
        <div v-else-if="correct >= 9 && correct < 10">
            <img alt="marty "width="200px" height="200px" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fviapais.com.ar%2Fresizer%2Fz-vm8dl5EBvMfFto7_6dlYHRQ8Y%3D%2F980x640%2Fsmart%2Ffilters%3Aquality(75)%3Aformat(webp)%2Fcloudfront-us-east-1.images.arcpublishing.com%2Fgrupoclarin%2F2MQ7XOSVXNACRFTUO64RCAK2RA.jpg&f=1&nofb=1&ipt=f2f1dfbb48d2109796710c74ccaddfa5de9f9bc0bb8789d21ae68071325b3e57"/>
              <h3>MARTY MCFLY</h3>
              <p> Congrats! You made it well, from 6 to 9 correct answers! Your knowledge of BTTF is very good but not the best, make it perfect by watching the trilogy once or twice, It'll be better!</p>
        </div>
        <div v-else="correct == 10">
            <img width="200px" height="200px" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.images.express.co.uk%2Fimg%2Fdynamic%2F36%2F590x%2Fsecondary%2Fdoc-brown-2015-2300497.jpg%3Fr%3D1581067400804&f=1&nofb=1&ipt=ad0d27a4338347a865ad2f8c97918e8d191ac98584bcae3d99ef01af897e28fe" />
               <h3>DOC BROWN</h3>
               <p>GREAT SCOTT! You're awesome! Seems like you wrote the three films by yourself! 10/10! You are the BTTF Genius, just like DOC!</p>
        </div>    
          <h1>
            {{ correct }}/{{ total }}
        </h1>
    </div>
</template>

<style scoped>
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
</style>