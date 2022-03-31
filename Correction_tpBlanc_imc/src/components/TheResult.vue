<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Taille</th>
        <th scope="col">Poids</th>
        <th scope="col">IMC</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{ getPoids}}</td>
        <td>{{getTaille * 100}}</td>
        <td>{{getImc}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>

import { useUserStore } from "@/stores/userStore"
import { mapState, mapWritableState } from 'pinia'

export default {
    computed: {
        ...mapState(useUserStore, ['getPoids', 'getTaille', 'getImc'] )
    }
}
</script>
