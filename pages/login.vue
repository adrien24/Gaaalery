<template>
  <div v-if="profile === null" id="log" class="login">
    <div>
      <h2> Connexion </h2>
      <form v-on:submit.prevent="callLogin">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" class="form-control" id="username" placeholder="Your username" v-model="form.username">
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" placeholder="Your password" v-model="form.password">
        </div>
        <div class="form-group">
          <button class="btn btn-primary">Submit</button>
        </div>
      </form>
      <div id="alerte" class="alerte">
        <h2>Votre Login ou mot de passe est incorrecte</h2>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';



export default {
  name: "login",

  data() {
    return {
      log: null,
      auth2: null,
      form: {
        username: '',
        password: '',


      },
      profile: null,
      jwt: '',
      entier: null,

    }
  },

  created() {

    this.profile = localStorage.getItem('profile')
    this.jwt = localStorage.getItem('jwt')



  },

  mounted() {


  },

  methods: {

    async callLogin() {
      await axios
        .post('http://localhost:1337/api/auth/local', {
          identifier: this.form.username,
          password: this.form.password,
        })
        .then(response => (this.log = response.data))
        .then((response) => {
          // Handle success.
          

          localStorage.setItem("profile", this.log.user.username)
          localStorage.setItem("jwt", this.log.jwt)
          this.profile = localStorage.getItem('profile')

          const login = document.getElementById('log');
          login.classList.add('remove')

          if (this.profile !== null) {
            this.entierAleatoire(10000,99999)
            console.log(this.entier)
            axios

              .post("http://localhost:1337/api/auth2s",
                {
                  data: {

                Username: this.form.username,
                Number_Auth2: this.entier,
                  }
              },
                {
                headers: {
                  Authorization: 'Bearer ' + this.log.jwt
                }
              })
              .then(response => {
                console.log(response)
                this.sendEmail();
              })
              .catch(error => {
                console.log(error.response)
              });
          }
        


        }).catch((error) => {

          const alerte = document.getElementById('alerte');
          alerte.classList.add('show')
          alerte.classList.remove('alerte')
        });
    },


    entierAleatoire(min, max) {
     this.entier = Math.floor(Math.random() * (max - min + 1)) + min;
    },

    
  },
}

</script>

<style scoped>

.login{
  position: absolute;
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  margin-top: -60px;
  height: 97vh;
  width: 99%;
  background-color: #FFFFFF;

}

.remove{
  display: none!important;
}

.show h2{
  border: 1px solid red;
  padding: 15px;
  color: red;
  width: fit-content;

}

.alerte{
  display: none;
}

.show{
  display: block!important;
}

</style>

