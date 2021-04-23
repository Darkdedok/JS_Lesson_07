//- Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".
/* let button = document.getElementById('button');
button.onclick = () => {
  let text = document.getElementById('text');
  text.remove();
} */

//- Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.
/* let secButton = document.getElementById('secButton');
secButton.onclick = () => {
  secButton.remove();
}  */

//- Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача
/* 
let check = document.forms.form.checkAge;
let ageValue = document.forms.form.inputAge;
check.onclick = () => {ageValue.value < 18 ? alert('Too young'):alert('Welcome');} */

//- Створіть меню, яке розгортається/згортається при клику
/* let hideButton = document.forms.form.menuButton;
let text = document.getElementById('blue');
hideButton.onclick = () => { text.style.display === 'none' ? text.style.display = 'block' : text.style.display = 'none'} */

//- Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//Вивести список коментарів в документ, кожний в своєму блоці.
//Додайте кожному коментарю по кнопці для згортання його body.
/* 
const comments = [{
    title: 'Name',
    body: 'Some words'
  },
  {
    title: 'Name',
    body: 'Some words'
  },
  {
    title: 'Name',
    body: 'Some words'
  },
  {
    title: 'Name',
    body: 'Some words'
  },
  {
    title: 'Name',
    body: 'Some words'
  }
];

for (div of comments) {
  const button = document.createElement('button');
  const block = document.createElement('div');
  const massage = document.createElement('hr');
  const title = document.createElement('p');
  const body = document.createElement('h2');
  body.innerHTML = div.body;
  title.innerHTML = div.title;
  button.innerHTML = `Click on me`;
  massage.appendChild(title);
  massage.appendChild(body);
  block.appendChild(massage);
  block.appendChild(button);
  document.body.appendChild(block);
  button.onclick = function () {
    body.classList.toggle('hide');
  }
} */

//- Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
//    Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
//   Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
/* let input1 = document.createElement('input');
input1.name = 'inputs'
let input2 = document.createElement('input');
input2.name = 'inputs'
let input3 = document.createElement('input');
input3.name = 'inputs'
let input4 = document.createElement('input');
input4.name = 'inputs'
let button = document.createElement('button');
button.name = 'button';
button.innerText = 'OK';
let form1 = document.createElement('form');
let form2 = document.createElement('form');
button.onclick = ev => {
  let form = document.forms;
  for (const formElement of form) {
    for (const formElementElement of formElement) {
      console.log(formElementElement.value);
    }
  }
}
form1.appendChild(input1);
form1.appendChild(input2);
form2.appendChild(input3);
form2.appendChild(input4);
document.body.appendChild(form1);
document.body.appendChild(form2);
document.body.appendChild(button); */

//- Створити функцію, яка генерує таблицю.
//Перший аргумент визначає кількість строк.
//Другий параметр визначає кількість ячейок в кожній строці.
//Третій параметр визначає елемент в який потрібно таблицю додати.
/*  function createTable(str, rad, tagName) {
 	let tagOfTablet = document.createElement(tagName);
 	let table = document.createElement('table');
 	for (let i = 0; i < str; i++) {
 		let tr = document.createElement('tr');
 		for (let j = 0; j < rad; j++) {
 			let td = document.createElement('td');
 			tr.appendChild(td)
 		td.innerHTML= 'text'
 		}
 		table.appendChild(tr)
 	}
 	tagOfTablet.appendChild(table)
 	document.body.appendChild(tagOfTablet);
 }
 createTable(9,6,'div') */

//- Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.
/* const setOfImg = [{
  image: 'img1',
  url: 'https://www.w3schools.com/howto/img_nature_wide.jpg'
}, {
  image: 'img2',
  url: 'https://www.w3schools.com/howto/img_snow_wide.jpg'
}, {
  image: 'img3',
  url: 'https://www.w3schools.com/howto/img_lights_wide.jpg'
}, {
  image: 'img3',
  url: 'https://www.w3schools.com/howto/img_mountains_wide.jpg'
}];
const leftButton = document.createElement('button');
const rightButton = document.createElement('button');
const mainDiv = document.createElement('div');
let index = 0;
const image = new Image();
leftButton.innerText = 'Left';
rightButton.innerText = 'Right';
image.src = setOfImg[index].url;
leftButton.onclick = () => {
  if (index === 0) {
    index = setOfImg.length - 1;
    image.src = setOfImg[index].url;
    return index = setOfImg.length - 1;
  } else {
    index--;
    image.src = setOfImg[index].url;
  }
};
rightButton.onclick = () => {
  if (index >= 0 && index < setOfImg.length - 1) {
    index++;
    image.src = setOfImg[index].url;
    return index;
  } else {
    index = 0;
    image.src = setOfImg[index].url;
  }
};
mainDiv.appendChild(leftButton);
mainDiv.appendChild(image);
mainDiv.appendChild(rightButton);
document.body.appendChild(mainDiv); */

//- Сворити масив нецензцрних слів.
//    Сворити інпут текстового типу.
//    Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
//    Перевірку робити при натисканні на кнопку
/* 
const arr = ['Бля', 'Сука', 'Блядь'];
const button = document.createElement('button');
const inputLine = document.createElement('input');
button.innerText = 'Check';
document.body.appendChild(inputLine);
document.body.appendChild(button);
button.onclick = () => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase() === inputLine.value.toLowerCase()) {
      alert('bad word detected')
      return ;
    }
  }
} */

//    Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
const arr = ['Бля', 'Сука', 'Блядь'];
const button = document.createElement('button');
const inputLine = document.createElement('input');
button.innerText = 'Check';
document.body.appendChild(inputLine);
document.body.appendChild(button);
button.onclick = () => {
  for (let i = 0; i < arr.length; i++) {
    let text = inputLine.value.toLowerCase();
    if (text.includes(arr[i].toLowerCase())) {
      return alert('Bad word detected');
    }
  // return console.log('allright');
  }
}
/* for (let x = 0; x < inputLine; x++){
     if (x.toLowerCase) {
      alert('bad word detected')
      return ;
    }
    console.log(inputLine.value);
    } 
}} */

//-- Створити скрипт, котрий бере зчитує на сторінці (rules.html) текст і робить збоку меню-зміст по всіх заголовках які є в тексті.
//    При кліку на пункт заголовку ви маєте відправлятись  до цього пункту в тексті
/* 
const mainDiv = document.createElement('div');
const list = document.createElement('ul');
const titles = document.getElementsByTagName('h2');
for (let i = 0; i < titles.length; i++) {
  const point = document.createElement('li');
  const test = document.createElement('a');
  titles[i].id = `href${i}`;
  test.href = `#href${i}`;
  test.innerHTML = `${titles[i].innerHTML}`
  point.appendChild(test);
  list.appendChild(point);
}
mainDiv.appendChild(list);
const body = document.getElementsByTagName('body');
const content = document.getElementById('content');
mainDiv.style.justifyContent = 'flex-end';
body[0].style.display = 'flex';
content.style.display = 'flex';
content.style.flexDirection = 'column';
content.style.justifyContent = 'flex-start';
content.style.width ='80%';
document.body.appendChild(mainDiv); */

/* //-- Взяти масив юзерів
const usersWithAddress = [
  {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
  {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
  {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
  {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
  {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
  {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
  {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
  {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
  {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
  {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
  {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];
//Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву. Фільтри можуть працювати як разом так і окремо.
//1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
//2й - залишає старших 29 років включно
//3й - залишає тих в кого місто Київ
//Дані виводить в документ
const table = document.createElement('table');
let td = document.createElement('td');
for (let info of usersWithAddress){
  let tr = document.createElement('tr');
  tr.style.display = 'block';
  td.appendChild(tr);
  table.appendChild(td);
  tr.innerHTML = `| id: ${info.id} | name: ${info.name} | age: ${info.age} | is married: ${info.isMarried ? 'yes':'no'} | address: city: ${info.address.city} | street: ${info.address.street} | number: ${info.address.number} |`;
info.isMarried ? (tr.classList.add('isMarried')) : tr.classList.add('isntMarried');
info.age >= 29 ? (tr.classList.add('olerThen29')) : tr.classList.add('youngerThen29');
info.address.city === 'Kyiv' ? (tr.classList.add('liveInKyiv')) : tr.classList.add('dontLiveInKyiv');
}
document.body.appendChild(table);
const firstFilter = document.createElement('input');
const secondFilter = document.createElement('input');
const thirdFilter = document.createElement('input');
const checkboxes = document.getElementsByTagName('input')
const youngerThen29 = document.getElementsByClassName('youngerThen29');
const isMarried = document.getElementsByClassName('isMarried');
const dontLiveInKyiv = document.getElementsByClassName('dontLiveInKyiv');
const text1 = document.createElement('p'); text1.innerText = 'Dont married';
const text2 = document.createElement('p'); text2.innerText = 'Older then 28';
const text3 = document.createElement('p'); text3.innerText = 'Live  in Kyiv';
const mainDiv = document.createElement('div');
const firstDiv = document.createElement('div');
const secondDiv = document.createElement('div');
const thirdDiv = document.createElement('div');
firstDiv.appendChild(text1); firstDiv.appendChild(firstFilter);
secondDiv.appendChild(text2); secondDiv.appendChild(secondFilter);
thirdDiv.appendChild(text3); thirdDiv.appendChild(thirdFilter);
mainDiv.style.display = 'flex';
mainDiv.style.flexDirection = 'row';
firstDiv.style.margin = '20px';
secondDiv.style.margin = '20px';
thirdDiv.style.margin = '20px';
mainDiv.appendChild(firstDiv);
mainDiv.appendChild(secondDiv);
mainDiv.appendChild(thirdDiv);
document.body.appendChild(mainDiv);
for (let a = 0; a < checkboxes.length; a++){
  checkboxes[a].type = 'checkbox';
  }
  firstFilter.addEventListener ('change', (event) => {
    if(event.currentTarget.checked) { for (let a of isMarried){a.style.display = 'none';} } else { for (let a of isMarried){a.style.display = 'block';};}
  })
  secondFilter.addEventListener ('change', (event) => {
    if(event.currentTarget.checked) { for (let a of youngerThen29){a.style.display = 'none';} } else { for (let a of youngerThen29){a.style.display = 'block';};}
  })
  thirdFilter.addEventListener ('change', (event) => {
    if(event.currentTarget.checked) { for (let a of dontLiveInKyiv){a.style.display = 'none';} } else { for (let a of dontLiveInKyiv){a.style.display = 'block';};}
  }) */