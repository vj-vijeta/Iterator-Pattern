import { Playlist } from "./Playlist";
import { Song } from "./Song";
import { SongIterator } from "./SongIterator";

// Client (Media Player)
export class MediaPlayer {
    playPlaylist(playlist: Playlist): void {
        const iterator = playlist.createIterator();
        console.log("Playlist:");
        while (iterator.hasNext()) {
            const song = iterator.next();
            console.log(`Title: ${song.getTitle()}, Artist: ${song.getArtist()}, Duration: ${song.getDuration()}s`);
        }
    }
}

