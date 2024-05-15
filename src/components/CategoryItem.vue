<script setup>
import {defineProps} from "vue";
const props = defineProps({
  category: {
    type: Object,
    required: true
  }
})
console.log(props)

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