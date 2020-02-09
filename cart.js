showCart();
refreshCartList();
updateCartBtn();

function showCart() {
  let getArray = JSON.parse(localStorage.getItem("myObject"));
  const cartBtn = document.querySelector(".cart__btn");
  const cartWindow = document.querySelector(".main__cart");
  const clearBtn = document.createElement("button");
  const preDiv = document.querySelector(".products__info");
  
  clearBtn.textContent = "Töm Varukorg";
  cartWindow.insertBefore(clearBtn, preDiv)
  clearBtn.addEventListener("click", function() {
    localStorage.clear();
    preDiv.innerHTML = "";
    updateCartBtn()
    if (getArray === null) return;
    getArray.pop();
    getArray.shift();
  });
  cartBtn.addEventListener("click", function() {
    if (cartWindow.style.display === "none") {
      cartWindow.style.display = "flex";
    } else {
      cartWindow.style.display = "none";
    }
  });
}

function createCartList() {
  const buttons = document.querySelectorAll(".btn");
  let id = 0;
  buttons.forEach(button => {
    button.addEventListener("click", function(evt) {
      const getName =
        button.parentElement.previousSibling.firstChild.firstChild.textContent;
      const getImg =
        button.parentElement.parentElement.previousSibling.firstChild.src;
      const getPrice = button.previousSibling.firstChild.textContent;
      const getQty = button.previousSibling.previousSibling.firstChild.value;

      let idArray = [];
      if (localStorage.getItem("product_ids") === null) {
        id += 1;
        idArray.push(id)
        localStorage.setItem("product_ids", JSON.stringify(idArray));
      } else {
        id += 1;
        idArray = JSON.parse(localStorage.getItem("product_ids"));
        idArray.push(id)
        localStorage.setItem("product_ids", JSON.stringify(idArray));
      }
      
      let getIdArray = JSON.parse(localStorage.getItem("product_ids"));
      for (let i = 0; i < getIdArray.length; i++) {
        var objId = getIdArray.length -1;
        
      }
      const myObject = {
        id: objId,
        name: getName,
        img: getImg,
        price: getPrice,
        qty: getQty
      };

      let getArray;
      if (localStorage.getItem("myObject") === null) {
        let prodArray = [];
        prodArray.push(myObject);
        localStorage.setItem("myObject", JSON.stringify(prodArray));
      } else {
        getArray = JSON.parse(localStorage.getItem("myObject"));
        getArray.push(myObject);
        localStorage.setItem("myObject", JSON.stringify(getArray));
      }
      getArray = JSON.parse(localStorage.getItem("myObject"));
      const h3 = document.querySelector(".main__cart__finishproduct__h3");
      h3.textContent = 'Totalsumma: ' + sum(getArray);
      //ADD NUMBER TO CART BUTTON
      const cartButton = document.querySelector(".cart__btn__num-bg");
      cartButton.style.display = "flex";
      cartButton.textContent = getArray.length;

      //WRITE CART LIST
      writeCartList();
    });
  });
}
function writeCartList() {
  let fromButton = true;
  let getArray = JSON.parse(localStorage.getItem("myObject"));
  const productInfo = document.querySelector(".products__info");
  const product = document.createElement("div");

  for (let i = 0; i < getArray.length; i++) {
    //main product info cart
    product.className = "cart product-" + getArray[i].id;
    product.id = getArray[i].id;
    productInfo.appendChild(product);
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
  //info qty

  const del = document.createElement("div");
  product.appendChild(del);
  del.className = "products__info__del";
  const delBtn = document.createElement("div");
  delBtn.className = "products__info__delBtn";
  del.appendChild(delBtn);
  const span1 = document.createElement("span");
  delBtn.appendChild(span1);
  const span2 = document.createElement("span");
  delBtn.appendChild(span2);

  /*    //total
    const prodFinish = document.createElement('div');
    const spanTotalSum = document.createElement('span');
    const toCartBtn = document.createElement('button');
    spanTotalSum.textContent = 'Totalsumma:';
    toCartBtn.textContent = 'To cart';
    prodFinish.appendChild(spanTotalSum)
    prodFinish.appendChild(toCartBtn)
    prodFinish.className = 'products__finish';
    productInfo.appendChild(prodFinish)
  */
  fillCartList(getArray, fromButton);
}
function refreshCartList() {
  let getArray = JSON.parse(localStorage.getItem("myObject"));
  let fromButton = false;
  for (let i = 0; i < getArray.length; i++) {
    const productInfo = document.querySelector(".products__info");
    const product = document.createElement("div");
    //main product info cart
    product.className = "cart product-" + getArray[i].id;
    product.id = getArray[i].id;
    productInfo.appendChild(product);

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
    //info qty
    const infoQty = document.createElement("div");
    infoQty.className = "products__info__qty";
    product.appendChild(infoQty);
    //info sum
    const infoSum = document.createElement("div");
    infoSum.className = "products__info__sum";
    product.appendChild(infoSum);

    const del = document.createElement("div");
    product.appendChild(del);
    del.className = "products__info__del";
    const delBtn = document.createElement("div");
    delBtn.className = "products__info__delBtn";
    del.appendChild(delBtn);
    const span1 = document.createElement("span");
    delBtn.appendChild(span1);
    const span2 = document.createElement("span");
    delBtn.appendChild(span2);
  }

  /*    //total
    const prodFinish = document.createElement('div');
    const spanTotalSum = document.createElement('span');
    const toCartBtn = document.createElement('button');
    spanTotalSum.textContent = 'Totalsumma:';
    toCartBtn.textContent = 'To cart';
    prodFinish.appendChild(spanTotalSum)
    prodFinish.appendChild(toCartBtn)
    prodFinish.className = 'products__finish';
    productInfo.appendChild(prodFinish)
  */
  fillCartList(getArray, fromButton);
}

function fillCartList(getArray, fromButton) {
  const infoNameDiv = document.querySelectorAll(".products__info__productname");
  const infoImageDiv = document.querySelectorAll(".product_info_image");
  const infoPriceDiv = document.querySelectorAll(".products__info__sum");
  const infoQty = document.querySelectorAll(".products__info__qty");

  //HÄR SKA DE HÄNDA NÅGOT

  //FILL NAMES

  if (fromButton) {
    for (let index = 0; index < getArray.length; index++) {
      const lastItem = getArray.length - 1;

      infoNameDiv[lastItem].textContent = getArray[lastItem].name;
      infoImageDiv[lastItem].src = getArray[lastItem].img;
      infoPriceDiv[lastItem].textContent = getArray[lastItem].price;
      infoQty[lastItem].textContent = getArray[lastItem].qty;
    }
  } else {
    for (let i = 0; i < getArray.length; i++) {
      infoNameDiv[i].textContent = getArray[i].name;
      infoImageDiv[i].src = getArray[i].img;
      infoPriceDiv[i].textContent = getArray[i].price;
      infoQty[i].textContent = getArray[i].qty;
    }
  }
  deleteItemsFromCart(getArray);
}

function deleteItemsFromCart(getArray) {
  const delBtns = document.querySelectorAll(".products__info__delBtn");
  delBtns.forEach(delBtn => {
    delBtn.addEventListener("click", function(evt) {
      var index = getArray.findIndex(function(prod) {
        return prod.id == delBtn.parentElement.parentElement.id
      });
      
      getArray.splice(index, 1);
      delBtn.parentElement.parentElement.remove();
      localStorage.setItem("myObject", JSON.stringify(getArray));

      const h3 = document.querySelector(".main__cart__finishproduct__h3");
      h3.textContent = 'Totalsumma: ' + sum(getArray);
      updateCartBtn();
    });
  });
}
function sum(getArray) {
  let sum = 0
  for (let i = 0; i < getArray.length; i++) {
      sum += + getArray[i].price * getArray[i].qty
  }
  return sum
}
function updateCartBtn() {
  let getArray = JSON.parse(localStorage.getItem("myObject"));
  const cartButton = document.querySelector(".cart__btn__num-bg");
  
  if(getArray === null || getArray.length === 0){
    cartButton.textContent = ''
    cartButton.style.display = "none";
  }
  else {
    cartButton.style.display = "flex";
    cartButton.textContent = getArray.length;
  }
}