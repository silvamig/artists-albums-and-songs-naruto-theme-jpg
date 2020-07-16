import{
    clearElementChildren
} from "../domHelper.js"

export{
    displayOneAlbum
}

const displayOneAlbum = (container, album) =>{
    clearElementChildren (container);
    const artistInfo = document.createElement( "section");
    artistInfo.classList.add("artist-info");
    artist.albums.songs.forEach((song) =>{
        artistInfo.innerHTML = `
        <h1>${album.title}<h1>`
    })
    
    const ol = document.createElement ("ol");
    ol.classList.add("song-ol");
    ol.innerHTML = `
    <li> ${song.name}</li>`
    artistInfo.appendChild(ol);
    container.appendChild(artistInfo);

   }
