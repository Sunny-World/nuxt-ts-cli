<template>
  <div class="card">
    <div class="right">
      <h4>{{name}}，欢迎您</h4>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({})
export default class Card extends Vue {
  public name = "尊贵的VIP99";
}
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  height: 60px;
  background-color: #515a6e;
  .right {
    position: absolute;
    right: 20px;
    line-height: 60px;
  }
  h4 {
    color: #fff;
  }
}
</style>
