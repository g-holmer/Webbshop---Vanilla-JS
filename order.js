createOrderStructure();
function createOrderStructure() {  
    let getArray = JSON.parse(localStorage.getItem("myObject"));
    let dateToday = new Date().toLocaleDateString()
    const randomID =  Math.random().toString(36).substring(2, 5) + Math.random().toString(36).substring(2, 5);
    const date = document.querySelector('.order-confirmation__summary__date')
    const randomString = document.querySelector('.order-confirmation__h3')
    date.textContent = dateToday;
    randomString.textContent = 'Order: #' + randomID.toUpperCase()
  for (let i = 0; i < getArray.length; i++) {
    let prod = document.querySelector(".confirmation__items");
    prod.innerHTML += `<div class="confirmation__info product-12" id="12">
    <div class="confirmation__info__img">
      <img
        class="product_info_image"
        src=""
      />
    </div>
    <div class="confirmation__info__productname"></div>
    <div class="confirmation__info__sum"></div>
    <div class="confirmation__info__qty">
      <span class="confirmation__info__qty__output"></span>
    </div>
  </div>`;
  
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
