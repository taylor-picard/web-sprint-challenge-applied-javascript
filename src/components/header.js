const Header = (title, date, temp) => {
  const headDivTag = document.createElement('div');
    headDivTag.classList.add('header');
  const dateSpanTag = document.createElement('span');
    dateSpanTag.classList.add('date');
    dateSpanTag.textContent = date;
    headDivTag.appendChild(dateSpanTag);
  const titleH1Tag = document.createElement('h1');
    titleH1Tag.textContent = title;
    headDivTag.appendChild(titleH1Tag);
  const tempSpanTag = document.createElement('span');
    tempSpanTag.classList.add('temp');
    tempSpanTag.textContent = temp;
    headDivTag.appendChild(tempSpanTag);
  
  return headDivTag;
}  
// TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The html tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //


const headerAppender = (selector) => {
  const selElem = document.querySelector(selector);
  const newHeader = Header('Bloomtech', '4/24/23', '73');
  selElem.appendChild(newHeader);
}
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  // HINT: querySelector can take in a string (ie querySelector("#wrapper")) 
  // but it can also take in a variable (ie querySelector(selector))
  // We are taking care of passing in the correct selector on line 16,
  // so all that you need to do is pass it into the querySelector method
  // for the tests to work!


export { Header, headerAppender }
