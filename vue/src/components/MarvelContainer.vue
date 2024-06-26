<script>
import MarvelApiService from "@/components/marvelApiService.js";
import Detail from "@/components/Detail.vue";
import Spiner from "@/components/Spiner.vue";
export default {
  name: "MarvelContainer",
  components: {Detail, Spiner},
  data() {
    return {
      characters: [],
      filteredCharacters: [],
      searchQuery: "",
      isLoading: true

    };
  },
  mounted() {
    MarvelApiService.fetchComics()
        .then(response => {
          this.characters = response.data.data.results;
          this.filteredCharacters = [...this.characters];
          this.isLoading = false;

        })
        .catch(error => {
          console.error('Error al obtener los cómics:', error);
          this.isLoading = false;

        });
  },
  methods: {
    filterCharacters() {
      this.isLoading = true;

      if (this.searchQuery) {
        this.filteredCharacters = this.characters.filter(character =>
            character.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
      } else {
        this.filteredCharacters = [...this.characters];
      }
      this.isLoading = false;

    }
  }
}
</script>

<template>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 heroes">
    <div class="col-md-12 fixed-top">
      <div class="seccion--finder ">
      <input v-model="searchQuery" type="text" placeholder="Buscar personaje por nombre" >
      <button @click="filterCharacters" class="btn btn-danger btn-accion">
        <span class="material-symbols-outlined">search</span>
      </button>
      </div>
    </div>
    <div  v-if="isLoading"  class="col-md-12 d-flex justify-content-center">
         <Spiner/>
    </div>
    <div class="col" v-for="character in filteredCharacters" :key="character.id">
      <Detail :name="character.name"
              :image="character.thumbnail.path + '.' + character.thumbnail.extension"
              :description=" character.description || 'Descripción no disponible.'"
      ></Detail>
    </div>
  </div>
</template>
