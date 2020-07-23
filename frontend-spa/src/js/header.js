export {
     createHeader
}

import {
  fetchArtists, fetchAlbums
} from "./fetchArtists.js"

import {
  displayAllArtists
} from "./components/displayAllArtists.js"

import {
  displayAllAlbums
}from "./components/displayAllAlbums.js"

import {
  displayAllSongs
}from "./components/displayAllSongs.js"

const createHeader = () => {
    const header = document.createElement("header");
    header.classList.add('header')
    const nav = document.createElement("nav");
    const ulHeader = document.createElement("ul");
    nav.appendChild(ulHeader);
    const liTitle = document.createElement("li");
    liTitle.classList.add("title");
    liTitle.innerHTML = `NarutoTheme.jpg`;
    ulHeader.appendChild(liTitle);
    header.append(nav);
    const liHome = document.createElement("li");
    liHome.classList.add("liHome");
    liHome.innerHTML = `Home`
    ulHeader.appendChild(liHome);
    liHome.addEventListener('click', () => {
      fetchArtists()
        .then(artists => displayAllArtists(artists)) 
    })
    const liAlbum = document.createElement("li");
    liAlbum.classList.add("liAlbum");
    liAlbum.innerHTML = `Albums`
    ulHeader.appendChild(liAlbum);
    liAlbum.addEventListener('click', () => {
      alert("Boom Boom")
      fetchAlbums()
        .then(albums => displayAllAlbums(document.querySelector(".all-artists-container"), albums)) 
    })
    const liSongs = document.createElement("li");
    liSongs.classList.add("liSongs");
    liSongs.innerHTML = `Songs`
    ulHeader.appendChild(liSongs);
    liSongs.addEventListener(`click`, () => {    
    alert("Boom Boom")
      fetchAlbums()
        .then(albums => displayAllSongs(document.querySelector(".all-artists-container"), albums)) 
    })


    return header;
}