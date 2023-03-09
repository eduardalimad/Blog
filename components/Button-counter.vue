<template>
  <button v-on:click="counter += 1" class="btn-like">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" /> 
    <span class="material-symbols-outlined">favorite</span>
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
.data {
  display: flex;
  margin-bottom: 2%;
}
.btn-like {
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
}


.material-symbols-outlined {
  color: rgba(7, 67, 231, 0.867);
  fill: #cd1212;
  font-variation-settings:
  'FILL' 0,
  'wght' 700,
  'GRAD' 0,
  'opsz' 48,
  
}
.material-symbols-outlined:hover {
    color: #cd1212;
}
</style>