// Функция динамического времени

var timeElement = document.getElementById('currentTime');
setInterval(function () {
  var currentTime = new Date();
  timeElement.textContent = currentTime.toLocaleTimeString();
}, 1000);

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let author = document.querySelector('.author');

let phrases = [
  {
    text: 'Успех - это идти от неудачи к неудаче, не теряя энтузиазма.',
    author: 'Уинстон Черчилль',
  },
  {
    text: 'Не считай дни, извлекай из них пользу.',
    author: 'Мухаммед Али',
  },
  {
    text: 'Неисследованная жизнь не стоит того, чтобы ее жить.',
    author: 'Сократ',
  },
  {
    text: 'Усердно работайте, мечтайте по-крупному.',
    author: '',
  },
  {
    text: 'Я не потерпел неудачу. Я просто нашел 10 000 способов, которые не работают.',
    author: 'Томас Эдисон',
  },
  {
    text: 'Мотивация - это то, что заставляет вас начать. Привычка - это то, что заставляет вас продолжать.',
    author: 'Джим Рюн',
  },
  {
    text: 'Вы должны выучить правила игры. А затем вы должны играть лучше, чем кто-либо другой.',
    author: 'Альберт Эйнштейн',
  },
  // {
  //   text: '',
  //   author: '',
  // },
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, 'textContent', randomElement.text);
  smoothly(author, 'textContent', randomElement.author);

  // if (randomElement.text.length > 40) {
  //   advice.style.fontSize = '33px';
  // } else {
  //   advice.style.fontSize = '42px';
  // }
});

for (let i = 0; i <= 2; i = i + 1) {
  smoothly(phrase, 'textContent', phrases[i].text);
  smoothly(author, 'textContent', phrases[i].author);
}
