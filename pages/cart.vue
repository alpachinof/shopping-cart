<template>
<div>
    <div v-if="cartItemCount>0">
    <h1 class="text-center d-block mt-16">Your Cart</h1>
    <v-row class="d-flex justify-center">
        <v-col cols="12" lg="8" sm="12">
            <div class="d-flex justify-center">
                <div class="mt-14">
                    <div class="d-flex flex-column item-box mt-4">
                        <!-- <div class="d-flex mb-6">
                            <h3 class="mr-auto pa-2">product</h3>
                            <h3>price</h3>
                            <h3>quantity</h3>
                            <h3>total</h3>
                        </div> -->
                        <cart-item v-for="item in $store.state.cart" :key="item.id"
                        :name="item.name" :image="item.image" :price="item.price" 
                        :countity="item.countity" :id="item.id"/>
                        </div>
                </div>
            </div>
        </v-col>
    <v-col sm="6" lg="3">
        <div class="d-flex box align-center justify-center">
            <v-card
            dark
            min-width="350"
            >
            <v-card-title>

            <h2 class="text-h6 font-weight-light ml-4">order summary</h2>
            </v-card-title>
            <hr class="mx-12">

            <v-card-text class="text-h6">
            <h4><span>subtotal:</span><span>${{decimal(cartTotalPrice)}}</span></h4>
            </v-card-text>
            
            <v-card-text class="text-h6">
            <h4><span>shipping:</span><span>${{shipping=15}}</span></h4>
            </v-card-text>
            <hr class="mx-12">

            <v-card-text class="text-h6">
            <h4><span>total:</span><span>${{decimal(cartTotalPrice+shipping)}}</span></h4>
            </v-card-text>
            <v-card-actions>
            <v-btn
            color="primary"
            class="mt-2"
            height="50"
            block
            outlined
            >CHECKOUT</v-btn>
            </v-card-actions>
            </v-card>
        </div>

    </v-col>
    </v-row>
    </div>
    <div v-else class="d-flex mt-16 justify-center">
        <h1>NO ITEM IN CART</h1>
    </div>
</div>
</template>

<script>
import {mapGetters} from 'vuex';
import CartItem from '../components/cart-item.vue';
export default {
    components:{CartItem},

    computed: mapGetters(["cartTotalPrice","cartItemCount"]),

    methods:{
      decimal: function(price){
        return (price).toFixed(2)
      }
    }
}

</script>

<style scoped>
.item-box{
  max-width: 850PX;
  flex-shrink: 1;
}
h3{
  margin: 0 40px;
  line-height: auto;
  text-align: center;
  width: 80px;
}
hr{
  border:0.5px;
  height: 1px;
  background-color: #333333;
}
.box{
    margin-top: 8px;
}
h4{
    display: flex;
    justify-content: space-between;
    margin:0 20px;
}


</style>