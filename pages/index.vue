<template>
  <div class="container">
    <header>
      <nav>
        <h2>News</h2>
        <h2>Blog</h2>
        <Search v-model="text" class="inputSearch" />
      </nav>
    </header>

    <CardMain
      v-for="(itemsToShow, item) in itemsToShow"
      :key="item.id"
      :data="itemsToShow"
    />

    <Paginacao :current-page.sync="currentPage" :total-pages="totalPages" />
  </div>
</template>

<script lang="js">
import http from "../services/config/index"
export default {
  data () {
    return {
      text: '',
      posts:[],
      currentPage: 1,
      itemsPerPage: 5,
  
    }
  },
   fetch(){
    http.get('language=pt&country=br&category=entertainment&apiKey=68a4252392ee4192bb6aa71d51f43167').
     then((res)=> {
      this.posts = res.data.articles
      console.log(this.posts);
    })
  },
  computed: {
     totalPages() {
      return Math.ceil(this.posts.length / this.itemsPerPage)
    },

     itemsPagination() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage
      const endIndex = startIndex + this.itemsPerPage
      return this.posts.slice(startIndex, endIndex)
    },
    filteredItems() {
    return this.itemsPagination.filter(item =>
    item.title.toLowerCase().includes(this.text.toLowerCase()));
},
    itemsToShow() {
      return this.text === '' ? this.itemsPagination : this.filteredItems
    }
  }

}
</script>
<style >
@import url("https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap");

html,
body {
  min-width: 100%;
  height: 100%;
  font-family: "Lexend Deca", sans-serif;
  padding: 0;
  margin: 0;
  background: rgb(231, 231, 231);
}
header {
  display: grid;
  background: linear-gradient(88.27deg, #574ae8 0%, #3ea1db 100%);
  color: white;
  height: 12rem;
}

nav {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 75px);
  justify-items: center;
  align-items: center;
}

.inputSearch {
  grid-area: 2 / 1 / 3 / 4;
  place-items: center;
}

@media only screen and (max-width: 548px) {
  .container {
    width: 100%;
  }
}
</style>

