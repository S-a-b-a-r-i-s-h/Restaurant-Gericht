import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei'
import React, { Suspense } from 'react'
import Knife from './Knife'
import { Canvas } from '@react-three/fiber'
import CameraRig from '../CameraRig'
const Test = () => {
  return (
        <Canvas 
            camera={{ position:[30,0,30],fov:2 }}

        >
            <Suspense>
            <Stage environment="city" intensity={0.6}>
                <CameraRig>
                <Knife /> 
                </CameraRig>       
            </Stage>   
            {/* <PerspectiveCamera
                position={[0,40,30]}
                scale={1}
            /> */}

            </Suspense>
            <OrbitControls enableZoom={false} />
        </Canvas>  
  )
}

export default Test