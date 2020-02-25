fetchProducts()
//FETCH
async function fetchProducts() {
  const res = await fetch('products.json')
  const data = await res.json()
  createHtmlStructure(data);
  fillHtmlStructure(data);
  createCartList();
}


function createHtmlStructure(prodItems) {
  for (let i = 1; i <= prodItems.length; i++) {

    const productsWrapper = document.querySelector(".products__wrapper");
      productsWrapper.innerHTML += `<div class="products product-${i}"><div class="image__div"><img src="" class="product__image" /></div><div class="prod__info__wrapper"><div class="prod__info__wrapper__top"><div class="product__name"><h4 class="product__name__font"></h4></div></div><div class="prod__info__wrapper__bottom"><div class="input__buttons-wrapper"><select><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div><span class="product__price"></span><button class="btn">Lägg i varukorg</button></div></div></div>`;
  }
}

function fillHtmlStructure(prodItems) {
  //  FILL CONTENT FROM API
  const imageDiv = document.querySelectorAll(".product__image");
  const nameDiv = document.querySelectorAll(".product__name__font");
  const priceDiv = document.querySelectorAll(".product__price");

  //FILL NAMES
  for (let i = 0; i < prodItems.length; i++) {
    for (let i = 0; i < nameDiv.length; i++) {
      nameDiv[i].textContent = prodItems[i].name;
    }

    //FILL PRICES

    for (let i = 0; i < priceDiv.length; i++) {
      let PRICE_CURRENCY = ' kr';
      priceDiv[i].textContent = prodItems[i].price + PRICE_CURRENCY;
    }

    //FILL IMAGES

    for (let i = 0; i < imageDiv.length; i++) {
      imageDiv[i].src = prodItems[i].image;
    }
  }
} 