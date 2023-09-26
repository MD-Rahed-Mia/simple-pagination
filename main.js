
let listItem = document.querySelectorAll("li");
const perPageLimit = 5;
const pageCount = Math.ceil(listItem.length / perPageLimit);
let buttonContainer =  document.querySelector(".pagination-button");
let currPage;
window.onload = () => {
  
createButton()
  setCurrPage(1)

}
const button = document.querySelectorAll("button");

console.log(listItem, pageCount);

const appendPageNumber = (index) => {
  let button = document.createElement("button");
  button.innerText = index;
  buttonContainer.appendChild(button);

}

const createButton = () => {
  
  for (let index = 1; index <= pageCount; index++) {
    appendPageNumber(index)
  }

  let button = document.querySelectorAll("button");

  button.forEach(element => {
    element.addEventListener("click", () => {


      setCurrPage(element.innerHTML)
      console.log(button);

    })
  });



}

const setCurrPage = (pageNum) => {
  currPage = pageNum;

  const prevRange = (currPage - 1) * perPageLimit;
  const currRange = perPageLimit * pageNum;

  listItem.forEach((item, index) => {
    item.style.display = "none";

    if (index >= prevRange && index < currRange) {
     item.style.display = '' ;
    }
  })
}

