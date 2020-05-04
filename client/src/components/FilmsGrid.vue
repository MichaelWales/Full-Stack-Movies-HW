<template lang="html">
  <div>
    <div class="film-wrapper">
      <film-detail v-if="selectedFilm" :film="selectedFilm"></film-detail>
    </div>

    <div class="film-wrapper">
      <film-grid-item v-for="(film, index) in films" :key="index" :film="film" />
    </div>
  </div>
</template>

<script>
import {eventBus} from '../main.js';
import FilmsService from '../services/FilmsServices.js';
import FilmGridItem from './FilmGridItem.vue';
import FilmDetail from './FilmDetail.vue';

export default {
  data(){
    return {
      films: [],
      selectedFilm: null
    };
  },
  mounted(){
    FilmsService.getFilms()
    .then(films => this.films = films)

    eventBus.$on('film-deleted', (id) => {
      const index = this.films.findIndex(film => film._id === id);
      this.films.splice(index, 1);
    })

    eventBus.$on('film-selected', (id) => {
      this.selectedFilm = film;
    })
  },
  components: {
    'film-grid-item': FilmGridItem,
    'film-detail': FilmDetail
  }
}
</script>

<style lang="css" scoped>

.film-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
