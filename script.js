/* Задача 1:
Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка. */

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

/* ""Получение данных о пользователе""

Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

Подсказка, с последовательностью действий:
getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке. */

console.log(`Задача 3`);
const getUserData = async (url) => {
  const response = await fetch(url);
  if (response.status === 200) {
    const data = response.json();
    return data;
  } else {
    console.error(`Ошибка ${error}`);
  }
};

const userData = await getData(url);
const userId = Number(prompt("Введите id пользователя"));

let count = 0;
userData.forEach((element) => {
  if (element.id === userId) {
    console.log(`пользователь с id ${userId}`, element);
  } else {
    count++;
  }
});

if (count === userData.length) {
  console.log(`Нет пользователя с id ${userId}`);
}

/* ""Отправка данных на сервер""

Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.

*Подсказка * */

const saveUserData = async (url, user) => {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(user),
  });
  if (response.status === 200) {
    const data = response.json();
    return data;
  } else {
    console.error(`Ошибка ${error}`);
  }
};

// Пример использования функции
const user = {
  name: "John Smith",
  age: 30,
  email: "john@example.com",
};

saveUserData(url, user)
  .then(() => {
    console.log("User data saved successfully");
  })
  .catch((error) => {
    console.log(error.message);
  });

/* saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. Она отправляет POST-запрос на URL-адрес /users с указанием типа содержимого application/json и сериализует объект с данными о пользователе в JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 200), функция разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщени */

/* ""Изменение стиля элемента через заданное время""

Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента и время задержки (в миллисекундах) в качестве аргументов. Функция должна изменить стиль элемента через указанное время. */

const myElement = document.querySelector("#task3");

const changeStyleDelayed = (myElement) => {
  myElement.style.backgroundColor = "red";
};

setTimeout(() => {
  changeStyleDelayed(myElement);
}, 2000);

// Пример использования функции
//changeStyleDelayed(myElement, 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"
