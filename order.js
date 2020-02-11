function createOrderStructure(getArray) {
    const prod = document.querySelector(".confirmation__items");
    const product = document.createElement("div");
  
    for (let i = 0; i < getArray.length; i++) {
      //main product info cart
      product.className = "product-" + getArray[i].id;
      product.id = getArray[i].id;
      prod.appendChild(product);
    }
  
    const infoImgContainer = document.createElement("div");
    infoImgContainer.className = "products__info__img";
    product.appendChild(infoImgContainer);
    const infoImg = document.createElement("img");
    infoImgContainer.appendChild(infoImg);
    infoImg.className = "product_info_image";
    //info product name
    const infoProductName = document.createElement("div");
    infoProductName.className = "products__info__productname";
    product.appendChild(infoProductName);
    //info sum
    const infoSum = document.createElement("div");
    infoSum.className = "products__info__sum";
    product.appendChild(infoSum);
    //info qty
    const infoQty = document.createElement("div");
    infoQty.className = "products__info__qty";
    product.appendChild(infoQty);
  }