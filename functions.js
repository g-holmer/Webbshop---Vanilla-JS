const renderImages = document.querySelectorAll('img');

const url = 'products.json';

renderImages.forEach(image => {
    $.getJSON(url, function(response) {
        for (let index = 0; index < renderImages.length; index++) {
            image.src = response[index].image;
        }
    });    
});



let id = 0;
let selectAmount = 0;

const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const amount = document.querySelector('.amount');

let myArray = [''];
btn.addEventListener('click', function() {
selectAmount = amount.value;
});


    //push into array
    var prodItems = {
      id: id++,
      amount: selectAmount,
    };
localStorage.setItem("myArray", JSON.stringify(prodItems));
getArray = JSON.parse(localStorage.getItem("myArray"));
console.log(getArray)

});


nameDiv[0].textContent = prodItems[0].name
nameDiv[1].textContent = prodItems[1].name
nameDiv[2].textContent = prodItems[2].name


/*
<div class="products product-1">
<div class="image__div">
<img src="http://source.unsplash.com/500x300/?BMW" alt="" srcset="" /><br>
</div>
<span class="product__name"></span>
<div class="input__buttons-wrapper">
<select>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </select> 
  <span class="product__price">99 kr</span>
  <button class="btn">Add to cart</button>
</div>
</div>
<div class="products product-2">
    <img src="http://source.unsplash.com/500x300/?BMW" alt="" srcset="" /><br>
    <span class="product__name"></span>
    <div class="input__buttons-wrapper">
        <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select> 
          <span class="product__price">99 kr</span>
          <button class="btn">Add to cart</button>
        </div>
    </div>
    <div class="products product-3">
        <img src="http://source.unsplash.com/500x300/?BMW" alt="" srcset="" /><br>
        <span class="product__name"></span>
        <div class="input__buttons-wrapper">
            <select class="amount">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select> 
              <span class="product__price">99 kr</span>
              <button class="btn">Add to cart</button>
            </div>
        </div>
*/