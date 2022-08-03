import axios from 'axios';

export const state = () => ({
    products:[],
    cart:[],
  });
  
  export const mutations = {
    setproducts: (state, products) => (state.products = products),
    

    addtocart: (state,product) =>{

      let productInCart = state.cart.find(item => {
        return item.id === product.id});

      if(productInCart){
        productInCart.countity++
        
      }else{
      state.cart.push(product)
      localStorage.setItem('product', JSON.stringify(product));
      }
    },


    increase: (state,id) =>{
      let found = state.cart.findIndex(el => el.id === id)
        state.cart[found].countity++;
    },
    decrease: (state,id) =>{
      let found = state.cart.findIndex(el => el.id === id)
      let count = state.cart[found].countity;
      if(count<2){
        state.cart.splice(found,1);
      }else{
      state.cart[found].countity--;
      }
    },


  };


export const actions = {
    async fetchdata({commit}){
        const res = await axios.get("https://fakestoreapi.com/products");
        commit("setproducts", res.data)
    },
};

export const getters = {

    allproducts: state => state.products,

    cartTotalPrice: state => {
      let total = 0;
  
      state.cart.forEach(item => {
          total += item.price * item.countity;
      })
      return total
    },
    cartItemCount: state => {
      return state.cart.length;
  }

};