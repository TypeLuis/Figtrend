const inputEl = document.getElementById("check");
const cards = document.getElementsByClassName("card");

// Event Listener that changes card element price
inputEl.addEventListener("change", (e) => {
  if (e.target.checked === true) {
    for (let card of cards) {
      const variables = returnVariables(card);
      variables.moneyEl.innerHTML = `$${variables.money * 12 * 0.9}`;
      variables.timeEl.innerHTML = "Year";
    }
  }
  if (e.target.checked === false) {
    for (let card of cards) {
      const variables = returnVariables(card);
      variables.moneyEl.innerHTML = `$${Math.ceil(variables.money / 12 / 0.9)}`;
      variables.timeEl.innerHTML = "Month";
    }
  }
});

// Function that returns variables inside an object
const returnVariables = (card) => {
  const moneyEl = card.children[0].children[1].children[0].children[0];
  const money = parseInt(moneyEl.textContent.split("$")[1]);
  const timeEl = card.children[0].children[1].children[0].children[1];

  return {
    money: money,
    moneyEl: moneyEl,
    timeEl: timeEl
  };
};

// allows buttons to use the ":active" when element is pressed
// https://blog.tomoyukikashiro.me/post/how-to-set-active-style-to-button-in-mobile
window.onload = function () {
  if (/iP(hone|ad)/.test(window.navigator.userAgent)) {
    document.body.addEventListener("touchstart", function () {}, false);
  }
};

// burger event
const burger = document.getElementsByClassName("nav-burger")[0];
const menu = document.getElementsByClassName("burger-menu")[0];

burger.addEventListener("click", (e) => {
  if (menu.style.display === "") menu.style.display = "block";
  else if (menu.style.display === "block") menu.style.display = "";
});

window.onclick = function (event) {
  if (event.target == menu) {
    menu.style.display = "";
    burger.classList.toggle("opened");
  }
};
