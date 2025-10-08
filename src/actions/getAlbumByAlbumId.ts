import getServerAxios from "@/lib/axios";
import { Album } from "@/types/album";
import { AxiosError } from "axios";

const getAlbumByAlbumId = async (albumId: string) => {
    const instance = await getServerAxios();
    try {
        const { data } = await instance.get(`/albums/${albumId}`);
        return data as Album;
    } catch (error) {
        // console.log("Error fetching artist by ID:", error);
        return null;
    }
}

export default getAlbumByAlbumId;