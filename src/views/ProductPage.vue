<template>
  <div>
    <h1>Product Page</h1>
  </div>
</template>

<script>

  export default {
    props: {
      'id': {
        required: true
      }
    },
    async created() {
      // let requestUrl = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}` );
      // let requestImg = await axios.get(`https://jsonplaceholder.typicode.com/photos/${this.$route.params.id}` );
      // this.post = Object.assign({}, requestUrl.data, { url: requestImg.data.url });
    },
  }

</script>
<style lang="scss" scoped>

</style>