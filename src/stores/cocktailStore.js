import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";

export const useStoreCocktail = defineStore('storeCocktail', () => {
    const cocktailCount = ref(0);
    const cocktailLoading = ref(false)
    const cocktailItem = ref([])

    const getCocktail = async () => {
        cocktailLoading.value = true;

        try {
            const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
            if(response){
                cocktailCount.value = response.data.drinks.length
                cocktailItem.value = response.data.drinks
            }else {
                throw new Error("Failed to get cocktail")
            }
        }catch (err){
            cocktailItem.value = []
            cocktailCount.value = 0
        }
        cocktailLoading.value = false
    }
    return{cocktailLoading, cocktailItem, cocktailCount, getCocktail}
})