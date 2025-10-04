import { Album } from "./album";

export interface Artist {
    id: string;
    name: string;
    email: string;
    bio: string;
    avatar: string;
    albums: Partial<Album[]>;
}