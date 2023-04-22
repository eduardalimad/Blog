<template>
  <div class="container">
    <header>
      <nav>
        <h2>Codelândia</h2>
        <h2>Blog</h2>
        <Search v-model="text" class="inputSearch" />
      </nav>
    </header>
    <main class="container-post">
      <div v-if="text === ''">
        <section class="post" v-for="(item, key) in posts" :key="key" >
            <button v-bind:href="minhaUrl"> click-me </button>
          <span>{{ item.author}} </span>
          <span>{{formatDate(item.publishedAt)}}</span>
          <h3>{{ item.title }}</h3>
          <span>Lorem ipsum dolor, officiis, deleniti saepe maiores? Possimus ad optio eius magni labore odio.</span>
          
        </section>
      </div>
      <div v-else>
        <section class="post" v-for="(item, key) in filteredItems" :key="key">
          <h3>{{ item.title }}</h3>
          <span>{{ item.owner_username }} </span>
        </section>
      </div>
    </main>
  </div>
</template>
<script lang="js">
import http from "../services/config/index"
import dayjs from 'dayjs'
export default {
  data () {
    return {
      text: '',
      posts:{},
      minhaUrl:''
      
    };
  },
  async fetch(){
     await http.get('country=br&category=technology&apiKey=68a4252392ee4192bb6aa71d51f43167').
     then((res)=> {
      const resultado = res.data.articles
      this.posts = resultado    
    
})
  },
  methods: {
    formatDate (date) {
      return dayjs(date).format('DD/MM/YYYY')
    },
  },
    computed: {
    filteredItems() {
      let valores = [];
      valores = this.posts.filter((item) => {
        return (
        
          (
            item.title.toLowerCase().includes(this.text.toLowerCase()))
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
  min-width: 98vw;
  min-height: 100vh;
  margin: 0;
}
header {
  display: grid;
  margin-top: 0;
  font-family: "Lexend Deca", sans-serif;
  background: linear-gradient(88.27deg, #574ae8 0%, #3ea1db 100%);
  color: white;
  width: 100%;
  height: 12rem;
  margin-left: 0;
}
nav {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 75px);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-items: center;
  align-items: center;
}

.inputSearch {
  grid-area: 2 / 1 / 3 / 4;
  place-items: center;
}

main {
  margin-bottom: 2rem;
}
.post {
  width: 60%;
  min-height: 25vh;
  margin: auto;
  margin-top: 2rem;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(19, 19, 31, 0.05);
  border-radius: 5px;
  padding: 2%;
}
.data {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2%;
}
@media only screen and (max-width: 768px) {
  .post {
    width: 80%;
  }
}
</style>