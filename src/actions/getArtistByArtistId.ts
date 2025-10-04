import getServerAxios from "@/lib/axios";
import { Artist } from "@/types/artist";

const getArtistByArtistId = async (artistId: string) => {
    const instance = await getServerAxios();
    try {
        const { data } = await instance.get(`/artists/${artistId}`);
        return data as Artist;
    } catch (error) {
        console.log("Error fetching artist by ID:", error);
        throw error;
    }
}

export default getArtistByArtistId;