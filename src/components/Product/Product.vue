<template>
  <article class="product">
    <img :src="product.image[0]" alt="" title="" class="product__img">
    <h3 class="product__title">{{ product.title }}</h3>
    <span class="product__price">{{ product.price }} {{ product.currency }}</span>
    <hr>
    <b-button href="#" :to="{name:'product', params: {id:product.id}}" variant="primary" class="btn-post-item" style="color: #fff">Открыть пост</b-button>
  </article>
</template>

<script>
    export default {
        props: {
          'product': {
            type: Object,
            required: true
          }
        },
      created() {
      }
    };
</script>

<style lang="scss">
  .product{
    color: #666;
    width: 25%;
    padding: .9375rem;
    display: inline-block;
    overflow: hidden;
    vertical-align: top;
    transition: border .25s ease-in-out,box-shadow .25s ease-in-out,background-color .25s ease-in-out;
    border: none;
    &:hover{
      box-shadow: 0 0.3125rem 0.9375rem 0 rgba(0,0,0,.07);
    }
    &__img{
      width: 100%;
    }
    &__title{
       font-size: .95rem;
       line-height: 1.46667;
     }
  }
</style>
