<script setup>
import {defineProps} from "vue";
defineProps({
  category: {
    type: Object,
    required: true
  }
})

</script>
<template>
  <div>
    <button class="btn myStyleBtn">{{category.strCategory}}</button>
  </div>
</template>
<style scoped>
.myStyleBtn{
  margin-left: 10px;
  border-color: #F28F24;
  color: #F28F24;

}
</style>