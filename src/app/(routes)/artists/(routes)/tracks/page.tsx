import React from 'react'

import Heading from '@/components/ui/heading'
import { Button } from '@/components/ui/button'
import { TracksClient } from './components/client'

const dummyData = [
    {
        id: '1',
        name: 'Track 1',
        thumbnail: 'https://res.cloudinary.com/dcghckzd9/image/upload/v1759513104/t4qtblhshxjq3g2rqvx1.jpg',
        url: 'https://res.cloudinary.com/dcghckzd9/video/upload/v1760080037/sample-15s_dlntae.mp3',
        duration: '2',
        bpm: 33,
        createdAt: '2024-01-01',
    },
    {
        id: '2',
        name: 'Track 2',
        thumbnail: 'https://res.cloudinary.com/dcghckzd9/image/upload/v1759513104/t4qtblhshxjq3g2rqvx1.jpg',
        url: 'https://res.cloudinary.com/dcghckzd9/video/upload/v1760080037/sample-15s_dlntae.mp3',
        duration: '2',
        bpm: 33,
        createdAt: '2024-01-02',
    },
];

const TracksPage = () => {
    return (
        <>
            <section className='flex-col'>
                <div className='flex-1 space-y-4 p-8 pt-6'>
                    <TracksClient data={dummyData} />
                </div>
            </section>
        </>
    )
}

export default TracksPage
