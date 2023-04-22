<template>
    <div class="container">
      <CardMain :data="posts.articles"/>
    </div>

</template>

<script lang="js">
import http from "../services/config/index"
export default {
  data () {
    return {
      posts:{},
    }
  },
  async fetch(){
     await http.get('country=br&category=technology&apiKey=68a4252392ee4192bb6aa71d51f43167').
     then((res)=> {
      this.posts = res.data
    })
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
   width: 100%;
  }
}
</style>

