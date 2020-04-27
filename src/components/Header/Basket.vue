<template>
  <div class="basket">
    <div class="basket-link" @click="basket = !basket">Корзина<span>1</span></div>
    <div class="basket-block" v-if="basket">
      <table striped hover style="width: 100%">
        <thead>
          <tr>
            <th>Наименование</th>
            <th>Цена</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(i) in items" :key="'item_' + i">
            <td>{{ items[i].name }}</td>
            <td>{{ items[i].price }}</td>
            <td><ProductCounter :product="product"></ProductCounter></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import ProductCounter from '@/components/Product/ProductCounter';
    export default {
        data() {
          return {
            basket: false,
            items: [
              { name: 'Наименование1', price: 'Цена1',  },
              { name: 'Наименование2', price: 'Цена2',  },
              { name: 'Наименование3', price: 'Цена3',  },
            ]
          }
        },
        components: {
          ProductCounter
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
    width: 500px;
    min-height: 200px;
    padding: 20px;
    z-index: 3;
    text-align: left;
    box-shadow: 1px 1px 5px 2px grey;
    background: #fff;
  }
</style>
