<script setup>
import {useRouter} from 'vue-router'
import {useAuthStore} from "@/stores/authStore";
import {ref} from "vue";

const authStore = useAuthStore()
const router = useRouter()

const user = ref({
  email: "",
  password:"",
  confirmPassword:"",
})

const isValidPassword = (password)=>{
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()\\[\]{}<>.]).{10,}$/;
  return regex.test(password);
}

const submitForm = ( )=>{
  if(!isValidPassword(user.value.password)){
    alert('Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long.')
    return;
  }
  if(user.value.password !== user.value.confirmPassword){
    alert('Password do not match')
    return;
  }

  try{
    authStore.registerUser(user.value.email , user.value.password);
    alert('Account created succedddfully')
    router.push("/login")

  }catch(errror){
    alert(errror.message)
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
                <input type="email" id="email" v-model="user.email" class="form-control" required>
              </div>
              <div class="form-group myStyleInput">
                <label for="password">Mot de passe</label>
                <input type="password" id="password" v-model="user.password" class="form-control" required>
              </div>
              <div class="form-group myStyleInput">
                <label for="confirmPassword">Confirmer votre mot de passe</label>
                <input type="password" id="confirmPassword" v-model="user.confirmPassword" class="form-control" required>
              </div>
              <div class="containerBtnSubmit">
                <button type="submit" class="btn myStyleBtn">S'inscrire</button>
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