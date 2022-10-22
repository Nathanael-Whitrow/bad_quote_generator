import { quotes } from './quotes.js'

const authorList = [...new Set(quotes.map(x => Object.values(x)[0]))];
const quoteList = quotes.map(x => Object.keys(x)[0]);

export function getQuote() {
  const index = Math.floor(Math.random() * quoteList.length);
  return quoteList[index];
}

export function getAuthor() {
  const index = Math.floor(Math.random() * authorList.length);
  return authorList[index];
}