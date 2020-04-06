<template>
  <div class="gallery-wrap">
    <gallery :images="product.image"
             :index="index"
             @close="index = null">
    </gallery>
    <ul class="gallery">
      <li v-for="(image, imageIndex) in product.image"
          :key="'image_' + imageIndex + image"
          @click="index = imageIndex"
          class="gallery__item">
        <img :src="image" title="" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
import VueGallery from "vue-gallery";

export default {
  data() {
    return{
      'index': null
    }
  },
  props: {
    product: Object
  },
  components: {
    'gallery': VueGallery,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
