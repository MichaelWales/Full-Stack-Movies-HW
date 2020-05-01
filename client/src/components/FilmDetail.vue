<template lang="html">
  <div>
    <ul>
      <h2>{{film.title}}</h2>
      <h3>Directed by {{film.crew.director}}</h3>
      <h3>Produced by {{film.crew.Producer}}</h3>
      <h3>Synopsis</h3>
      <p>{{film.synopsis}}</p>
    </ul>
  </div>
</template>

<script>
import {eventBus} from '../main.js';
import FilmsGrid from './FilmsGrid.vue';
import FilmGridItem from './FilmGridItem.vue';

export default {
}
</script>

<style lang="css" scoped>
</style>
