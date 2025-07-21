<script setup>
const { correct,total } = defineProps(['correct','total']);
</script>
<template>
    <div class="results">
        <p>Your results...</p>
        <img v-if="correct <= 5" width="200px" height="200px" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcostumerocket.com%2Fwp-content%2Fuploads%2F2023%2F01%2Fbiff-tannen-costume.jpg&f=1&nofb=1&ipt=cfe86b0cd274f0c9df41838b3a4c6b3a1ff93b5206c049fb78f0eb2b5587463a"/>
        <img v-else-if="correct >=6" width="200px" height="200px" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fviapais.com.ar%2Fresizer%2Fz-vm8dl5EBvMfFto7_6dlYHRQ8Y%3D%2F980x640%2Fsmart%2Ffilters%3Aquality(75)%3Aformat(webp)%2Fcloudfront-us-east-1.images.arcpublishing.com%2Fgrupoclarin%2F2MQ7XOSVXNACRFTUO64RCAK2RA.jpg&f=1&nofb=1&ipt=f2f1dfbb48d2109796710c74ccaddfa5de9f9bc0bb8789d21ae68071325b3e57"/>
        <img v-else  width="200px" height="200px" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.images.express.co.uk%2Fimg%2Fdynamic%2F36%2F590x%2Fsecondary%2Fdoc-brown-2015-2300497.jpg%3Fr%3D1581067400804&f=1&nofb=1&ipt=ad0d27a4338347a865ad2f8c97918e8d191ac98584bcae3d99ef01af897e28fe" />
        <h1>
            {{ correct }}/{{ total }}
        </h1>
    </div>
</template>

<style scoped>
.results{
    text-align: center;
    padding: 100px 0;
    font-family: "Lilita One", sans-serif;
    font-weight: 400;
    font-style: normal;
}
p{
    font-size:25px;
}
h1{
    font-size:80px;
}
</style>