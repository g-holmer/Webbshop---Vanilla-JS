$(document).ready(function() {
  //fetch api
  const url = "products.json"
  $.getJSON(url, function(response) {
    let prodItems = []
    response.forEach(car => {
      prodItems.push(car)
    })

    //create HTML structure
    for (let i = 1; i <= prodItems.length; i++) {
      const productsWrapper = document.querySelector(".products__wrapper")
      const mainProduct = document.createElement("div")
      mainProduct.className = "products " + "product-" + i
      productsWrapper.appendChild(mainProduct)

      //IMG
      const imageWrapper = document.createElement("div")
      imageWrapper.className = "image__div"
      mainProduct.appendChild(imageWrapper)

      const imgElement = document.createElement("img")
      imageWrapper.appendChild(imgElement)
      imgElement.src = ""

      imgElement.className = "product__image"

      //Product Name
      const prodNameWrapper = document.createElement("div")
      const prodNameFont = document.createElement("h4")
      prodNameWrapper.className = "product__name"
      prodNameFont.className = "product__name__font"
      mainProduct.appendChild(prodNameWrapper)
      prodNameWrapper.appendChild(prodNameFont)

      //input btns
      const inputBtnWrapper = document.createElement("div")
      inputBtnWrapper.className = "input__buttons-wrapper"
      mainProduct.appendChild(inputBtnWrapper)

      const selectTag = document.createElement("select")
      inputBtnWrapper.appendChild(selectTag)

      const option = document.createElement("option")
      selectTag.appendChild(option)
      option.value = "1"

      //Product price
      const prodPriceWrapper = document.createElement("span")
      prodPriceWrapper.className = "product__price"
      mainProduct.appendChild(prodPriceWrapper)

      //button
      const btn = document.createElement("button")
      btn.className = "btn"
      btn.textContent = "Add to cart"
      mainProduct.appendChild(btn)
    }

    //  FILL CONTENT FROM API
    const imageDiv = document.querySelectorAll(".product__image")
    const nameDiv = document.querySelectorAll(".product__name__font")
    const priceDiv = document.querySelectorAll(".product__price")

    //FILL NAMES
    for (let i = 0; i < prodItems.length; i++) {
      for (let i = 0; i < nameDiv.length; i++) {
        nameDiv[i].textContent = prodItems[i].name
      }
    

    //FILL PRICES

      for (let i = 0; i < priceDiv.length; i++) {
        priceDiv[i].textContent = prodItems[i].price
      }

    //FILL IMAGES

      for (let i = 0; i < imageDiv.length; i++) {
        imageDiv[i].src = prodItems[i].image
      }
    }
  })
})
