const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = [];

function add() {
  const name = priceElement.value.split(',')[0];
  const price = parseInt(priceElement.value.split(',')[1]);
  const number = parseInt(numberElement.value);
  let purchase = {
    name: name,
    price: price,
    number: number,
  };
  purchases.push(purchase);
  window.alert(`${display()}\nsubtotal${subtotal()}Naira`);
}

function display() {
  let string = "";
  for (let i = 0; i < purchases.length; i++) {
    string += `${purchases[i].name} ${purchases[i].price}Naira But${purchases[i].number}point\n`;
  }
  return string;
}

function subtotal() {
  let sum = 0;
  for (let i = 0; i < purchases.length; i++) {
    sum += purchases[i].price * purchases[i].number;
  }
  return sum;
}

function calc() {
  const sum = subtotal();
  const postage = calcPostageFromPurchase(sum);
  window.alert(`${display()}\n Subtotal is${sum}Naira、Shipping fee are${postage}Naira. The total is${sum + postage}Naira.`);
  purchases = [];
  priceElement.value = "";
  numberElement.value = "";
}

function calcPostageFromPurchase(sum) {
  if (sum == 0 || sum >= 3000) {
    return 0;
  } else if (sum < 2000) {
    return 500;
  } else {
    return 250;
  }
}