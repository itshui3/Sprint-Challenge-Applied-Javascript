// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function MakeCard(obj) {
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgCont = document.createElement("div");
  const img = document.createElement("img");
  const span = document.createElement("span");

  card.append(headline);
  card.append(author);

  author.append(imgCont);
  author.append(span);

  imgCont.append(img);

  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgCont.classList.add("img-container");

  headline.textContent = obj.headline;
  img.src = obj.authorPhoto;
  span.textContent = `By ${obj.authorName}`;

  return card;
}

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then( response => {
  console.log(response.data.articles);
  console.log(response.data.articles.bootstrap);
  // response.data.articles.bootstrap.forEach( elem => {
  //   console.log(elem);
  // }); // this works, 'nuff said
  const articles = response.data.articles;
  const articleKeys = Object.keys(articles);
  console.log(articleKeys);
  articleKeys.forEach( (elem) => {
    console.log(articles[elem]);
    articles[elem].forEach( (elem) => {
      document.querySelector(".cards-container").append(MakeCard(elem));
    });
  });

})
  .catch( error => {
    console.log(`Something wrong occurred: ${error}`);
  });

