function createCartList() {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach(button => {
    button.addEventListener("click", function(evt) {
      const getName = button.parentElement.previousSibling.firstChild.firstChild.textContent
      const getImg = button.parentElement.parentElement.previousSibling.firstChild.src
      const getPrice = button.previousSibling.firstChild.textContent
      const getAmount = button.previousSibling.previousSibling.firstChild.value
      
      console.log(getName, getImg, getPrice, getAmount);
      
    });
  });
}
