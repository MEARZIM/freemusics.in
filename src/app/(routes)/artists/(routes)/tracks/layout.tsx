import React from 'react'

import { getTrackByArtist } from '@/actions/getTracksbyArtist';

const TracksLayout = async (
    { children }: { children: React.ReactNode }
) => {
  const tracks = await getTrackByArtist();
  console.log(tracks);

  return (
    <>
        {children}
    </>
  )
}

export default TracksLayout
