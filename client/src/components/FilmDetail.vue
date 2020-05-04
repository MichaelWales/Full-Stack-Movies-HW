<template lang="html">
  <div class="film-details">
    <ul>
      <h2>{{film.title}}</h2>
      <h3>Directed by {{film.crew.director}}</h3>
      <h3>Produced by {{film.crew.Producer}}</h3>
      <h3>Synopsis</h3>
      <p class="plot">{{film.synopsis}}</p>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'film-detail',
  props: ['film']
}
</script>

<style lang="css" scoped>
.film-details {
  text-align: center;
  background-color: #BFDBF7;
  border: 1px solid #BFDBF7;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  width: 60vw;
}

.plot {
  display: flex;
  font-size: 1.2em
}
</style>
