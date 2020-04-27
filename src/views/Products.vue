<template>
  <div>
    <div class="products text-left mt-4">
      <div class="container">
        <h2>Все товары</h2>
        <Product v-for="product in products" :product="product" :key="product.id + new Date()"></Product>
      </div>
    </div>
  </div>
</template>

<script>
  import Product from "@/components/Product/Product";
  import {mapActions} from "vuex";
  export default {
    components: {
      Product
    },
    computed: {
      products(){
        return this.$store.getters.GET_PRODUCTS
      },
    },
    methods: {
      ...mapActions([
        'LOAD_PRODUCTS'
      ])
    },
  }

</script>
<style lang="scss" scoped>

</style>