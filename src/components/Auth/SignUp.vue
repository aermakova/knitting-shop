<template>
  <b-modal id="modal-sign-up" centered title="Регистрация" hide-footer>

    <b-alert show v-if="error"
             :class="error ? 'alert-show' : 'alert-hide'"
             class="alert-small"
             variant="danger">{{ error.message }}</b-alert>
    <b-form class="mt-4" style="width: 100%">
      <b-form-group
              id="input-group-1"
              label="Почта:"
              label-for="input-1"
              description="Введите Ваш e-mail"
      >
        <b-form-input
                id="input-1"
                type="email"
                placeholder="example@email.com"
                v-model="email"
        ></b-form-input>
      </b-form-group>
      <b-form-group
              id="input-group-2"
              label="Пароль:"
              label-for="input-2"
              description="Придумайте и введите пароль"
      >
        <b-form-input
                id="input-2"
                type="text"
                placeholder="*******"
                v-model="password"
        ></b-form-input>
      </b-form-group>
    </b-form>
    <b-button type="submit" variant="success" @click="signUp" :disabled="processing">Регистрация</b-button>
  </b-modal>
</template>

<script>
  export default {
    data() {
      return{
        'email': null,
        'password': null,
      }
    },
    computed: {
      error() {
        return this.$store.getters.getError
      },
      processing() {
        return this.$store.getters.getProcessing
      },
      isUserAuthenticated() {
        return this.$store.getters.isUserAuthenticated
      }
    },
    watch: {
      isUserAuthenticated(val) {
        if(val === true) {
          this.$bvModal.hide('modal-sign-up');
          this.$router.push('/')
        }
      }
    },
    methods: {
      signUp() {
        this.$store.dispatch('SIGNUP', {email: this.email, password: this.password});

      }
    }
  }

</script>
<style lang="scss" scoped>
  .alert-small{
    font-size: 70%;
  }
  .alert{
    padding: 0.25rem;
    margin-top: 0.25rem;
  }
  .alert-show{
    display: block;
  }
  .alert-hide{
    display: none;
  }

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