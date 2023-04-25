  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

import axios, { Axios } from "axios";
import { response } from "msw";

const Card = (article) => {
  const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
  const headlineDiv = document.createElement('div');
    headlineDiv.classList.add('headline');
    headlineDiv.textContent = article.headline;
    cardDiv.appendChild(headlineDiv);
  const authorDiv = document.createElement('div');
    authorDiv.classList.add('author');
    cardDiv.appendChild(authorDiv);
  const imgDiv = document.createElement('div');
    imgDiv.classList.add('img-container');
    authorDiv.appendChild(imgDiv);
  const imgTag = document.createElement('img');
    imgTag.src = article.authorPhoto;
    imgDiv.appendChild(imgTag);
  const spanTag = document.createElement('span');
    spanTag.textContent = `By ${article.authorName}`;
    authorDiv.appendChild(spanTag);

  return cardDiv;
}



const cardAppender = (selector) => {
  axios.get(`http://localhost:5001/api/articles`)
    .then(response => {
      console.log(response);
      const articlesObj = Object.values(response.data.articles);
      articlesObj.forEach(arr => {
        for(let i = 0; i < arr.length; i++){
          document.querySelector(selector).appendChild(Card(i));
        }
       
      })
    })
    .catch(err => {
      console.log(err);
    })
}
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //


export { Card, cardAppender }
