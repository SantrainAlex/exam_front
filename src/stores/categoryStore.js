import {defineStore} from "pinia";
import {ref} from 'vue'
import axios from 'axios';

export const useStoreCategory = defineStore('storeCategory', () => {
    const categoryCount = ref(0);
    const categoryLoading = ref(false)
    const categoryItem = ref([])



    const getCategory = async () => {
        categoryLoading.value = true;

        try {
            const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
            if(response){
                categoryCount.value = response.data.drinks.length;
                categoryItem.value = response.data.drinks;
                console.log(categoryCount.value)
            }else {
                throw new Error('Failed to get category')
            }
        }catch (err){
            categoryItem.value = []
            categoryCount.value = 0
        }
        categoryLoading.value = 0
    }
    return{categoryLoading, categoryItem, categoryCount, getCategory}
})