/* Задача 1:
Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка. */

console.log(`Задача 1`);

const url = "https://jsonplaceholder.typicode.com/users";

const getData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Ошибка ${error}`);
  }
};

const resultData = await getData(url);

const containerEl = document.querySelector("div.container");

resultData.forEach((element) => {
  containerEl.insertAdjacentHTML(
    "beforeend",
    `
        <div class="container__block">
        <h1> Имя ${element.name}</h1>
        <h2>Логин ${element.username}</h2>
        <h2>E-mail ${element.email}</h2>
        <button class="container__block_btn">Удалить Пользователя</button>
        </div>
    `
  );
});

const btnEls = document.querySelectorAll("button.container__block_btn");

btnEls.forEach((element) => {
  element.addEventListener("click", () => {
    element.parentNode.parentNode.removeChild(element.parentNode);
  });
});

/* Задача 2:
Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды. */

const urlDog = "https://dog.ceo/api/breeds/image/random";

const dogContainerEl = document.querySelector("div.dogContainer");

let i = 0;
let id = setInterval(async () => {
  i++;
  if (i === 11) {
    clearInterval(id);
  } else {
    let resultDataDog = await getData(urlDog);
    dogContainerEl.insertAdjacentHTML(
      "beforeend",
    `
        <img class="container__block" src="${resultDataDog.message}" alt="dogImg"></img>
    `
    );
  }
}, 1000);


