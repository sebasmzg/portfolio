'use client';

import {Canvas} from '@react-three/fiber';
import Model from './Model';
import { Suspense } from 'react';
import { useProgress, Html, ScrollControls } from '@react-three/drei';

function Loader(){
    const {progress}= useProgress();
    return <Html center>{Number(progress.toFixed(1))}</Html>
}

export default function Scene(){
    return (
        <Canvas gl={{antialias: true}} dpr={[1,1.5]} camera={{ position: [0, 4, 5] }} className='relative' style={{ height: '100vh', width: '100vw', overflow: 'hidden' }} >
            <directionalLight position={[-5, -5, 5]} intensity={4} />
            <Suspense fallback={<Loader />}>
                <ScrollControls damping={0.3} pages={1}>
                    <Model />
                </ScrollControls>
            </Suspense>
        </Canvas>
    )
}