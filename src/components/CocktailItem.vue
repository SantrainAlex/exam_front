<script setup>
import {defineProps} from "vue";
defineProps({
  cocktail: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div class="containerCard col-2">
    <div class="containerImg">
      <img :src="cocktail.strDrinkThumb" alt="Image" class="img">
    </div>
    <div class="containerInfo">
      <div class="title">
        {{ cocktail.strDrink }}
      </div>
      <div>
        ingredient :
      </div>
      <div>
        - {{cocktail.strIngredient1}}
      </div>
      <div>
        - {{cocktail.strIngredient2}}
      </div>
      <div>
        - {{cocktail.strIngredient3}}
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
</template>
<style>
.containerCard{
  margin-top: 5em !important;
  margin-left: 10%;
  width: 20%;
  height: 460px;
  box-shadow: 15px 15px 5px rgba(0, 0, 0, .5);
  border-radius: 8px;
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
  height: 25%;
}
.title{
  font-size: 20px;
  text-decoration: underline;
}
.btnPrice{
  margin-top: 5%;
  border-color: #F28F24 !important;
  color: #F28F24 !important;
  margin-left: 5%;
  margin-bottom: 5%;
}
.containerBtnAdd{
  text-align: center;
}
.btnAdd{
  background-color: #F28F24 !important;
  color: white !important;
  width: 90%;
}
</style>