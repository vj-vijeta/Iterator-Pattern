import { Playlist } from "./Playlist";
import { Song } from "./Song";

// SongIterator (Iterator)
export interface SongIterator {
    hasNext(): boolean;
    next(): Song;
}

// ConcreteSongIterator
export class ConcreteSongIterator implements SongIterator {
    private index: number = 0;

    constructor(private playlist: Playlist) {}

    hasNext(): boolean {
        return this.index < this.playlist.getSongCount();
    }

    next(): Song {
        if (this.hasNext()) {
            const song = this.playlist.getSongAt(this.index);
            this.index++;
            return song;
        } else {
            throw new Error("No more songs in the playlist.");
        }
    }
}

