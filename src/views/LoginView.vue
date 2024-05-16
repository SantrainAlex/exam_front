<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { ref } from 'vue';
import { useAuthStore } from '@/stores/authStore';


const router = useRouter()
const authStore = useAuthStore()

const user = ref({
  email:"",
  password:""
})

const submitForm = ()=>{
  try{
    authStore.loginUser(user.value.email, user.value.password);
    router.push("/")
  }catch(error){
    alert(error.message)
  }
}
</script>

<template>
  <div class="mycard">
    <div id="barapp" class="myStyleContainer">
      <div class="row">
        <div class="col-6 p-0">
          <img src="../assets/logo.jpg" alt="Image" class="img">
        </div>
        <div class="col-6 p-0">
          <div class="cardForm">
            <form @submit.prevent="submitForm">
              <div class="form-group myStyleInput">
                <label for="email">Email</label>
                <input type="text" id="email" v-model="user.email" class="form-control" required>
              </div>
              <div class="form-group myStyleInput">
                <label for="password">Mot de passe</label>
                <input type="password" id="password" v-model="user.password" class="form-control" required>
              </div>
              <div class="containerBtnSubmit">
                <button type="submit" class="btn myStyleBtn">Se connecter</button>
              </div>
              <div class="containerBtnSignUp">
                Vous n'avez pas de compte ?
                <RouterLink to="/signUp" class="btn btnSignUp">Insciption</RouterLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>
<style scoped>
.mycard {
  height: 100vh;
  align-content: center;
  text-align: -webkit-center;
}

.myStyleContainer {
  height: 69vh;
  width: 150vh;
  border-radius: 25px;
  box-shadow: 15px 15px 5px rgba(0, 0, 0, .5);
}

.img {
  width: 100%;
  height: 96%;
  border-bottom-left-radius: 25px;
  border-top-left-radius: 25px;
}

.cardForm {
  height: 96%;
  align-content: center;
}

.myStyleInput {
  width: 70%;
}

.containerBtnSubmit {
  width: 70%;
  padding-top: 10%;
}

.myStyleBtn {
  width: 100%;
  background-color: #F28F24;
}

.containerBtnSignUp {
  z-index: 10;
  position: absolute;
  bottom: 20%;
  left: 61%;
}

.btnSignUp {
  color: #F28F24;
}
</style>