<template>
  <div>
      <v-container class="mt-12 d-flex flex-column flex-md-row justify-space-around align-center fill-height flex-wrap">
          <v-img
            contain
            :src="image"
            class="d-none d-md-flex max-height max-width"
            max-height="400"
            max-width="600"
            width="300"
            cover
          >
          </v-img>
          <div class="sub mt-12">
                <h1>Welcome to our<br>Shop</h1>
                <v-btn
                x-large
                color="primary"
                width="300"
                elevation="24"
                class="mt-8 text-xs-center"
                to="/products"
                >order now</v-btn>
          </div>
      </v-container>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return{
      image: require('~/assets/image1.svg')
    }
  },

}
</script>

<style scoped>
h1{
  text-align: center;
  font-size: 40px;
}
.sub{
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;
}
</style>