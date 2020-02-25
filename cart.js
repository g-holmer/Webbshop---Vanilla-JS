showCart();
let fromButton = false;
writeCartList(fromButton);
updateCartBtn();
function showCart() {
  let getArray = JSON.parse(localStorage.getItem("myObject"));
  const cartBtn = document.querySelector(".cart__btn");
  const cartWindow = document.querySelector(".main__cart");
  const clearBtn = document.createElement("button");
  const preDiv = document.querySelector(".products__info");

  clearBtn.textContent = "Töm Varukorg";
  clearBtn.className = "main__cart__clear";
  cartWindow.insertBefore(clearBtn, preDiv);

  clearBtn.addEventListener("click", function() {
    localStorage.clear();
    preDiv.innerHTML = "";
    updateCartBtn();

    const h3 = document.querySelector(".main__cart__finishproduct__h3");

    h3.textContent = "";
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
        idArray.push(id);
        localStorage.setItem("product_ids", JSON.stringify(idArray));
      } else {
        id += 1;
        idArray = JSON.parse(localStorage.getItem("product_ids"));
        idArray.push(id);
        localStorage.setItem("product_ids", JSON.stringify(idArray));
      }

      let getIdArray = JSON.parse(localStorage.getItem("product_ids"));
      for (let i = 0; i < getIdArray.length; i++) {
        var objId = getIdArray.length - 1;
      }
      const myObject = {
        id: objId,
        name: getName,
        img: getImg,
        price: getPrice,
        qty: getQty
      };

      let getArray;
      let alreadyExists = false;
      if (localStorage.getItem("myObject") === null) {
        let prodArray = [];
        prodArray.push(myObject);
        localStorage.setItem("myObject", JSON.stringify(prodArray));
      } else {
        getArray = JSON.parse(localStorage.getItem("myObject"));
        for (let i = 0; i < getArray.length; i++) {
          if (getArray[i].name === getName) {
            alreadyExists = true;
          }
        }

        if (alreadyExists) {
          alert("You already have this item in your cart.");
        } else {
          getArray.push(myObject);
          localStorage.setItem("myObject", JSON.stringify(getArray));
        }
      }
      getArray = JSON.parse(localStorage.getItem("myObject"));
      updateSum(getArray);

      updateCartBtn();

      //WRITE CART LIST
      if (alreadyExists === false) {
        let fromButton = true;
        writeCartList(fromButton);
      }
    });
  });
}
function writeCartList(fromButton) {
  let getArray = JSON.parse(localStorage.getItem("myObject"));
  const productInfo = document.querySelector(".products__info");
  let id;
  let cartHtml;
  if (getArray === null) return;
  for (let i = 0; i < getArray.length; i++) {
    id = getArray[i].id;
    cartHtml = `<div class="cart product-${id}" id="${id}"><div class="products__info__img"><img class="product_info_image" src="" /></div><div class="products__info__productname"></div><div class="products__info__wrap"><div class="products__info__sum"></div><div class="products__info__qty"><button class="products__info__qty__btn">-</button><span class="products__info__qty__output"></span><button class="products__info__qty__btn">+</button></div><div class="products__info__del"><div class="products__info__delBtn"><span></span><span></span></div></div></div></div>`;
    if (fromButton === false) {
      productInfo.innerHTML += cartHtml;
    }
  }
  if (fromButton) {
    productInfo.innerHTML += cartHtml;
  }
  fillCartList(getArray, fromButton);
}

function fillCartList(getArray, fromButton) {
  const infoNameDiv = document.querySelectorAll(".products__info__productname");
  const infoImageDiv = document.querySelectorAll(".product_info_image");
  const infoPriceDiv = document.querySelectorAll(".products__info__sum");
  const infoQty = document.querySelectorAll(".products__info__qty__output");

  //FILL NAMES
  for (let i = 0; i < getArray.length; i++) {
    if (fromButton) {
      const lastItem = getArray.length - 1;
      infoNameDiv[lastItem].textContent = getArray[lastItem].name;
      infoImageDiv[lastItem].src = getArray[lastItem].img;
      infoPriceDiv[lastItem].textContent = getArray[lastItem].price;
      infoQty[lastItem].textContent = getArray[lastItem].qty;
    } else {
      infoNameDiv[i].textContent = getArray[i].name;
      infoImageDiv[i].src = getArray[i].img;
      infoPriceDiv[i].textContent = getArray[i].price;
      infoQty[i].textContent = getArray[i].qty;
    }
  }
  deleteItemsFromCart(getArray);
  changeQty(getArray);
  updateSum(getArray);
}

function deleteItemsFromCart(getArray) {
  const delBtns = document.querySelectorAll(".products__info__delBtn");
  delBtns.forEach(delBtn => {
    delBtn.addEventListener("click", function(evt) {
      var index = getArray.findIndex(function(prod) {
        return prod.id == delBtn.parentElement.parentElement.parentElement.id;
      });

      getArray.splice(index, 1);
      delBtn.parentElement.parentElement.parentElement.remove();
      localStorage.setItem("myObject", JSON.stringify(getArray));

      updateSum(getArray);
      updateCartBtn();
    });
  });
}
function updateCartBtn() {
  let getArray = JSON.parse(localStorage.getItem("myObject"));
  const cartButton = document.querySelector(".cart__btn__num-bg");
  const clearBtn = document.querySelector(".main__cart__clear");
  const finishBtn = document.querySelector(".main__cart__finishproduct__href");
  if (getArray === null || getArray.length === 0) {
    cartButton.textContent = "";
    cartButton.style.display = "none";
  } else {
    cartButton.style.display = "flex";
    cartButton.textContent = updateQty(getArray);
  }
  updateCartFunctions(clearBtn, getArray);
  updateCartFunctions(finishBtn, getArray);
}
function updateCartFunctions(btn, getArray) {
  if (getArray === null || getArray.length === 0) {
    btn.style.display = "none";
  } else {
    btn.style.display = "flex";
  }
}
function updateQty(getArray) {
  let sum = 0;
  for (let i = 0; i < getArray.length; i++) {
    sum += +getArray[i].qty;
  }
  return sum;
}

function changeQty(getArray) {
  const qtyBtns = document.querySelectorAll(".products__info__qty__btn");

  qtyBtns.forEach(btn => {
    btn.addEventListener("click", function() {
      var index = getArray.findIndex(function(prod) {
        return prod.id == btn.parentElement.parentElement.parentElement.id;
      });

      if (btn.innerHTML === "+") {
        getArray[index].qty -= 1; //???
        getArray[index].qty += 2;
        btn.previousSibling.textContent = getArray[index].qty;
      } else {
        if (getArray[index].qty > 1) getArray[index].qty -= 1;
        btn.nextSibling.textContent = getArray[index].qty;
      }
      localStorage.setItem("myObject", JSON.stringify(getArray));
      updateSum(getArray);
      updateCartBtn();
    });
  });
}
function updateSum(getArray) {
  const h3 = document.querySelector(".main__cart__finishproduct__h3");
  let PRICE_CURRENCY = " kr";
  h3.textContent = "Totalsumma: " + sum(getArray) + PRICE_CURRENCY;
  if (h3.textContent === "Totalsumma: 0 kr") {
    h3.textContent = "";
  }
}
function sum(getArray) {
  let sum = 0;

  for (let i = 0; i < getArray.length; i++) {
    var str = getArray[i].price;
    var res = str.replace(/\D/g, "");
    sum += +res * getArray[i].qty;
  }
  return sum;
}
function continueOrder() {
  const contBtn = document.querySelector(".main__cart__finishproduct__href");
  let getArray = JSON.parse(localStorage.getItem("myObject"));
  if (getArray.length > 0) {
    contBtn.href = "order.html";
  } else {
    contBtn.href = "";
  }
}