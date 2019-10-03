<template>
  <div class="card">

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({})
export default class Card extends Vue {}
</script>

<style scoped>
.card {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 200px;
  background-color: #f5f7f9;
}
</style>