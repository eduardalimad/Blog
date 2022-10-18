<template>
  <div class="container">
    <div class="header">
      <div class="nav">
        <h2>Codelândia</h2>
        <h2>Blog</h2>
      </div>
      <div>
        <Search v-model="text" class="InputSearch" />
      </div>
    </div>
    <div class="container-post">
      
      <div class="post" v-for="(item, key) in filteredItems" :key="key">
        <div class="data">
          <p> 02 de jul, 2021 </p>  
          <Button-counter></Button-counter>
        </div>        
        <h3>{{ item.Titulo }}</h3>
        {{ item.Post }}
      </div>
      
    </div>
  </div>
</template>
<script lang="js">
export default {
  props: {
    listCollaborators: {
      type: [Array, Object],
      required: true
    }
  },

  data () {
    
    return {
      text: '',
      counter: 0,
      selected: null,
      fields: [
        {
          key: "Titulo",
          Post: "Post"
        },
        
      ],
      items: [
        {
          Titulo: "Agora é oficial: o Windows 11 está vindo ",
          Post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.",
        },
        {
          Titulo: "Tim Berners-Lee vai leiloar código-fonte da web",
          Post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.",
        },
        {
          Titulo: "Tem Firefox novo no pedaço e você vai querer migrar",
          Post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.",
        },
        {
          Titulo: "John McAfee, criador do antivírus McAfee, morre",
          Post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.",
        },
        {
          Titulo: "Tem Firefox novo no pedaço e você vai querer migrar",
          Post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.",
        },
        {
          Titulo: "John McAfee, criador do antivírus McAfee, morre",
          Post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.",
        },
         
      ],
      text: "",
      selected: null,
    };
  },
  computed: {
    filteredItems() {
      let valores = [];
      valores = this.items.filter((item) => {
        return (
        
          (item.Post.toLowerCase().includes(this.text.toLowerCase()) ||
            item.Titulo.toLowerCase().includes(this.text.toLowerCase()))
        );
      });
      return valores;
    },
  },
  
 
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.container {
  min-width: 100vw;
  min-height: 100vh;
  margin: 0;
}
.header {
  display: grid;
  margin-top: 0;
  font-family: "Lexend Deca", sans-serif;
  background: linear-gradient(88.27deg, #574AE8 0%, #3EA1DB 100%);
  color: white;
  width: 100%;
  height: 12rem;
  margin-left: 0;
}
.nav {
  width: 100%;
  margin-top: 2%;
  display: grid;
  grid-template-columns: 150px 150px;
  justify-content: space-around;
  align-content: space-evenly;
  justify-items: center;
}
@media only screen and (max-width: 554px) {
  .nav {
    width: auto;
   display: flex;
   flex-wrap: wrap;
  
  }
  .header{
    display: flex;
    flex-wrap: wrap;
    width: auto;
    flex-direction: column
  }

}
.form {
  display: grid;
  grid-column-start: 2;
  grid-column-end: 1;
  grid-row-start: 0;
  grid-row-end: 0;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.post {
  width: 60%;
  min-height: 25vh;
  margin: auto;
  margin-top: 2rem;
  background: #FFFFFF;
  box-shadow: 0px 0px 10px rgba(19, 19, 31, 0.05);
  border-radius: 5px;
  padding: 2%;
}
.data{
  display: flex;
  justify-content: space-between;
  margin-bottom: 2%;
}




</style>