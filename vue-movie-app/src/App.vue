<template>
  <v-app>
    <v-container>
      <SearchBar/>
      <MovieList/>
    </v-container>
  </v-app>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue" //절대경로
import MovieList from "@/components/MovieList.vue"

export default {
  components: {
    SearchBar,
    MovieList
  }
};
</script>
