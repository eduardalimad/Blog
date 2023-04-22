<template>
  <div class="container">
    <header>
      <nav>
        <h2>Codelândia</h2>
        <h2>Blog</h2>
        <Search v-model="text" class="inputSearch" />
      </nav>
    </header>

    <div class="container-post">
      <section class="post" v-for="item in itemsToShow" :key="item.id">
        <div class="header-card">
          <span>{{ item.author }}</span>
          <span>{{ formatDate(item.publishedAt) }}</span>
        </div>

        <h3>{{ item.title }}</h3>
        <span>
          Lorem ipsum dolor, officiis, deleniti saepe maiores? Possimus ad
          optio eius magni labore odio.
        </span
        >
      </section>
    </div>
  </div>
</template>
<script lang="js">
import dayjs from 'dayjs'
export default {
  props:{
    data:Object
  },
  data () {
    return {
      text: '',  
    };
  },
  methods: {
    formatDate (date) {
      return dayjs(date).format('DD/MM/YYYY')
    },
  },
    computed: {
      filteredItems() {
      return this.data.filter(item =>
      item.title.toLowerCase().includes(this.text.toLowerCase()));
},

    itemsToShow() {
      return this.text === '' ? this.data : this.filteredItems
    }
  
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
}

header {
  display: grid;
  font-family: "Lexend Deca", sans-serif;
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

.container-post {
  padding: 2rem;
}

.post {
  width: 60%;
  min-height: 25vh;
  margin: 2rem auto 0;
  background: #ffffff;
  box-shadow: 0 0 10px rgba(19, 19, 31, 0.05);
  border-radius: 5px;
  padding: 2%;
}

.header-card,
.data {
  display: flex;
  justify-content: space-between;
}

@media only screen and (max-width: 768px) {
  .post {
    width: 80%;
  }
}
</style>