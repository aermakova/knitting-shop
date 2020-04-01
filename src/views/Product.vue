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
        <div>
          <form action="" style="width: 150px;margin-bottom: 15px">
            <b-form-spinbutton id="sb-wrap" wrap v-model="productCounter" placeholder="1"></b-form-spinbutton>
            <p> итого: {{ totalPrice }} {{ product.currency }}</p>
          </form>
        </div>
        <b-button variant="warning" @click="addToBasket">Добавить в корзину</b-button>
      </div>
      <div class="col-sm-6 text-left">
        <ul class="product-gallery">
          <gallery :images="product.image"
                   :index="index"
                   @close="index = null">
          </gallery>
          <li v-for="(image, imageIndex) in product.image"
              :key="'image_' + imageIndex + image"
              @click="index = imageIndex"
              class="product-gallery__item">
            <img :src="image" title="" alt="">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import VueGallery from 'vue-gallery';
  export default {
    data() {
      return{
        'product': null,
        'characteristicsTitle': [
          'Ширина', 'Высота', 'Вес'
        ],
        'productCounter': 0,
        'index': null
      }
    },
    computed: {
      totalPrice() {
        return Number(this.productCounter) * Number(this.product.price)
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
    methods: {
      addToBasket() {
        console.log(this.totalPrice);
      },
    },
    components: {
      'gallery': VueGallery
    }
  }

</script>
<style lang="scss" scoped>
  img{
    width: 100%;
  }
  .product-gallery{
    padding: 0;
    margin: 0 -10px;
    list-style: none;
    &__item{
      width: 100px;
      display: inline-block;
      vertical-align: top;
      border: 1px solid grey;
      margin: 10px;
      cursor: pointer;
    }
  }
  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }
</style>