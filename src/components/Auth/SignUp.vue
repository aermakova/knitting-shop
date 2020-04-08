<template>
  <b-modal id="modal-sign-up" centered title="Регистрация" hide-footer>

    <b-alert show v-if="error"
             :class="error ? 'alert-show' : 'alert-hide'"
             class="alert-small"
             variant="danger">{{ error.message }}</b-alert>
    <b-form style="width: 100%">
      <b-form-group
              id="input-group-13"
              label-for="input-13"
              description="Введите ваше имя"
      >
        <b-form-input
                id="input-13"
                type="text"
                placeholder="Введите ваше имя"
                v-model="name"
                :class="{ 'is-invalid': $v.name.$error }"
        ></b-form-input>
        <small class="error" v-if="!$v.name.minLength">Имя должно содержать не менее {{$v.name.$params.minLength.min}} символов</small>
      </b-form-group>
      <b-form-group
              id="input-group-1"
              label-for="input-1"
              description="Введите Ваш e-mail"
      >
        <b-form-input
                id="input-1"
                type="email"
                placeholder="example@email.com"
                v-model.trim="email"
                :class="{ 'is-invalid': $v.email.$error }"
        ></b-form-input>
        <small class="error" v-if="!$v.email.emailRegex">Укажите корректный e-mail</small>
      </b-form-group>
      <b-form-group
              id="input-group-2"
              label-for="input-2"
              description="Придумайте и введите пароль"
      >
        <b-form-input
                id="input-2"
                type="text"
                placeholder="*******"
                v-model.trim="$v.password.$model"
                :class="{ 'is-invalid': $v.password.$error }"
        ></b-form-input>
        <small class="error" v-if="!$v.password.minLength">Пароль должен содержать не менее {{$v.password.$params.minLength.min}} символов</small>
      </b-form-group>
      <b-form-group
              id="input-group-3"
              label-for="input-3"
              description="Подтвердите пароль"
      >
        <b-form-input
                id="input-3"
                type="text"
                placeholder="*******"
                v-model.trim="$v.passwordRepeat.$model"
                :class="{ 'is-invalid': $v.passwordRepeat.$error }"
        ></b-form-input>
        <small class="error" v-if="!$v.passwordRepeat.sameAsPassword">Пароли должны совпадать</small>
      </b-form-group>
    </b-form>
    <b-button type="submit" variant="success" size="sm" @click="signUp" :disabled="submitStatus === 'PENDING'">
      <b-spinner small v-if="submitStatus === 'PENDING'"></b-spinner>
      Регистрация
    </b-button>
  </b-modal>
</template>

<script>
  import { helpers, sameAs, required, minLength } from 'vuelidate/lib/validators'
  const emailRegex = helpers.regex('urlRegex', /(^([a-zA-Z0-9_-]+)@([a-zA-Z0-9_-]+)\.([a-zA-Z]{2,5})$)/);
  export default {
    data() {
      return{
        name: null,
        email: null,
        password: null,
        passwordRepeat: null,
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
          this.$bvModal.hide('modal-sign-up');
          this.$router.push('/')
        }
      }
    },
    methods: {
      signUp() {
        this.$v.$touch();
        if (this.$v.$invalid) {
          this.submitStatus = 'ERROR';
        } else {
          this.$store.dispatch('SIGN_UP', {email: this.email, password: this.password, name: this.name});
          //this.submitStatus = 'PENDING';
          this.$bvModal.hide('modal-sign-up');
        }
      }
    },
    mounted() {
      this.$root.$on('bv::modal::hide', () => {
        this.name = '';
        this.email = '';
        this.password = '';
        this.passwordRepeat = '';
        this.$nextTick(() => {
          this.$v.$reset();
        })
      })
    },
    validations: {
      name: {
        required,
        minLength: minLength(2),
      },
      email: {
        required,
        emailRegex,
      },
      password: {
        required,
        minLength: minLength(6),
      },
      passwordRepeat: {
        sameAsPassword: sameAs('password'),
      },
    },
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
  .error {
    color: #dc3545;
  }
</style>