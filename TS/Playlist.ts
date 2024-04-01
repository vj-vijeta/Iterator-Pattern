import { Song } from "./Song";
import { ConcreteSongIterator, SongIterator } from "./SongIterator";

// Playlist (Aggregate)
export class Playlist {
    private songs: Song[] = [];

    addSong(song: Song): void {
        this.songs.push(song);
    }

    getSongCount(): number {
        return this.songs.length;
    }

    getSongAt(index: number): Song {
        return this.songs[index];
    }

    createIterator(): SongIterator {
        return new ConcreteSongIterator(this);
    }
}

