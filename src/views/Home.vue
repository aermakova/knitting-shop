<template>
  <div class="home">
    <div class="hero">
      <div class="container">
        <p>Игрушки, зверушки и погремушки</p>
        <h1>Вязанные крючком игрушки</h1>
        <a href="" class="btn button button-white">Купить сейчас</a>
      </div>
    </div>
    <div class="products text-left mt-4">
      <div class="container">
        <h2>Новинки</h2>
        <Product v-for="product in products" :product="product" :key="product.id"></Product>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Product from "@/components/Product/Product";
import { mapActions } from 'vuex'
export default {
  name: 'home',
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

<style lang="scss">
  .hero{
    padding: 25vh 0;
    background: url("https://d1di2lzuh97fh2.cloudfront.net/files/2f/2fu/2fuw5w.jpg?ph=04087e0ca3&t=1");
    background-size: cover;
    text-align: left;
  }
  .btn{
    &.button{
      border-style: solid;
      padding: .875rem 2rem;
      &-white{
        border-color: rgba(0,0,0,.5);
        color: rgba(0,0,0,.7);
        background-color: transparent;
        min-width: 16rem;
      }
    }
  }
</style>
