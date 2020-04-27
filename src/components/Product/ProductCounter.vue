<template>
  <div>
    <form action="" style="width: 150px;margin-bottom: 15px">
      <b-form-spinbutton id="sb-wrap" wrap v-model="productCounter" placeholder="1"></b-form-spinbutton>
      <p> итого: {{ totalPrice }} {{ product.currency }}</p>
    </form>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          productCounter: 0,
        }
      },
      props: {
        product: Object
      },
      computed: {
        totalPrice() {
          return Number(this.productCounter) * Number(this.product.price)
        }
      },
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
