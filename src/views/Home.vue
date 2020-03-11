<template>
  <div class="home">
    <div class="hero">
      <p>Игрушки, зверушки и погремушки</p>
      <h1>Вязанные крючком игрушки</h1>
      <a href="" class="btn btn-white">Купить сейчас</a>
    </div>
    <div class="products">
      <Product v-for="product in products" :product="product" :key="product.id"></Product>
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
    padding: 100px 0;
    background: url("https://d1di2lzuh97fh2.cloudfront.net/files/2f/2fu/2fuw5w.jpg?ph=04087e0ca3&t=1");
    background-size: cover;
  }
  .btn{
    font-size: .95rem;
    line-height: 1.8;
    font-weight: 600;
    letter-spacing: .075em;
    transition: all .3s;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
    display: inline-block;
    text-decoration: none;
    text-align: center;
    border-style: solid;
    padding: .875rem 2rem;
    &-white{
      border-color: rgba(0,0,0,.5);
      color: rgba(0,0,0,.7);
      background-color: transparent;
      min-width: 16rem;
    }
  }
</style>
