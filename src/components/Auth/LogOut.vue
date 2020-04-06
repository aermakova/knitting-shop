<template>
  <div>
    <b-modal id="modal-logout"
             centered
             size="sm"
             :footer-text-variant="footerTextVariant">
      <p class="text-center" style="margin-bottom: 0">Вы точно хотите выйти?</p>
      <template v-slot:modal-footer>
        <div class="w-100">
          <b-button
                  variant="secondary"
                  size="sm"
                  class="float-left"
                  @click="logOutUser"
          >
            Да
          </b-button>
          <b-button
                  variant="success"
                  size="sm"
                  class="float-right"
                  @click="hideModal"
          >
            Нет
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        footerTextVariant: 'dark'
      }
    },
    methods: {
      hideModal() {
        this.$root.$emit('bv::hide::modal', 'modal-logout', '#btnShow')
      },
      async logOutUser() {
        console.log('out')
        await this.$store.dispatch('LOG_OUT');
        this.hideModal()
      }
    }
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