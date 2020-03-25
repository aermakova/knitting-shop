<template>
  <div v-if="product" class="container">
    <div class="row">
      <div class="col-sm-6">
        <img :src="product.image[0]" :title="product.title" :alt="product.title">
        <div class="text-left">
          <b-badge variant="warning" class="mr-1" v-for="(tag, i) in product.tags" :key="'tag' + i">{{ tag }}</b-badge>
        </div>
      </div>
      <div class="col-sm-6 text-left">
        <h1>{{ product.title }}</h1>
        <p>{{ product.body }}</p>
        <table class="table table-striped">
          <tr>
            <td>Ширина: </td>
            <td>
              {{ product.characteristics[0] }}
            </td>
          </tr>
          <tr>
            <td>Высота: </td>
            <td>
              {{ product.characteristics[1] }}
            </td>
          </tr>
          <tr>
            <td>Вес: </td>
            <td>
              {{ product.characteristics[2] }}
            </td>
          </tr>
        </table>
        <span>цена: </span>
        <span style="font-size:25px">{{ product.price }} </span>
        <span>{{ product.currency }}</span>
        <hr>
        <b-button variant="warning">Добавить в корзину</b-button>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  export default {
    data() {
      return{
        'product': null,
        'characteristicsTitle': [
          'Ширина', 'Высота', 'Вес'
        ]
      }
    },
    props: {
      'id': {
        required: true
      }
    },
    async created() {
      await Vue.prototype.$db.collection("products").get().then((querySnapshot) =>{
        querySnapshot.forEach((doc) =>{
          if (this.id === doc.data().id){
            this.product = doc.data();
            this.product.characteristicsTitle = this.characteristicsTitle;
          }
        });
      });
    },
  }

</script>
<style lang="scss" scoped>
  img{
    width: 100%;
  }
</style>