import { Album as AlbumType } from "@/types/album";
import AlbumForm from "./components/album-form";
import getAlbumByAlbumId from "@/actions/getAlbumByAlbumId";

interface AlbumFormPageProps {
  params: {
    albumId: string;
  };
}

const AlbumFormPage = async ({ params }: AlbumFormPageProps) => {
  const { albumId } = await params;

  
  if (albumId === "new") {
    return <AlbumForm initialData={null} />;
  }

  
  const initialData = await getAlbumByAlbumId(albumId);
  
  if (!initialData) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center">
        <h2 className="text-2xl font-semibold mb-2">Album not found</h2>
        <p className="text-muted-foreground mb-4">
          {`The album you are looking for doesnot exist or was removed.`}
        </p>
        <a
          href="/artists/albums"
          className="text-blue-600 hover:underline font-medium"
        >
          ← Back to Albums
        </a>
      </div>
    );
  }

  
  return <AlbumForm initialData={initialData} />;
};

export default AlbumFormPage;
