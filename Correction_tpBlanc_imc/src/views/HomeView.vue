
<script lang='ts'>

import { mapWritableState } from "pinia";
import { useUserStore } from "../stores/userStore"
import TheResult from "../components/TheResult.vue"


export default {
  data() {
    return {
      user: {
        poids: 0, 
        taille: 0,
      },
    }
  },

computed: {
  ...mapWritableState(useUserStore, ['poids', 'taille', 'imc'])
},

methods: {
  onCalcul() {
     if (this.user.poids <= 0 || this.user.taille <= 0) { // on verifie si number plus grand que 0 dans form
       this.user.poids = 0; // réunitialiser en cas d'erreur du user
       this.user.taille = 0; // réunitialiser en cas d'erreur du user
       console.log("error"); 
       return;
     }
     if (this.user.poids === "" || this.user.taille === "") { // on verifie si pas string 
       this.user.poids = 0; // réunitialiser en cas d'erreur du user
       this.user.taille = 0; // réunitialiser en cas d'erreur du user
       console.log("error"); 
       return;
     }
     (this.poids = this.user.poids), 
     (this.taille = this.user.taille / 100),
     (this.imc = this.poids / (this.taille * this.taille)); // une fois les conditions ok on peux faire le calcul de imc
  },
},

components: {
  TheResult, 
},
};
</script>

<template>
<h1> Calculateur d'IMC </h1>
<form @submit.prevent="onCalcul">
  <input
            type="number"
            name="taille"
            id="taille"
            placeholder="en cm"
            min="130"
            max="220"
            v-model="user.taille"
          />

             <input
            type="number"
            name="poids"
            id="poids"
            placeholder="en kg"
            min="40"
            max="200"
            v-model="user.poids"
          />
          <input type="submit" value="Calcul de mon IMC" />
</form>
          <TheResult v-if="imc"/>
</template>