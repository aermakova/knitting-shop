<template>
  <b-modal id="modal-sign-in" centered title="Вход" hide-footer>

    <b-alert show v-if="error"
             :class="error ? 'alert-show' : 'alert-hide'"
             class="alert-small"
             variant="danger">{{ error.message }}</b-alert>
    <b-form style="width: 100%">
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
                :class="{ 'is-invalid': $v.email.$error }"
        ></b-form-input>
        <small class="error" v-if="!$v.email.emailRegex">Укажите корректный e-mail</small>
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
                :class="{ 'is-invalid': $v.password.$error }"
        ></b-form-input>
        <small class="error" v-if="!$v.password.minLength">Пароль должен содержать не менее {{$v.password.$params.minLength.min}} символов</small>
      </b-form-group>
    </b-form>
    <b-button type="submit" variant="success" size="sm" @click="signIn" :disabled="submitStatus === 'PENDING'">
      <b-spinner small v-if="submitStatus === 'PENDING'"></b-spinner>
      Войти
    </b-button>
  </b-modal>
</template>

<script>
  import { helpers, required, minLength } from 'vuelidate/lib/validators'
  const emailRegex = helpers.regex('urlRegex', /(^([a-zA-Z0-9_-]+)@([a-zA-Z0-9_-]+)\.([a-zA-Z]{2,5})$)/);
  export default {
    data() {
      return{
        email: '',
        password: '',
        submitStatus: null
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
          this.$bvModal.hide('modal-sign-in');
          this.$router.push('/')
        }
      }
    },
    methods: {
      signIn() {
        this.$v.$touch();
        if (this.$v.$invalid) {
          this.submitStatus = 'ERROR';
        } else {
          this.$store.dispatch('SIGN_IN', {email: this.email, password: this.password});
          //this.submitStatus = 'PENDING';
          this.$bvModal.hide('modal-sign-in');
        }
      },
      onReset(evt) {
        evt.preventDefault();
        this.email = '';
        this.password = '';
        this.submitStatus = null;
      }
    },
    mounted() {
      this.$root.$on('bv::modal::hide', () => {
        this.email = '';
        this.password = '';
      })
    },
    validations: {
      email: {
        required,
        emailRegex,
      },
      password: {
        required,
        minLength: minLength(6),
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
  .error {
    color: #dc3545;
  }
</style>