<template>
      <button v-on:click="counter += 1" class="btn-like">
    <img src="../public/img/iconLike.svg" alt="" srcset="" />
    <p>Likes : {{ counter }}</p>
  </button>
</template>
<script lang="js">
export default {
  props: {
 
  },

  data () {
    return {
      counter: 0,
       show: true
    }
      
  }
}
</script>
<style scoped>
.data{
  display: flex;
  
  margin-bottom: 2%;
}
.btn-like{
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
 
}
</style>