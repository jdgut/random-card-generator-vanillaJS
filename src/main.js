/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  loadCards();
};

const loadCards = () => {
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const suits = ["hearts", "diamonds", "spades", "clubs"];
  const icons = ["\u2665", "\u25ca", "\u2660", "\u2663"];
  const randValue = Math.floor(Math.random() * values.length);
  const suitsClass = Math.floor(Math.random() * suits.length);
  document.getElementById("content").innerHTML = values[randValue];
  document.querySelectorAll(".suit").forEach(e => {
    e.innerHTML = icons[suitsClass];
    e.className = `${suits[suitsClass]}`;
  });
};
