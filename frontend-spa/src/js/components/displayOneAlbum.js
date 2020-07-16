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
  
    const ol = document.createElement ("ol");
    ol.classList.add("song-ol");
   ol.innerHTML = `<li>I work</li>`
   
   console.log(album.songs)   //potentially an issue with our populator and song pojo. No songs to list. 

    album.songs.forEach((song) =>{ 
      const li = document.createElement("li");
      li.innerHTML = `<p>I work </p>`
      console.log(li)
      ol.appendChild(li);

        
        
  
    })
    
    artistInfo.append(ol);
    
    //artistInfo.appendChild(ol);
    container.appendChild(artistInfo);

   }
