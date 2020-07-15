//START AT LINE 92

export {
    displayAllArtists
}

import {
  fetchArtists
}from "./fetchArtists.js"

const displayAllArtists = (milesUl, artists) => { 
  clearElementChildren(milesUl); //this function is defined on line 31.
  for (let i = 0; i < artists.length; i++) { //we loop through our array of JSON objects that the API gave us. 
    const liSection = document.createElement("li"); //we create an <li> and call it liSection
    const aSection = document.createElement("a"); //we create an <a> and call it aSection
    aSection.href = "./artist-template.html" //we give the <a> an href, AKA a source to link to. I used our static website cause it was easiest.
    liSection.classList.add('artist'); //we give our <li> a class name of 'artist'. I think this has to do with the CSS but I didn't actually check. 
    aSection.innerHTML = ` 
    
    <p>${artists[i].name}</p>
    
    `;
     //inside the <a> called aSection, we define the html inside the <a> tag. <a>innerHTML GOES HERE</a>. 
    //we put the artist name in a p tag. We are getting the artist name by iterating through an array called artists we got from fetchArtists/our API.  
    //${arrayName[i].pojoVariableName} is the syntax for how to grab information from a JSON file while defining innerHTML.

   
    let img = new Image; //we also want there to be our artist image! this states that an img variable is going to exist.
    img.src = artists[i].imageSource; //the src link for that image will come from our JSON object.
    // Since we aren't inside an innerHTML tag, we don't need the ${} to get information from our JSON object.
    img.classList.add('artist-art'); //we give our image its class name so that our CSS remembers the formatting.
    aSection.append(img); //we add our newly created image into our <a> tag so that the image is also a link.

    liSection.append(aSection); //we add our <a> tag into our <li> tag. 
    milesUl.append(liSection); //we add our <li> tag to our <ul> tag.
  };
}

const clearElementChildren = element => { 
  //this bit is taken from bens code. As long as there is an HTML element inside the element this function is given
  //it will keep removing elements. Once there is no firstChild inside the element (aka there are no children at all)
  //it will stop running. 
  while (element.firstChild) {
    element.firstChild.remove();
  }
}

const milesUl = document.createElement("ul"); //WE START HERE FOR SOME REASON. 
//Making the <ul> element we will populate with artists.
milesUl.classList.add("milesUl"); //I named it after myself, now the html element we created on line 94 has the same class name as our javascript constant.
const allArtistsContainer = document.querySelector(".all-artists-container"); 
//telling javascript that the container in the index called all-artists-container exists, and defining it by the name allArtistsContainer.
allArtistsContainer.append(milesUl) //now we have added the <ul> we made to the container we defined above. 
fetchArtists() //we call our api.
.then(artists => { //this is the promise stuff I don't understand as well, but if we call the displayAllArtists function here in this promise,
//the displayAllArtists function successfully recieves information from our API
  console.log(artists); //this is a print statement for debugging purposes.
  displayAllArtists(milesUl, artists) //we call the function that's near the top of the page on line 11.
})
