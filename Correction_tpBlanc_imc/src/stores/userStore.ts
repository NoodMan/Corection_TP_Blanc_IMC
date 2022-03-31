import { defineStore } from "pinia";

export const useUserStore = defineStore ( {
  id: 'user',
  state: () => ( {
    poids: 0,
    taille: 0, 
    imc: 0,
  }),

  getters: {
    getPoids: (state) => state.poids, 
    getTaille: (state) => state.taille, 
    getImc: (state) => state.imc, 
  },
  actions: {
    increment: {
      //this.user
    }
  }
})
