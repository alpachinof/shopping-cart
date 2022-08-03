<template>
<div>
  <v-card class="box d-flex justify-space-around align-center ma-4">
    <v-img
      float-sm-left
      height="140"
      max-width="100"
      :src="image"
    ></v-img>
    <h3 class="align-center pa-2 d-inline-block col-3 text-truncate">{{name}}</h3>
    <h3>${{price}}</h3>
  <div class="d-flex align-center">
    <span>
    <v-btn
    icon
    elevation="18"
    outlined
    small
    @click="$store.commit('decrease',item.id)"
    >-</v-btn>
    </span>

    <h3 class="mx-2">{{countity}}</h3>

    <span>
    <v-btn
    icon
    outlined
    small
    @click="$store.commit('increase',item.id)"
    >+</v-btn>
    </span>
  </div>

    <h3>${{total()}}</h3>
  </v-card>
</div>
</template>

<script>
export default {
    name:'cart-item',
    props:['image','name','price','countity','id'],
    data(){
      return{
        item:{
          id:this.id
        }
      }
    },
    methods:{
      total: function(){
        return (this.price*this.countity).toFixed(2)

      }
}
}
</script>

<style scoped>
.box{
  width: 800px;
  border-radius: 10px;
}

h2{
  margin: 0 40px;
  line-height: auto;
  text-align: center;
  width: 80px;
}
@media only screen and (max-width: 900px) {
  .box {
    width: 90vw;

  }
  h3{
    font-size: 14px;
  }
}
</style>