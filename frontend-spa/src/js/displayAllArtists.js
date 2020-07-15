export {
    displayAllArtists
}

import {
  fetchArtists
}from "./fetchArtists.js"

const displayAllArtists = (milesUl, artists) => {
  clearElementChildren(milesUl);
  for (let i = 0; i < artists.length; i++) {
    const liSection = document.createElement("li");
    const aSection = document.createElement("a");
    aSection.href = "./artist-template.html"
    liSection.classList.add('artist');
    aSection.innerHTML = `
    
    <p>${artists[i].name}</p>
    
    `;
    liSection.append(aSection);
    let img = new Image;
    img.src = artists[i].imageSource;
    img.classList.add('artist-art');
    aSection.append(img);
    milesUl.append(liSection);
  };
}
const clearElementChildren = element => {
  while (element.firstChild) {
    element.firstChild.remove();
  }
}
    // mainSection.classList.add('artists');
    // mainSection.innerHTML = 
    // `
    // <container class="all-artists-container">
    //   <ul id = all-artists-ul> 
    //   <li>
    //   <a href="./artist-template.html">
    //      <p>Naruto Artist</p>
    //      <img class="artist-art" src="src/images/naruto-artist.jpg" />
    //    </a> 
    //  </li>
    //  <li>
    //    <a href="./artist-template.html">
    //      <p>DeathNote Artist</p>
    //      <img class="artist-art" src="src/images/deathnote-artist.jpg" />
    //    </a>
    //  </li>
    //  <li>
    //    <a href="./artist-template.html">
    //      <p>Darling in the Franxx Artist</p>
    //      <img class="artist-art" src="src/images/darling-artist.jpg" />
    //    </a>
    //  </li>
    //  <li>
    //    <a href="./artist-template.html">
    //      <p>Cowboy Bebop Artist</p>
    //      <img class="artist-art" src="src/images/cowboy-artist.jpg" />
    //    </a>
    //  </li>
     
    // </ul>

    // </container>
    // `
    // const allArtistsUl = document.querySelector ('#all-artists-ul')
    // const li = document.createElement ('li')
    
    // function appendArtist(){
    //   for (i=0; i<fetchArtists.length; i++){
    //     let oneArtist =  json[i]
    //     let createdArtist = createArtist(oneArtist)
    //     allArtistsUl.appendChild(createdArtist)
    //   }
    // }

    // function createArtist(oneArtist){
    //   li.textContent =  naruto
 
    //     // <a href="./artist-template.html">
    //     //  <p>${oneArtist.name}</p>
    //     //  <img class="artist-art" src= "${oneArtist.imageSource}" />
    //     // </a>
         
    //     return li
    // }

    // return mainSection

const milesUl = document.createElement("ul");
milesUl.classList.add("milesUl");
const allArtistsContainer = document.querySelector(".all-artists-container");
allArtistsContainer.append(milesUl)
fetchArtists()
.then(artists => {
  console.log(artists);
  displayAllArtists(milesUl, artists)
})
