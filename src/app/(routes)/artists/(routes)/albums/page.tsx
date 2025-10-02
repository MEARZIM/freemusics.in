import { AlbumHero } from '@/components/albums/album-hero'
import { Button } from '@/components/ui/button'
import Heading from '@/components/ui/heading'
import React from 'react'

const AlbumPage = () => {
    return (
        <section className="flex flex-col relative w-full min-h-full border">
            <div className="p-6 pt-4 pb-4 border-b flex justify-between">
                <Heading
                    title="Albums"
                    description="Manage your albums and tracks"
                />
                <div className='flex items-center gap-4'>
                    <Button
                        variant="outline"
                    >
                        New Album +
                    </Button>
                </div>
            </div>

            <div>
                {/* Content goes here */}
                <AlbumHero />
                <AlbumHero />
                <AlbumHero />
                <AlbumHero />
                <AlbumHero />
            </div>
        </section>
    )
}

export default AlbumPage
