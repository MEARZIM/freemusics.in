import getServerAxios from "@/lib/axios";
import { Album } from "@/types/album";

export const getAlbumsByArtist = async () => {
    const instance = await getServerAxios();
    try {
        const { data } = await instance.get(`/albums/artist`);
        return data as Album[];
        
    } catch (error) {
        throw error;
    }
}