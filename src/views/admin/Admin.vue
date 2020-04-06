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
                    required
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
          </b-form-group>
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
        show: true
      }
    },
    methods: {
      onSubmit() {
        alert(JSON.stringify(this.newProduct))
        // Vue.prototype.$db.collection("products").set({
        //   id: this.id,
        //   title: this.title,
        //   body: this.body,
        //   price: this.price,
        //   image: this.image,
        // }, { merge: true });
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
      }
    }
  }
</script>