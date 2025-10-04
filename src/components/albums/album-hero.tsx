import getArtistByArtistId from "@/actions/getArtistByArtistId"
import { Button } from "@/components/ui/button"
import { Share2, Eye } from "lucide-react"
import Image from "next/image"

interface AlbumHeroProps {
    mainImageUrl: string
    coverImageUrl: string
    albumTitle: string
    artistId: string
}

const imageStyle = {
//   borderRadius: '50%',
//   border: '1px solid #',
  width: '100px',
  height: 'auto',
}

export async function AlbumHero({
    mainImageUrl,
    coverImageUrl,
    albumTitle,
    artistId
}: AlbumHeroProps) {

    const artist = await getArtistByArtistId(artistId);
    
    return (
        <section className="relative  bg-black overflow-hidden m-8">
            <div className="">

                {/* Background Artist Image */}
                <div className="absolute inset-0">
                    <Image
                        src={coverImageUrl ||"/Cover.webp"}
                        alt="Canon"
                        fill
                        className="object-cover object-center opacity-80 aspect-w-16/9"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 container mx-auto px-6 py-12  flex items-center">
                    <div className="flex items-center gap-12 max-w-7xl">
                        {/* Album Main */}
                        <div className="flex-shrink-0">
                            <img
                                src={mainImageUrl ||"/Cover.webp"}
                                alt="No Loss Album Cover"
                                style={imageStyle}
                                // className="rounded-lg shadow-2xl w-auto h-auto aspect-1/1"
                            />
                        </div>

                        {/* Album Info */}
                        <div className="flex flex-col gap-6">
                            <div className="absolute top-8 right-8">
                                <span className="text-yellow-400 font-semibold text-sm">
                                    freemusic<span className="text-white">Original</span>
                                </span>
                            </div>

                            <div>
                                <h1 className="text-7xl font-bold text-white mb-3 tracking-tight">{albumTitle}</h1>
                                <p className="text-xl text-white/90">
                                    Album By <span className="text-yellow-400 font-semibold">{artist.name}</span>
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center gap-4">
                                <Button
                                    size="lg"
                                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 rounded-full"
                                >
                                    <Eye className="w-5 h-5 mr-2" />
                                    View
                                </Button>
                                
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-2 border-white text-white hover:bg-white hover:text-black rounded-full px-6 bg-transparent"
                                >
                                    <Share2 className="w-5 h-5 mr-2" />
                                    Share
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
