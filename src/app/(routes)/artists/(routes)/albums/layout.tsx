import React from 'react'

import { getAlbumsByArtist } from '@/actions/getAlbumsByArtist';
import { AlbumHero } from '@/components/albums/album-hero';
import { getPathname } from '@/helpers/getPathname';


const Layout = async ({
    children,

}: {
    children: React.ReactNode;
}) => {
    const pathname = await getPathname();
    // console.log(pathname);
    const albums = await getAlbumsByArtist();

    return (
        <section className="flex flex-col relative w-full min-h-full border">
            {children}
            <div>
                {pathname === '/artists/albums' && (albums  && albums.length > 0 ? (
                    albums.map((album) => (
                        <AlbumHero
                            key={album.id}
                            mainImageUrl={album.mainImageUrl}
                            coverImageUrl={album.coverImageUrl}
                            albumTitle={album.name}
                            artistId={album.artistId}
                        />
                    ))
                ) : (
                    <p className="text-center p-10 text-muted-foreground">No albums found.</p>
                ))}
            </div>
        </section>
    )
}

export default Layout
