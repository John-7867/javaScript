const shoppingCart = {
  items: [
    {prpductname: "Apples", price: 8.59, quantity: 40},
    {prpductname: "Oranges", price: 12, quantity: 100},    
  ],

  addItemToCart(item) {
    this.item.push(item)
  },
}

shoppingCart.addItemToCart({prpductname: "Honey", price: 18.59, quantity: 400},)
console.log(shoppingCart.items)