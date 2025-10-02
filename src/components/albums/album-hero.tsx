import { Button } from "@/components/ui/button"
import { Share2, Eye } from "lucide-react"
import Image from "next/image"

interface AlbumHeroProps {
    profileImageUrl?: string
    coverImageUrl?: string
    albumTitle?: string
    artistName?: string
}

export function AlbumHero(

) {
    return (
        <section className="relative  bg-black overflow-hidden m-8">
            <div className="">

                {/* Background Artist Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/Cover.webp"
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
                        {/* Album Cover */}
                        <div className="flex-shrink-0">
                            <Image
                                src="/Cover.webp"
                                alt="No Loss Album Cover"
                                width={256}
                                height={256}
                                className="rounded-lg shadow-2xl"
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
                                <h1 className="text-7xl font-bold text-white mb-3 tracking-tight">No Loss</h1>
                                <p className="text-xl text-white/90">
                                    Album By <span className="text-yellow-400 font-semibold">Canon</span>
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
