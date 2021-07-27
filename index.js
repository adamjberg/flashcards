const cards = [
  {
    "front": "crow",
    "back": "врана"
  },
  {
    "front": "grandpa",
    "back": "дядо"
  },
  {
    "front": "uncle",
    "back": "чичо"
  },
  {
    "front": "house",
    "back": "мамо"
  },
  {
    "front": "home",
    "back": "татко"
  },
  {
    "front": "highway",
    "back": "магистрала"
  },
  {
    "front": "car",
    "back": "кола"
  },
  {
    "front": "something",
    "back": "нещо"
  },
  {
    "front": "gas station",
    "back": "бензиностанция"
  },
  {
    "front": "tea",
    "back": "чай"
  },
  {
    "front": "chocolate bar",
    "back": "шоколадова лента"
  },
  {
    "front": "melted",
    "back": "разтолен"
  },
  {
    "front": "tree",
    "back": "дърво"
  },
  {
    "front": "tire",
    "back": "гума"
  },
  {
    "front": "flower",
    "back": "цвете"
  },
  {
    "front": "warm",
    "back": "топло"
  },
  {
    "front": "sad",
    "back": "тъжно"
  },
  {
    "front": "forest",
    "back": "гора"
  },
  {
    "front": "deer",
    "back": "елен"
  },
  {
    "front": "white",
    "back": "бял"
  },
  {
    "front": "blue",
    "back": "син"
  },
  {
    "front": "brown",
    "back": "кафяв"
  },
  {
    "front": "red",
    "back": "червен"
  },
  {
    "front": "grey",
    "back": "сив"
  },
  {
    "front": "green",
    "back": "зелен"
  },
  {
    "front": "orange",
    "back": "оранжев"
  },
  {
    "front": "yellow",
    "back": "жълт"
  },
  {
    "front": "black",
    "back": "черен"
  },
  {
    "front": "monday",
    "back": "понеделник"
  },
  {
    "front": "tuesday",
    "back": "вторник"
  },
  {
    "front": "wednesday",
    "back": "сряда"
  },
  {
    "front": "thursday",
    "back": "четвъртък"
  },
  {
    "front": "friday",
    "back": "петък"
  },
  {
    "front": "saturday",
    "back": "събота"
  },
  {
    "front": "sunday",
    "back": "неделя"
  },
  {
    "front": "breakfast",
    "back": "закуска"
  },
  {
    "front": "lunch",
    "back": "обяд"
  },
  {
    "front": "dinner",
    "back": "вечеря"
  }
];

document.addEventListener("DOMContentLoaded", function () {
  let currentCardIndex = 0;
  let currentCard = cards[currentCardIndex];

  const showBtn = document.getElementById("show");
  const front = document.getElementById("front");
  const back = document.getElementById("back");

  showBtn.addEventListener("click", function () {
    showBack();
  });

  const stages = document.getElementsByClassName("stage");

  for (let i = 0; i < stages.length; i++) {
    let stage = stages[i];
    stage.addEventListener("click", function (e) {
      nextCard();
    });
  }

  function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % cards.length;
    currentCard = cards[currentCardIndex];
    updateCards();
    hideBack();
  }

  function updateCards() {
    front.innerText = currentCard.front;
    back.innerText = currentCard.back;
  }

  function showBack() {
    back.removeAttribute("class");
  }

  function hideBack() {
    back.setAttribute("class", "hidden");
  }
});