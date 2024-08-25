// const products = [
//   {
//   image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
//   name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
//   rating: {
//     stars: 4.5,
//     cout: 87
//   },
//   priceCents: 1090
//   },

//   {
//     image: 'images/products/intermediate-composite-basketball.jpg',
//     name: 'Intermediate Size Basketball',
//     rating: {
//       stars: 4,
//       cout: 127
//     },
//     priceCents: 2095
//   },


//   {
//     image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
//     name: 'Adults Plain Cotton T-Shirt - 2 Pack',
//     rating: {
//       stars: 4.5,
//       cout: 56
//     },
//     priceCents: 799
//   }


// ];

import {cart} from '../scripts/cart.js'


let productsHTML = '';

products.forEach((product)=>{
  productsHTML +=`
    <div class="product-container">

    <div class="product-image-container">
      <img class="product-image"
        src=${product.image}>
    </div>

    <div class="product-name limit-text-to-2-lines">
    ${product.name}
    </div>

    <div class="product-rating-container">
      <img class="product-rating-stars"
        src="images/ratings/rating-${product.rating.stars * 10}.png">
      <div class="product-rating-count link-primary">
      ${product.rating.cout}
      </div>
    </div>

    <div class="product-price">
      $${(product.priceCents / 100).toFixed(2)}
    </div>

    <div class="product-quantity-container">
      <select class="js-product-quantity">
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart">
      <img src="images/icons/checkmark.png">
      Added
    </div>

    <button class="add-to-cart-button button-primary js-add-to-cart" 
    data-product-id="${product.id}"
    ">
      Add to Cart
    </button>
  </div>

  
  `;

});


document.querySelector('.js-products-grid').innerHTML = productsHTML;



// To target a certain button from the html. Fk that's incredibly important.
// document.querySelectorAll('.js-add-to-cart')
//   .forEach((button)=>{
//     button.addEventListener('click', ()=>{
//       alert('something');
//     })
//   });








document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;

      // Retrieve the correct product container
      const productContainer = button.closest('.product-container');
      
      // Retrieve the selected quantity
      const quantitySelect = productContainer.querySelector('.js-product-quantity');
      const selectedQuantity = parseInt(quantitySelect.value);

      let matchingItem;

      cart.forEach((item) => {
        if (productId === item.productId) {
          matchingItem = item;
        }
      });

      if (matchingItem) {
        matchingItem.quantity += selectedQuantity;
      } else {
        cart.push({
          productName: productId,
          quantity: selectedQuantity
        });
      }

      let cartQuantity = 0;

      cart.forEach((item) => {
        cartQuantity += item.quantity;
      });

      document.querySelector('.cart-quantity').innerHTML = cartQuantity;
    });
  });



