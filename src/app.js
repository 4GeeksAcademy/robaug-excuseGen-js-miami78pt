import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  let who = ["The dog", "My grandma", "the mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying",
  ];
  const excuse = document.querySelector("#excuse");
  function randomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }
  let whoIndex = randomIndex(who);
  let actionIndex = randomIndex(action);
  let whatIndex = randomIndex(what);
  let whenIndex = randomIndex(when);

  excuse.innerHTML =
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex];

  console.log("Hello Rigo from the console!");
  console.log(
    who[whoIndex] +
      " " +
      action[actionIndex] +
      " " +
      what[whatIndex] +
      " " +
      when[whenIndex]
  );
  console.log(excuse.innerHTML);
};
