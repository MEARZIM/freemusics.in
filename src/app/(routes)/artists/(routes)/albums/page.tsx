'use client';

import { Button } from '@/components/ui/button'
import Heading from '@/components/ui/heading'
import { useParams } from 'next/navigation';

import React from 'react'

const AlbumPage = () => {
    // const params = useParams();
    // console.log (params);

    return (
        
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

            
       
    )
}

export default AlbumPage
