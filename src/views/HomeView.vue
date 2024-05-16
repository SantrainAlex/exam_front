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
    <div class="containerAllCard">
      <div class="containerCard">
        <div class="containerImg">
          <img src="../assets/logo.jpg" alt="Image" class="img">
        </div>
        <div class="containerInfo">
          <div class="title">
            Virgin Mojiro
          </div>
          <div>
            ingredient :
          </div>
          <div>
            - citron
          </div>
        </div>
        <div>
          <hr>
          <div>
            Talle-prix
          </div>
          <div>
            <button class="btn btnPrice">S - 5€</button>
            <button class="btn btnPrice">M - 6€</button>
            <button class="btn btnPrice">l - 7€</button>
          </div>
          <div class="containerBtnAdd">
            <button class="btn btnAdd">AJOUTER AU PANIER</button>
          </div>

        </div>

      </div>
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
.containerCard{
  margin-top: 3%;
  margin-left: 10%;
  width: 20%;
  height: 500px;
  box-shadow: 15px 15px 5px rgba(0, 0, 0, .5);
}
.img{
  width: 60%;
  z-index: 100;
}
.containerImg{
  text-align: center;
  z-index: 100;
}
.containerInfo{
  height: 22%;
}
.title{
  font-size: 20px;
  text-decoration: underline;
}
.btnPrice{
  margin-top: 5%;
  border-color: #F28F24;
  color: #F28F24;
  margin-left: 5%;
  margin-bottom: 5%;
}
.containerBtnAdd{
  text-align: center;
}
.btnAdd{
  background-color: #F28F24;
  color: white;
  width: 90%;
}

</style>