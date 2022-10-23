import { getQuote, getAuthor } from './quoteFunctions.js'
import { getColor } from './bgColors.js'

const text = document.body.querySelector("#quote");
const author = document.body.querySelector("#author");
const quoteButton = document.body.querySelector("#getQuote");

// First time load
text.innerHTML = getQuote();
author.innerHTML = "- " + getAuthor();
document.body.style.backgroundColor = getColor();
quoteButton.style.backgroundColor = document.body.style.backgroundColor;

quoteButton.addEventListener("click", () => {
  document.body.style.backgroundColor = getColor();
  quoteButton.style.backgroundColor = document.body.style.backgroundColor;
  text.innerHTML = getQuote();
  author.innerHTML = "- " + getAuthor();
});

