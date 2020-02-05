function createCartList() {
        let $mainCart = $(".main__cart")
        let $ul = document.createElement("ul")
        $ul.classList.add("list");
        $mainCart.append($ul)
    ​
    
    ​
    
        let $btn = $(".btn")
        let arr = []
        for (let i = 0; i < $btn.length; i++) {
            let mybutton = $btn[i];
            let count = 0
            mybutton.addEventListener("click", function (e) {
                let productNamefont = $(".product__name__font")
                let productprice = $(".product__price")
                let productImg = $(".product__image")
    
                let $li = document.createElement("li")
                let $img = document.createElement("img")
                $ul.append($li)
    
    ​
    
                $li.innerHTML = ` ${productNamefont[i].innerHTML} ${productprice[i].innerHTML} ${$img.setAttribute("src", productImg[i].src)}`
                $li.append($img)
                arr.push(parseInt(productprice[i].innerHTML))
    
                function sum(arr) {
    
                    sum = 0
    
    ​
    
                    for (let i = 0; i < arr.length; i++) {
                        sum += arr[i]
                    }
                    return sum
                }
    
    ​
    
            });
    
    ​ }
}