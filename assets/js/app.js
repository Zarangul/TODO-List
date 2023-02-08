let input = document.getElementById("input-value");
let addButton = document.getElementById("add-btn");
let ul = document.getElementById("ul-box");

addButton.addEventListener("mouseover", () => {
  addButton.style.backgroundColor = "#080d9e";
});
addButton.addEventListener("mouseleave", () => {
  addButton.style.backgroundColor = "darkblue";
});

if (JSON.parse(localStorage.getItem("list")) === null) {
  localStorage.setItem("list", JSON.stringify([]));
}
let arr = JSON.parse(localStorage.getItem("list"));
console.log(arr);
addButton.addEventListener("click", () => {
  let arr = JSON.parse(localStorage.getItem("list"));
  let inValue = input.value.trim();
  if (inValue !== "") {
    let obj = { id: Math.random(), data: input.value };
    localStorage.setItem("list", JSON.stringify([...arr, obj]));
    let newArr = JSON.parse(localStorage.getItem("list"));
    ul.innerHTML = "";
    input.value = "";
    write(newArr);
  }else{
    alert('Please enter valid value');
  }
});

function write(listArr) {
  listArr.forEach((e) => {
    ul.innerHTML += `<li id="in-li">
        <span id="in-span-1">${e.data}</span> 
        <span id="in-span-2" onClick=deletedLi(${`'${e.id}'`})><i class="fa-sharp fa-solid fa-trash-can"></i></span>
    </li>`;
  });
}

function deletedLi(liValue) {
  let arr = JSON.parse(localStorage.getItem("list"));
  let filterArr = arr.filter((e) => e.id != `${liValue}`);
  localStorage.setItem("list", JSON.stringify(filterArr));
  ul.innerHTML = "";
  let newArr = JSON.parse(localStorage.getItem("list"));
  write(newArr);
}
