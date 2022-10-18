
<template>
  <header>
    <div class="container">
      <Main />
    </div>
  </header>


 
</template>

<script lang="js">
import Vue from "vue";
import Main from '../components/Main.vue';
export default {
   props: {
    title: String,
    data: String,
  },
}

</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap');

html, body {
  
    min-width: 100%;
    height: 100%;
    font-family: 'Lexend Deca', sans-serif;
    padding: 0;
    margin: 0;
    background: rgb(231, 231, 231);

  
  
}
 @media only screen and (max-width: 548px) {
  .container {
   min-width: 100%;
  }
}
</style>

