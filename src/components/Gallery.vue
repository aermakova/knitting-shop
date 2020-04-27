<template>
  <div class="gallery-wrap" v-if="product.image.length">
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
<style scoped lang="scss">
  .gallery{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0;
    margin: 0 -10px;
    list-style: none;
    &__item{
      width: 100px;
      height: 130px;
      margin: 10px;
      cursor: pointer;
    }
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
