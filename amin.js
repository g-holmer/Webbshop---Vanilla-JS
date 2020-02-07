function createCartList() {

    let $btn = $(".btn")
    for (let i = 0; i < $btn.length; i++) {
  
      let mybutton = $btn[i];
  
      mybutton.addEventListener("click", function (e) {
  ​
          let getName = $(".product__name__font")
          let getImg = $(".product__image")
          let getPrice = $(".product__price")
          let getQty = $(".product__price")
  
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
    }
  }