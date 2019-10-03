<template>
  <section>
    <h1 class="header">nuxt-ts</h1>
    <div class="cards">
      <Card></Card>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import Card from "~/components/Card.vue";

@Component({
  components: {
    Card
  },
  layout: "login"
})
export default class extends Vue {}
</script>

<style scoped>
section {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url(../../assets/img/bg.png) no-repeat;
}
.header {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
}

.cards {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
