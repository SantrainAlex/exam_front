<script setup>
import HeaderCleint from "../components/HeaderClient.vue"
import { useStoreCategory} from "@/stores/categoryStore";
import {onMounted} from "vue";
import CategoryItem from "@/components/CategoryItem.vue";
import {useStoreCocktail} from "@/stores/cocktailStore";
import CocktailItem from "@/components/CocktailItem.vue";

const categoryStore = useStoreCategory();
const cocktailStore = useStoreCocktail()

onMounted(() => {
  categoryStore.getCategory()
  cocktailStore.getCocktail()
})
</script>

<template>
  <div class="mycard">
    <HeaderCleint/>
    <div>
      <div>
        <p>Catégotie :</p>
      </div>
      <div v-if="categoryStore.categoryLoading">
        Category Loading ...
      </div>
      <div v-else-if="categoryStore.categoryCount > 0" class="containerCategorie">
        <CategoryItem
            v-for="category in categoryStore.categoryItem"
            :key="category"
            :category="category"/>
      </div>
    </div>
    <div class="containerAllCard">
      <div v-if="cocktailStore.cocktailLoading">
        Category Loading ...
      </div>
      <div v-else-if="cocktailStore.cocktailCount > 0" class="row">
        <CocktailItem
            v-for="cocktail in cocktailStore.cocktailItem"
            :key="cocktail"
            :cocktail="cocktail"/>
      </div>
    </div>
  </div>

</template>
<style scoped>
.mycard {
  height: 100vh;
}
.containerCategorie{
  flex-direction: row;
  display: flex;
}


</style>