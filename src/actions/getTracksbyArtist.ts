import getServerAxios from "@/lib/axios";
import { Tracks } from "@/types/tracks";

export const getTrackByArtist = async () => {
    const instance = await getServerAxios();
    try {
        const { data } = await instance.get(`/tracks/artist`);
        return data as Tracks[];
        
    } catch (error) {
        throw error;
    }
}