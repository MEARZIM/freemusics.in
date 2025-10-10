import { Album } from "./album";
import { Genre } from "./genre";
import { Instrument } from "./instruments";
import { Mood } from "./mood";
import { VideoTheme } from "./videotheme";
import { Vocal } from "./vocal";

export interface Tracks {
    id: string;
    name: string;
    url: string;
    thumbnail: String | null;
    duration: String;
    bpm: number | null;
    artistId: string | null;

    moods: Mood[]
    videoThemes: VideoTheme[]
    instruments: Instrument[]
    genres: Genre[]
    vocals: Vocal[]
    albums: Album[]

    createdAt: Date;
    updatedAt: Date;
}

