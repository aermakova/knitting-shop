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
                    v-model="form.title"
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
                    v-model="form.body"
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
                    v-model="form.price"
                    type="number"
                    required
                    placeholder="Цена"
            ></b-form-input>
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
                    v-model="form.url"
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
                          v-model="form.width"
                          type="text"
                          required
                          placeholder="Ширина"
                  ></b-form-input>
                </td>
              </tr>
              <tr>
                <td class="align-middle">Высота:</td>
                <td class="align-middle">
                  <b-form-input
                          id="product-height"
                          v-model="form.height"
                          type="text"
                          required
                          placeholder="Высота"
                  ></b-form-input>
                </td>
              </tr>
              <tr>
                <td class="align-middle">Вес:</td>
                <td class="align-middle">
                  <b-form-input
                          id="product-weight"
                          v-model="form.weight"
                          type="text"
                          required
                          placeholder="Вес"
                  ></b-form-input>
                </td>
              </tr>
            </tbody>
          </table>
          <p><b>Ввыбирите теги, к которым относится товар</b></p>
          <b-form-select v-model="selected" :options="options" multiple :select-size="4"></b-form-select>

          <b-form-group id="input-group-3" label="Food:" label-for="input-3">
            <b-form-select
                    id="input-3"
                    v-model="form.food"
                    :options="foods"
                    required
            ></b-form-select>
          </b-form-group>

          <b-form-group id="input-group-4">
            <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
              <b-form-checkbox value="me">Check me out</b-form-checkbox>
              <b-form-checkbox value="that">Check that out</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </div>
      <div class="col-lg-6">
        <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0">{{ form }}</pre>
          <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true,
        selected: ['b'], // Array reference
        options: [
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Default Selected Option' },
          { value: 'c', text: 'This is another option' },
          { value: 'd', text: 'This one is disabled', disabled: true },
          { value: 'e', text: 'This is option e' },
          { value: 'f', text: 'This is option f' },
          { value: 'g', text: 'This is option g' }
        ]
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault();
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault();
        this.form.email = '';
        this.form.name = '';
        this.form.food = null;
        this.form.checked = [];
        this.show = false;
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>