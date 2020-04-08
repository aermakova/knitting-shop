<template>
  <div class="container">
    <h1>Admin</h1>
    <div class="row">
      <div class="col-lg-6 text-left">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
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
          <b-form-checkbox-group
                  id="checkbox-group-1"
                  v-model="newProduct.currency"
                  :options="newProductDetails.currency"
                  name="flavour-1"
                  description="Выбирите валюту"
          ></b-form-checkbox-group>
          <b-form-group
                  id="input-group-1"
                  label-for="input-1"
                  description="Вставьте ссылку на изображение товара"
          >
            <b-form-input
                    id="input-1"
                    type="url"
                    placeholder="https://img_url"
                    v-model="newProduct.image"
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
                          v-model="newProduct.width"
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
                          v-model="newProduct.height"
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
                          v-model="newProduct.weight"
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
          <b-form-group
                  label-for="input-select-1"
                  description="Выбирите пометку для товара"
          >
            <b-form-select id="input-select-1" :options="newProductDetails.note"></b-form-select>
          </b-form-group>
          <p><b>Выбирите все теги, которые характеризуют товар</b></p>
          <b-form-checkbox-group
                  id="checkbox-group-2"
                  v-model="newProduct.tags"
                  :options="newProductDetails.tags"
                  name="flavour-2"
          ></b-form-checkbox-group>

          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
  //import Vue from "vue";

  export default {
    data() {
      return {
        newProduct: {
          id: '',
          title: '',
          body: '',
          price: null,
          image: '',
          tags: [],
          characteristics: [],
          width: '',
          currency: [],
          height: '',
          weight: '',
          rating: null,
        },
        newProductDetails: {
          tags: [
            { text: 'детские', value: 'детские' },
            { text: 'животные', value: 'животные' },
            { text: 'вымышленные', value: 'вымышленные' },
            { text: 'детские 1+', value: 'детские 1+' },
            { text: 'детские 3+', value: 'детские 3+' },
            { text: 'подростковые', value: 'подростковые' },
          ],
          characteristics: [
            { value: '₴', text: 'Ширина' },
            { value: '$', text: 'Высота' },
            { value: '$', text: 'Вес' },
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
            { value: 'новинка', text: 'Новинка' },
            { value: 'распродажа', text: 'Распродажа' },
            { value: 'горячее', text: 'Горячее' },
            { value: 'ожидается', text: 'Ожидается' },
          ],
          status: [
            { value: 'новый', text: 'Новый' },
            { value: 'продано', text: 'Продано' },
            { value: 'бронь', text: 'Бронь' },
          ],
        },
        imageFields: [],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault();
        let product = JSON.stringify(this.newProduct);
        console.log(product)
        this.$store.dispatch('ADD_NEW_PRODUCT', Object.assign({}, this.newProduct))
        this.$router.push('/products')
      },
      onReset(evt) {
        evt.preventDefault();
        // this.form.email = '';
        // this.form.name = '';
        // this.form.food = null;
        // this.form.checked = [];
        // this.show = false;
        // this.$nextTick(() => {
        //   this.show = true
        // })
      },
      addImageField() {
        this.imageFields.push('Дополнительное изображение')
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