<template>
  <div class="basket">
    <div class="basket-link" @click="basket = !basket">Корзина<span>1</span></div>
    <div class="basket-block" v-if="basket">
      товар
    </div>
  </div>
</template>

<script>
    export default {
        data() {
          return {
            'basket': false,
          }
        }
    };
</script>

<style lang="scss">
  .basket{
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    position: relative;
    &-link{
      span{
        padding: 0 5px;
        font-size: 10px;
        position: absolute;
        border-radius: 50%;
        color: #fff;
        background: green;
      }
    }
  }
  .basket-block{
    position: absolute;
    right: 0;
    top: 100%;
    width: 300px;
    min-height: 200px;
    z-index: 3;
    text-align: left;
    box-shadow: 1px 1px 5px 2px grey;
    background: #fff;
  }
</style>
