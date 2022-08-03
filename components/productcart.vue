<template>
  <div>
      <v-card
        class="mx-4 my-8"
        max-width="300"
        elevation="24"
      >
        <v-img
        height="250"
        :src= image
        :lazy-src= image
        >
        <template v-slot:placeholder>
          <v-sheet
            class="px-3 pt-3 pb-3 fill-height">
          
            <v-skeleton-loader
               class="mx-auto"
               type="image"
               ></v-skeleton-loader>
          </v-sheet>
        </template>
        </v-img>
        <nuxt-link :to="'product/' + id">
        <v-card-title class="d-inline-block col-10 text-truncate link mr-8">{{name}}</v-card-title>
        </nuxt-link>
        <h2 class="my-2 mr-6 text-right text-subtitle-1">$ {{price}}</h2>

        
        <v-card-actions>
        <v-btn
        block
        tile
        color="secondary"
        class="rounded"
        @click="$store.commit('addtocart',item)"
        >Add to cart</v-btn>
        </v-card-actions>
      </v-card>
  </div>
</template>

<script>
export default {
    name: 'productcart',
    props:['name','price','image','id'],

    data(){
      return{
        item:{
          name:this.name,
          image:this.image,
          price:this.price,
          id:this.id,
          countity:1
        }
      }
  },
}
</script>

<style>
*{
    text-overflow: ellipsis;
}
text{
    text-overflow:initial;
}
.link{
  color: #fff;
}
</style>