<template>
  <b-modal id="modal-sign-in" centered title="Вход">
    <b-form class="mt-4" style="width: 100%" @submit.prevent="onEdit()">
      <b-form-group
              id="input-group-4"
              label="Почта:"
              label-for="input-4"
              description="Введите Ваш e-mail"
      >
        <b-form-input
                id="input-4"
                type="email"
                v-model="email"
        ></b-form-input>
      </b-form-group>
      <b-form-group
              id="input-group-5"
              label="Пароль:"
              label-for="input-5"
              description="Ввведите Ваш пароль"
      >
        <b-form-input
                id="input-5"
                type="text"
                v-model="password"
        ></b-form-input>
      </b-form-group>
    </b-form>
  </b-modal>
</template>

<script>
  import { required, minLength } from 'vuelidate/lib/validators'
  export default {
    data() {
      return{
        'email': '',
        'password': '',
      }
    },
    methods: {
      status(validation) {
        return {
          error: validation.$error,
          dirty: validation.$dirty
        }
      },
      onReset(evt) {
        evt.preventDefault();
        this.url = '';
        this.title = '';
        this.body = '';
        this.show = false;
        this.$nextTick(() => {
          this.show = true
        })
      }
    },
    validations: {
      email: {
        required,
        maxLength: minLength(10),
      },
      password: {
        required,
        maxLength: minLength(1),
      },
    },
  }

</script>
<style lang="scss" scoped>
  img{
    max-width: 500px;
  }
  input:-internal-autofill-selected{
    background-color: #fff;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0 30px #EFE inset !important;
    &.dirty{
      -webkit-box-shadow: 0 0 0 30px #EFE inset !important;
    }
    &.error{
      -webkit-box-shadow: 0 0 0 30px #FDD inset !important;
    }
  }
  .dirty {
    border-color: #5A5;
    background-color: #EFE!important;
  }

  .dirty:focus {
    outline-color: #8E8;
  }

  .error {
    border-color: red;
    background-color: #FDD!important;
  }
</style>