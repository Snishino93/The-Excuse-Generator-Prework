/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["the dog", "my granma", "his turtle", "my bird"];
let what = ["eat", "pissed", "crushed", "broked"];
let when = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function getExcuse() {
  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];
  return (
    "Sorry, I can't make it to the meeting today because " +
    randomWho +
    " " +
    randomWhat +
    " my homework " +
    randomWhen +
    "."
  );
}

window.onload = function() {
  document.getElementById("excuse").innerHTML = getExcuse();
};
