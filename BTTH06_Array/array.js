// Thêm phần tử

let createButton = document.querySelector(".create-button");
let array = document.querySelector("#array");
let sortedArray = document.querySelector("#sorted-array");
let increaseSort = document.querySelector("#increase-sort");
let decreaseSort = document.querySelector("#decrease-sort");
let index = document.querySelector("#add-index");
let value = document.querySelector("#add-value");
let isValid = document.querySelector("#isValid");
let addButton = document.querySelector(".add-button");
let arrayHTML = [];

let sortArray = () => {
  let copyArrayHTML = [...arrayHTML];
  if (increaseSort.checked)
    sortedArray.value = copyArrayHTML.sort((a, b) => a - b).join(", ");
  if (decreaseSort.checked)
    sortedArray.value = copyArrayHTML.sort((a, b) => b - a).join(", ");
};

// Tạo dãy ngẫu nhiên

createButton.addEventListener("click", (e) => {
  arrayHTML = [];
  let randomLength = Math.floor(Math.random() * 11) + 10;
  for (let i = 0; i < randomLength; i++) {
    arrayHTML.push(Math.floor(Math.random() * 91) + 10);
  }
  array.innerHTML = arrayHTML.join(", ");
  sortArray();
});

// Sắp xếp

increaseSort.addEventListener("change", (e) => {          //tăng dần
  let copyArrayHTML = [...arrayHTML];                     
  sortedArray.value = copyArrayHTML.sort((a, b) => a - b).join(", ");
});
decreaseSort.addEventListener("change", (e) => {          //giảm dần
  let copyArrayHTML = [...arrayHTML];
  sortedArray.value = copyArrayHTML.sort((a, b) => b - a).join(", ");
});

// Thêm số

addButton.addEventListener("click", (e) => {
  let arrayIndex = index.value;
  let arrayValue = value.value;
  if (arrayIndex == "" || arrayValue == "") {
    isValid.style.color = "red";
    isValid.textContent = "Nhập vị trí và giá trị cần thêm!";
  } else if (isNaN(arrayIndex) || isNaN(arrayValue) || arrayIndex <= 0 || arrayValue < 10 || arrayValue > 100) {
    isValid.style.color = "red";
    isValid.textContent = "Giá trị không hợp lệ!";
  } else {
    if (arrayHTML.length === 20) arrayHTML.pop();
    if (arrayIndex > arrayHTML.length + 1) {
      arrayIndex = arrayHTML.length + 1;
      isValid.style.color = "#0c0ea6";
      isValid.textContent = `Vị trí bạn nhập vượt quá độ dài của mảng. Tự động thêm giá trị vào cuối.`;
    } else {
      isValid.style.color = "green";
      isValid.textContent = `Thêm thành công ${arrayValue} vào vị trí ${arrayIndex}.`;
    }
    arrayHTML.splice(arrayIndex - 1, 0, arrayValue);
    array.innerHTML = arrayHTML.join(", ");
    sortArray();
  }
});