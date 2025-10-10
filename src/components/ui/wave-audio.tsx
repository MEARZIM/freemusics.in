"use client"

import { Pause, Play } from 'lucide-react'
import { useMemo, useState, useCallback, useRef } from 'react'
import { useWavesurfer } from '@wavesurfer/react'
import Timeline from 'wavesurfer.js/dist/plugins/timeline.esm.js'


interface WaveAudioProps {
    url: string;
}

const WaveAudio: React.FC<WaveAudioProps> = ({ url }) => {
    const containerRef = useRef(null)

    const { wavesurfer, isPlaying } = useWavesurfer({
        container: containerRef,
        height: 20,
        width: 200,
        waveColor: 'rgb(200, 0, 200)',
        progressColor: 'rgb(100, 0, 100)',
        url: url,
        plugins: useMemo(() => [Timeline.create()], []),
    })



    const onPlayPause = useCallback(() => {
        wavesurfer && wavesurfer.playPause()
    }, [wavesurfer])

    return (
        <>
            <div className='flex items-center gap-x-4'>
                <div ref={containerRef} />

                <div style={{ margin: '0', display: 'flex' }}>


                    <button onClick={onPlayPause} style={{ minWidth: '2em' }}>
                        {isPlaying ? <Pause /> : <Play />}
                    </button>
                </div>
            </div>
        </>
    );
}

export default WaveAudio