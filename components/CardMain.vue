<template>
  <div class="container-post">
    <section class="post">
      <div class="header-card">
        <h5>{{ data.author }}</h5>
        <span> Publicado em: {{ formatDate(data.publishedAt) }}</span>
      </div>
      <div class="body-card">
        <h3>{{ data.title }}</h3>
        <p class="details-card">
          Essas notícias foram obtidas por meio de uma API, já que o conteúdo é
          proveniente de terceiros. Para ter acesso a mais informações sobre a
          notícia, é preciso ser redirecionado para o site correspondente. Basta
          clicar no link abaixo.
          <br />
          <a :href="data.url" target="_blank">Ler Mais.. </a>
        </p>
        <img
          src="@/public/img/Group.svg"
          alt="imagem ilustrativa de um site de noticias"
        />
      </div>
    </section>
  </div>
</template>
<script lang="js">
import dayjs from 'dayjs'
export default {
  props:{
    data:Object
  },
  data () {
    return { };
  },
  methods: {
    formatDate (date) {
      return dayjs(date).format('DD/MM/YYYY')
    },
  },
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.post {
  width: 60%;
  max-height: 50rem;
  height: auto;
  margin: 2rem auto 0;
  background: #ffffff;
  box-shadow: 0 0 10px rgba(19, 19, 31, 0.05);
  border-radius: 5px;
  padding: 2%;
  text-orientation: unset;
}

.header-card,
.data {
  display: flex;
  justify-content: space-between;
}
.body-card {
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);
  place-items: start;
  gap: 1rem;
  text-align: justify;
}
h3 {
  grid-area: 1 / 1 / 2 / 3;
}

img {
  width: 8rem;
  margin: auto;

}

@media only screen and (max-width: 768px) {
  .post {
    width: 80%;
  }
}
@media screen and (max-width: 425px) {
  .details-card {
    display: none;
  }
  .body-card {
    display: flex;
    flex-direction: column;
    font-size: smaller;
  }
}
</style>