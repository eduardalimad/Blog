<template>
    <div class="form">
        <div class="search">
        <input type="text"
        placeholder="Pesquisar no blog"
        class="inputSearch"
        :value="text"  
        @input="onInput"
        />
        
    </div>
            
            </div>
</template>
<script lang="js">
    export default {
      model: {
        prop: 'text',
        event: 'update'
      },
      props: {
        text: {
          type: String,
          default: ''
        }
      },
      methods: {
        onInput(event) {
          this.$emit('update', event.target.value)
        }
      }
    }
  </script>
<style scoped>

input {
  height: 3rem;
  width: 25rem;
  border: 1px solid rgba(255, 255, 255, 0);
  color: rgb(255, 255, 255);
  font-size: 2.5rem;
  background: rgba(255, 255, 255, 0.548);
  background-image: url("../public/img/iconSearch.svg");
  background-repeat: no-repeat;
  background-position-y:12px;
  background-position-x: end;
  font-size: medium;
  padding-left: 3rem;

}
 @media only screen and (max-width: 548px) {
  input {
   width: 90%;
  }
}

</style>