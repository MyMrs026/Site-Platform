<template>
  <div>密闭运输</div>
</template>

<script>
export default {
  name: 'mibiyunshu',
  data(){
    return {

    }
  },
  methods: {
    _initdata(){
      this.$axios.get('/api/video/hello').then(res => {
        res = res.data;
        console.log(res)
      })
    }
  },
  mounted() {

  },
  created() {
    // this._initdata();
  }
}
</script>

<style scoped>

</style>
