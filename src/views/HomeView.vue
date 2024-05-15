<script setup>
import HeaderCleint from "../components/HeaderClient.vue"
import { useStoreCategory} from "@/stores/categoryStore";
import {onMounted} from "vue";
import CategoryItem from "@/components/CategoryItem.vue";

const categoryStore = useStoreCategory();

onMounted(() => {
  categoryStore.getCategory()
    }

)
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
    <div>
      la
    </div>
    <div>
      re
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