<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/setUp">setUp</router-link> |
      <router-link to="/dataPage">dataPage</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  },
  data:{
    msg: 'test',
    database: null,
  },
  created() {
    
  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="sass">
  *
    box-sizing: border-box
  
  html,body
    margin: 0
    padding: 0
    font-family: "微軟正黑體","Microsoft JhengHei", "STHeiti Light", "STHeiti", Arial, sans-serif !important
    background-color: #f1f1f1 !important
  input 
    display: block
    padding: 10px 15px
    // border: 1px solid #000 
    margin-bottom: 5px
</style>