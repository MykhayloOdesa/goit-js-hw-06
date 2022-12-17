// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і натискає кнопку Створити,
// після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
// Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const controlsBox = document.querySelector("#controls");
const boxesView = document.querySelector("#boxes");
const createBoxesButton = document.querySelector("button[data-create]");
const destroyBoxesButton = document.querySelector("button[data-destroy]");

createBoxesButton.addEventListener("click", createBoxes);

function createBoxes(amount) {
  amount = Number(controlsBox.firstElementChild.value);

  let divBox = document.createElement("div");
  divBox.style.padding = "50px";
  let measures = 30;

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");

    div.style.width = measures + "px";
    div.style.height = measures + "px";
    div.style.backgroundColor = getRandomHexColor();
    divBox.appendChild(div);

    measures += 10;
  }

  boxesView.append(divBox);
}

destroyBoxesButton.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxesView.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
