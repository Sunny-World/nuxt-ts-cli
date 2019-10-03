<template>
  <div>
    <layoutHeader class="header"></layoutHeader>
    <div>
      <layoutSlider class="slider"></layoutSlider>
      <div class="content">
        <nuxt />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import layoutHeader from "~/components/header.vue";
import layoutSlider from "~/components/slider.vue";

@Component({
  components: {
    layoutHeader,
    layoutSlider
  },
  middleware: "userMiddle"
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
.slider {
  position: absolute;
  top: 60px;
  bottom: 0;
}
.content {
  position: absolute;
  top: 60px;
  left: 200px;
  right: 0;
  bottom: 0;
  overflow-y: hidden;
}
</style>
