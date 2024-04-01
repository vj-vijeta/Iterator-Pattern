import { MediaPlayer } from "./MediaPlayer";
import { Playlist } from "./Playlist";
import { Song } from "./Song";

// Example Usage
const playlist = new Playlist();
playlist.addSong(new Song("Song 1", "Artist 1", 180));
playlist.addSong(new Song("Song 2", "Artist 2", 240));
playlist.addSong(new Song("Song 3", "Artist 3", 200));

const mediaPlayer = new MediaPlayer();
mediaPlayer.playPlaylist(playlist);

