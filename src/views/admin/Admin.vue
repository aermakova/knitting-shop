<template>
  <div class="container">
    <h1>Admin</h1>
    <div class="row">
      <div class="col-lg-6 text-left">
        <b-form @submit.prevent="onSubmit" @reset="onReset" v-if="show">
          <p><b>Введите основную информацию о товаре</b></p>
          <b-form-group
                  id="input-product-title"
                  label-for="product-title"
                  description="Введите название товара"
          >
            <b-form-input
                    id="product-title"
                    v-model="newProduct.title"
                    type="text"
                    required
                    placeholder="Название"
            ></b-form-input>
          </b-form-group>
          <b-form-group
                  id="input-product-body"
                  label-for="product-body"
                  description="Введите описание товара"
          >
            <b-form-input
                    id="product-body"
                    v-model="newProduct.body"
                    type="text"
                    required
                    placeholder="Название"
            ></b-form-input>
          </b-form-group>
          <b-form-group
                  id="input-product-price"
                  label-for="product-price"
                  description="Введите стоимость товара"
          >
            <b-form-input
                    id="product-price"
                    v-model="newProduct.price"
                    type="number"
                    placeholder="Цена"
            ></b-form-input>
          </b-form-group>
          <b-form-group>
            <b-form-radio-group
                    id="radio-group-currency"
                    v-model="newProduct.currency"
                    :options="newProductDetails.currency"
                    name="radio-currency"
                    description="Выбирите валюту"
            ></b-form-radio-group>
          </b-form-group>
          <b-form-group
                  id="input-group-1"
                  label-for="input-1"
                  description="Вставьте ссылку на изображение товара"
          >
            <b-form-input
                    id="input-1"
                    type="url"
                    placeholder="https://img_url"
                    v-model="imageMain"
            ></b-form-input>
            <button type="button" aria-controls="sb-wrap" aria-keyshortcuts="ArrowUp" class="btn btn-sm btn-add-img py-0" @click="addImageField">
              <div>
                <svg width="1em" height="1em" viewBox="0 0 20 20" focusable="false" role="img" alt="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-plus b-icon bi"><g transform="translate(10 10) scale(1.25 1.25) translate(-10 -10)"><path fill-rule="evenodd" d="M10 5.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H6a.5.5 0 010-1h3.5V6a.5.5 0 01.5-.5z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M9.5 10a.5.5 0 01.5-.5h4a.5.5 0 010 1h-3.5V14a.5.5 0 01-1 0v-4z" clip-rule="evenodd"></path></g></svg>
              </div>
            </button>
          </b-form-group>
          <div class="div" >
            <b-form-group
                    :id="'input-group-1' + index"
                    :label-for="'input-1' + index"
                    :description="'Вставьте ссылку на' + imageField + 'товара'"
                    :key="'input-1' + index"
                    v-for="(imageField, index) in imageFields"
            >
              <b-form-input
                      id="input-1"
                      type="url"
                      placeholder="https://img_url"
                      v-model="newProduct.image[index]"
              ></b-form-input>
            </b-form-group>
          </div>
          <p><b>Введите характеристики товара</b></p>
          <table class="table">
            <tbody>
              <tr>
                <td class="align-middle">Ширина:</td>
                <td class="align-middle">
                  <b-form-input
                          id="product-width"
                          v-model="width"
                          type="text"
                          placeholder="Ширина"
                  ></b-form-input>
                </td>
              </tr>
              <tr>
                <td class="align-middle">Высота:</td>
                <td class="align-middle">
                  <b-form-input
                          id="product-height"
                          v-model="height"
                          type="text"
                          placeholder="Высота"
                  ></b-form-input>
                </td>
              </tr>
              <tr>
                <td class="align-middle">Вес:</td>
                <td class="align-middle">
                  <b-form-input
                          id="product-weight"
                          v-model="weight"
                          type="text"
                          placeholder="Вес"
                  ></b-form-input>
                </td>
              </tr>
            </tbody>
          </table>
          <b-form-group
                  label-for="input-select-1"
                  description="Выбирите основной материал изделия"
          >
            <b-form-select id="input-select-1" :options="newProductDetails.material"></b-form-select>
          </b-form-group>
          <p><b>Выбирите все теги, которые характеризуют изделие</b></p>
          <b-form-checkbox-group
                  id="checkbox-group-tags"
                  v-model="newProduct.tags"
                  :options="newProductDetails.tags"
                  name="tags"
          ></b-form-checkbox-group>
          <p><b>Выбирите материал, который используется в изделии</b></p>
          <b-form-checkbox-group
                  id="checkbox-group-material"
                  v-model="newProduct.material"
                  :options="newProductDetails.material"
                  name="material"
          ></b-form-checkbox-group>
          <p><b>Укажите метку изделия, по умолчанию "новинка"</b></p>
          <b-form-group>
            <b-form-radio-group
                    id="radio-group-note"
                    v-model="newProduct.note"
                    :options="newProductDetails.note"
                    name="radio-note"
            ></b-form-radio-group>
          </b-form-group>
          <p><b>Укажите статус изделия, по умолчанию "в продаже"</b></p>
          <b-form-group>
            <b-form-radio-group
                    id="radio-group-status"
                    v-model="newProduct.status"
                    :options="newProductDetails.status"
                    name="radio-status"
            ></b-form-radio-group>
          </b-form-group>
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
  //import Vue from "vue";
  import { uuid } from 'vue-uuid';

  export default {
    data() {
      return {
        uuid: uuid.v1(),
        newProduct: {
          id: this.$uuid.v1(),
          title: '',
          body: '',
          price: null,
          tags: [],
          material: [],
          currency: '',
          rating: null,
          note: 'новинка',
          status: 'active'
        },
        width: '',
        height: '',
        weight: '',
        imageMain: '',
        newProductDetails: {
          tags: [
            { text: 'детские', value: 'детские' },
            { text: 'животные', value: 'животные' },
            { text: 'вымышленные', value: 'вымышленные' },
            { text: 'детские 1+', value: 'детские 1+' },
            { text: 'детские 3+', value: 'детские 3+' },
            { text: 'подростковые', value: 'подростковые' },
          ],
          material: [
            { value: 'акрил', text: 'Акрил' },
            { value: 'коттон', text: 'Коттон' },
          ],
          currency: [
            { value: '₴', text: 'Гривна' },
            { value: '$', text: 'Доллар' },
          ],
          note: [
            { value: 'новинка', text: 'Новинка', selected: true },
            { value: 'распродажа', text: 'Распродажа' },
            { value: 'горячее', text: 'Горячее' },
            { value: 'ожидается', text: 'Ожидается' },
          ],
          status: [
            { value: 'active', text: 'В продаже' },
            { value: 'disabled', text: 'Продано' },
            { value: 'booked', text: 'Бронь' },
          ],
        },
        imageFields: [],
        show: true
      }
    },
    computed: {
      characteristics() {
        let characteristics = [];
        characteristics.push(this.width, this.height, this.weight);
        return characteristics;
      },
      image() {
        let image = [];
        image.unshift(this.imageMain);
        if (this.imageFields.length) {
          this.imageFields.map(i => {
            image.push(i);
          });
        }
        return image;
      },
      product() {
        const product = Object.assign({}, this.newProduct);
        //Vue.set(product, 'characteristics', this.characteristics);
        product.characteristics = this.characteristics;
        product.image = this.image;
        return product;
      }
    },
    methods: {
      onSubmit(evt) {
        console.log(this.product);
        console.log(this.image);
        console.log(this.newProduct.imageMain);
        evt.preventDefault();
        this.$store.dispatch('ADD_NEW_PRODUCT', Object.assign({}, this.product));
        //this.$router.push('/products');
        alert(JSON.stringify(this.product));
      },
      addImageField() {
        this.imageFields.push('Дополнительное изображение')
      },
      onReset() {
        console.log(this.characteristics);
      }
    }
  }
</script>

<style>
  .btn-add-img{
    border: 1px solid #ced4da!important;
    border-radius: 0.25rem!important;
    float: right;
    position: relative;
    left: 35px;
    bottom: 36px;
    height: calc(1.5em + 0.75rem + 2px);
  }
</style>