//FETCH

fetch("products.json")
  .then(response => response.json())
  .then(data => showProducts(data))
  .catch(err => console.log(err));

function showProducts(prodItems) {
  createHtmlStructure(prodItems);
  fillHtmlStructure(prodItems);
  createCartList();
}

function createHtmlStructure(prodItems) {
  for (let i = 1; i <= prodItems.length; i++) {
    const productsWrapper = document.querySelector(".products__wrapper");
    const mainProduct = document.createElement("div");
    mainProduct.className = "products " + "product-" + i;
    productsWrapper.appendChild(mainProduct);

    //IMG
    const imageWrapper = document.createElement("div");
    imageWrapper.className = "image__div";
    mainProduct.appendChild(imageWrapper);

    const imgElement = document.createElement("img");
    imageWrapper.appendChild(imgElement);
    imgElement.src = "";

    imgElement.className = "product__image";

    //product info wrapper
    const prodInfoWrapper = document.createElement("div");
    mainProduct.appendChild(prodInfoWrapper);
    prodInfoWrapper.className = "prod__info__wrapper";
    //product info top
    const prodInfoWrapperTop = document.createElement("div");
    prodInfoWrapper.appendChild(prodInfoWrapperTop);
    prodInfoWrapperTop.className = "prod__info__wrapper__top";
    //product info bottom
    const prodInfoWrapperBottom = document.createElement("div");
    prodInfoWrapper.appendChild(prodInfoWrapperBottom);
    prodInfoWrapperBottom.className = "prod__info__wrapper__bottom";
    //Product Name
    const prodNameWrapper = document.createElement("div");
    const prodNameFont = document.createElement("h4");
    prodNameWrapper.className = "product__name";
    prodNameFont.className = "product__name__font";
    prodInfoWrapperTop.appendChild(prodNameWrapper);
    prodNameWrapper.appendChild(prodNameFont);


    //input btns
    const inputBtnWrapper = document.createElement("div");
    inputBtnWrapper.className = "input__buttons-wrapper";
    prodInfoWrapperBottom.appendChild(inputBtnWrapper);

    const selectTag = document.createElement("select");
    inputBtnWrapper.appendChild(selectTag);

    const option1 = document.createElement("option");
    const option2 = document.createElement("option");
    const option3 = document.createElement("option");
    const option4 = document.createElement("option");
    const option5 = document.createElement("option");
    selectTag.appendChild(option1);
    selectTag.appendChild(option2);
    selectTag.appendChild(option3);
    selectTag.appendChild(option4);
    selectTag.appendChild(option5);
    option1.value = 1;
    option1.textContent = 1;
    option2.value = 2;
    option2.textContent = 2;
    option3.value = 3;
    option3.textContent = 3;
    option4.value = 4;
    option4.textContent = 4;
    option5.value = 5;
    option5.textContent = 5;

    //Product price
    const prodPriceWrapper = document.createElement("span");
    prodPriceWrapper.className = "product__price";
    prodInfoWrapperBottom.appendChild(prodPriceWrapper);

    //button
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = "Add to cart";
    prodInfoWrapperBottom.appendChild(btn);
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
      priceDiv[i].textContent = prodItems[i].price;
    }

    //FILL IMAGES

    for (let i = 0; i < imageDiv.length; i++) {
      imageDiv[i].src = prodItems[i].image;
    }
  }
}
