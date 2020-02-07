showCart();
refreshCartList();
updateCartBtn();

function showCart() {
  let getArray = JSON.parse(localStorage.getItem("myObject"));
  const cartBtn = document.querySelector(".cart__btn");
  const cartWindow = document.querySelector(".main__cart");
  const clearBtn = document.createElement("button");
  clearBtn.textContent = "rensa";
  cartWindow.append(clearBtn);
  clearBtn.addEventListener("click", function() {
    localStorage.clear();
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

function updateCartBtn() {
  let getArray = JSON.parse(localStorage.getItem("myObject"));

  if (getArray.length !== 0) {
    const cartButton = document.querySelector(".cart__btn__num-bg");
    cartButton.style.display = "flex";
    cartButton.textContent = getArray.length;
  }
}

function createCartList() {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach(button => {
    button.addEventListener("click", function(evt) {
      const getName = button.parentElement.previousSibling.firstChild.firstChild.textContent;
      const getImg = button.parentElement.parentElement.previousSibling.firstChild.src;
      const getPrice = button.previousSibling.firstChild.textContent;
      const getQty = button.previousSibling.previousSibling.firstChild.value;
      const myObject = {
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

      //ADD NUMBER TO CART BUTTON
      const cartButton = document.querySelector(".cart__btn__num-bg");
      cartButton.style.display = "flex";
      cartButton.textContent = getArray.length;

      //WRITE CART LIST
      writeCartList();
    });
  });
}

function refreshCartList() {
  let getArray = JSON.parse(localStorage.getItem("myObject"));
  let fromButton = false;
  for (let i = 1; i <= getArray.length; i++) {
    const mainCart = document.querySelector(".main__cart");
    const productInfo = document.createElement("div");
    //main product info cart
    productInfo.className = "products__info " + "product-" + i;
    productInfo.id = getArray.length-1;
    mainCart.appendChild(productInfo);

    const infoImgContainer = document.createElement("div");
    infoImgContainer.className = "products__info__img";
    productInfo.appendChild(infoImgContainer);
    const infoImg = document.createElement("img");
    infoImgContainer.appendChild(infoImg);
    infoImg.className = "product_info_image";
    //info product name
    const infoProductName = document.createElement("div");
    infoProductName.className = "products__info__productname";
    productInfo.appendChild(infoProductName);
    //info qty
    const infoQty = document.createElement("div");
    infoQty.className = "products__info__qty";
    productInfo.appendChild(infoQty);
    //info sum
    const infoSum = document.createElement("div");
    infoSum.className = "products__info__sum";
    productInfo.appendChild(infoSum);
    
    const del = document.createElement("div");
    productInfo.appendChild(del);
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

function writeCartList() {
  let fromButton = true;
  let getArray = JSON.parse(localStorage.getItem("myObject"));
  const mainCart = document.querySelector(".main__cart");
  const productInfo = document.createElement("div");

  for (let i = 1; i <= getArray.length; i++) {
    //main product info cart
    productInfo.className = "products__info " + "product-" + getArray.length;
    productInfo.id = getArray.length-1;
    mainCart.appendChild(productInfo);
  }

  const infoImgContainer = document.createElement("div");
  infoImgContainer.className = "products__info__img";
  productInfo.appendChild(infoImgContainer);
  const infoImg = document.createElement("img");
  infoImgContainer.appendChild(infoImg);
  infoImg.className = "product_info_image";
  //info product name
  const infoProductName = document.createElement("div");
  infoProductName.className = "products__info__productname";
  productInfo.appendChild(infoProductName);
  //info sum
  const infoSum = document.createElement("div");
  infoSum.className = "products__info__sum";
  productInfo.appendChild(infoSum);
  //info qty
  const infoQty = document.createElement("div");
  infoQty.className = "products__info__qty";
  productInfo.appendChild(infoQty);
  //info qty

  const del = document.createElement("div");
  productInfo.appendChild(del);
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
    var storedItems = JSON.parse(localStorage.getItem("myObject"));

    // here you need to make a loop to find the index of item to delete
    var indexToRemove = delBtn.parentElement.parentElement.id;
    console.log(delBtn.parentElement.parentElement.id)

    //remove item selected, second parameter is the number of items to delete 
    storedItems.slice(indexToRemove, 1);

   // Put the object into storage


    delBtn.parentElement.parentElement.remove();
    
  });
});
}