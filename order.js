createOrderStructure();
function createOrderStructure() {  
    let getArray = JSON.parse(localStorage.getItem("myObject"));
    let dateToday = new Date().toLocaleDateString()
    const randomID =  Math.random().toString(36).substring(2, 5) + Math.random().toString(36).substring(2, 5);
    const date = document.querySelector('.order-confirmation__summary__date')
    const randomString = document.querySelector('.order-confirmation__h3')
    date.textContent = dateToday;
    randomString.textContent = 'Order: #' + randomID.toUpperCase()
    console.log(randomID);
  for (let i = 0; i < getArray.length; i++) {
    let prod = document.querySelector(".confirmation__items");
    let product = document.createElement("div");
    //main product info cart
    product.className = "confirmation__info product-" + getArray[i].id;
    product.id = getArray[i].id;
    prod.appendChild(product);

    const infoImgContainer = document.createElement("div");
    infoImgContainer.className = "confirmation__info__img";
    product.appendChild(infoImgContainer);
    const infoImg = document.createElement("img");
    infoImgContainer.appendChild(infoImg);
    infoImg.className = "product_info_image";
    //info product name
    const infoProductName = document.createElement("div");
    infoProductName.className = "confirmation__info__productname";
    product.appendChild(infoProductName);
    //info sum
    const infoSum = document.createElement("div");
    infoSum.className = "confirmation__info__sum";
    product.appendChild(infoSum);
    //info qty
    const infoQty = document.createElement("div");
    infoQty.className = "confirmation__info__qty";
    product.appendChild(infoQty);
    const outputQty = document.createElement("span");
    infoQty.appendChild(outputQty);
    outputQty.className = "confirmation__info__qty__output";
  }
  const infoNameDiv = document.querySelectorAll(".confirmation__info__productname");
  const infoImageDiv = document.querySelectorAll(".product_info_image");
  const infoPriceDiv = document.querySelectorAll(".confirmation__info__sum");
  const infoQty = document.querySelectorAll(".confirmation__info__qty__output");

  for (let i = 0; i < getArray.length; i++) {
    infoNameDiv[i].textContent = getArray[i].name;
    infoImageDiv[i].src = getArray[i].img;
    infoPriceDiv[i].textContent = getArray[i].price;
    infoQty[i].textContent = getArray[i].qty;
  }
  updateSum(getArray)
}
