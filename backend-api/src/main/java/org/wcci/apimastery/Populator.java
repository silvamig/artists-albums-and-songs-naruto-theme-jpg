package org.wcci.apimastery;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Populator implements CommandLineRunner {
    ArtistStorage artistStorage;
    AlbumStorage albumStorage;
    SongStorage songStorage;

    public Populator(ArtistStorage artistStorage, AlbumStorage albumStorage, SongStorage songStorage) {
        this.artistStorage = artistStorage;
        this.albumStorage = albumStorage;
        this.songStorage = songStorage;
    }

    @Override
    public void run(String...args) throws Exception {
        Artist artist1= new Artist("Asian Kung-Fu Generation", "Naruto Artist", "Kioon Record Label", "Image Source");
        Artist artist2= new Artist("Yoko Kono", "Composer for the Cowboy Bebop Soundtrack", "Victor Entertainment", "Image Source");
        Artist artist3= new Artist("Mika Nakashima", "Singer for Kiss Of Death, Darling in the Franxx OP", "Sony Music Entertainment", "Image Source");
        Artist artist4= new Artist("Nightmare", "Band for the DeathNote OP", "Nippon Crown","Image Source");
        artistStorage.save(artist1);
        artistStorage.save(artist2);
        artistStorage.save(artist3);
        artistStorage.save(artist4);

        Album narutoAlbum= new Album("Naruto Album", "Kioon", "Album Image");
        Album cowboyAlbum= new Album("Cowboy Bebop", "Victor Entertainment", "Album Image");
        Album darlingAlbum= new Album("Kiss of Death", "Sony Music Entertainment Japan", "Album Image");
        Album deathnoteAlbum= new Album("The WORLD", "Nippon Crown", "Image Source");
        albumStorage.save(narutoAlbum);
        albumStorage.save(cowboyAlbum);
        albumStorage.save(darlingAlbum);
        albumStorage.save(deathnoteAlbum);

        Song narutoSong= new Song("Haruka Kanata", "https://www.youtube.com/watch?v=nJ6A6GC_ki4", "4:06");
        Song cowboySong= new Song("Tank","https://www.youtube.com/watch?v=n2rVnRwW0h8", "3:31");
        Song darlingSong= new Song("Kiss of Death", "https://www.youtube.com/watch?v=mzJqxT1UGho", "4:10");
        Song deathnoteSong= new Song("The WORLD", "https://www.youtube.com/watch?v=btD61Bq0XJo", "3:37");
        songStorage.save(narutoSong);
        songStorage.save(cowboySong);
        songStorage.save(darlingSong);
        songStorage.save(deathnoteSong);



    }

}
