showCart();
writeCartList();


function createCartList() {
  const buttons = document.querySelectorAll(".btn");
  let prodArray = [];
  buttons.forEach(button => {
    let cartBtnNum = 0;

    button.addEventListener("click", function(evt) {
      const getName = button.parentElement.previousSibling.firstChild.firstChild.textContent;
      const getImg = button.parentElement.parentElement.previousSibling.firstChild.src;
      const getPrice = button.previousSibling.firstChild.textContent;
      const getAmount = button.previousSibling.previousSibling.firstChild.value;


      
      const myObject = {
        name: getName,
        img: getImg,
        price: getPrice,
        amount: getAmount
      };
    
      prodArray.push(myObject);

      localStorage.setItem("myObject", JSON.stringify(prodArray));


      //ADD NUMBER TO CART BUTTON
      cartBtnNum++;
      const cartButton = document.querySelector(".cart__btn__num-bg");
      cartButton.style.display = "flex";
      cartButton.textContent = cartBtnNum;

      //WRITE CART LIST
      writeCartList();
    });
  });
}
function writeCartList() {

  let getArray = JSON.parse(localStorage.getItem("myObject"));
  const mainCart = document.querySelector('.main__cart');
  const productInfo = document.createElement('div');
  for (let i = 1; i <= getArray.length; i++) {
    //main product info cart
    productInfo.className = "products__info " + "product-" + i;
    mainCart.appendChild(productInfo)
    const infoImgContainer = document.createElement('div');
    infoImgContainer.className = 'products__info__img';
    productInfo.appendChild(infoImgContainer)
    const infoImg = document.createElement('img');
    infoImgContainer.appendChild(infoImg)
    infoImg.className = "product_info_image";
    //info product name
    const infoProductName = document.createElement('div');
    infoProductName.className = 'products__info__productname';
    productInfo.appendChild(infoProductName)
    //info sum
    const infoSum = document.createElement('div');
    infoSum.className = 'products__info__sum';
    productInfo.appendChild(infoSum)
    //info qty
    const infoQty = document.createElement('div');
    infoQty.className = 'products__info__qty';
    productInfo.appendChild(infoQty)
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
  fillCartList(getArray)
}
function fillCartList(getArray) {
  
  const infoImageDiv = document.querySelectorAll(".product_info_image");
  const infoNameDiv = document.querySelectorAll(".products__info__productname");
  const infoPriceDiv = document.querySelectorAll(".products__info__sum");


  //HÄR SKA DE HÄNDA NÅGOT
  
    //FILL NAMES

    for (let index = 0; index < getArray.length; index++) {
      console.log(getArray[index])
      
    }



}
function showCart() {
  const cartBtn = document.querySelector(".cart__btn");
  const cartWindow = document.querySelector(".main__cart");
  cartBtn.addEventListener("click", function() {
    if (cartWindow.style.display === "none") {
      cartWindow.style.display = "flex";
    } else {
      cartWindow.style.display = "none";
    }
  });
}
