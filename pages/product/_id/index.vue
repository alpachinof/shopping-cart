<template>
<div>
  <v-container class="d-flex flex-column flex-md-row justify-md-center">
      <v-img
        contain
        class="ma-6"
        :src="allproducts[route].image"
        max-height="400"
        max-width="600"
      ></v-img>
    <div class="information flex-wrap">
      <h1 class="col-12 text-truncate">{{allproducts[route].title}}</h1>
      <h2 class="ml-4">$ {{allproducts[route].price}}</h2>
      <h4 class="mt-12">{{allproducts[route].description}}</h4>
      
      <v-btn
      class="mt-12 "
      width="250"
      @click="$store.commit('addtocart',item)"
      color="primary"
      >add to cart</v-btn>

    </div>
  </v-container>
</div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  data(){
    return{
      route: this.$route.params.id -1,
      item:{
          name:'',
          image:'',
          price:'',
          id:'',
          countity:''
      },
    }
  },
  computed: mapGetters(["allproducts"]),
  created(){
    this.item.name = this.allproducts[this.route].title;
    this.item.image = this.allproducts[this.route].image;
    this.item.price = this.allproducts[this.route].price;
    this.item.id = this.allproducts[this.route].id;
    this.item.countity = 1;
  }
}
</script>

<style scoped>
.container{
  display: flex;
  justify-content: space-between;
  align-items:center;
}
.information{
  display: flex;
  flex-shrink: 1;
  width: 400px;
  flex-direction: column;
}
</style>