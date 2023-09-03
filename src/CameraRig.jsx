import React from 'react'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { easing } from 'maath'

const CameraRig = ({children}) => {
    const group = useRef();
    const cameraPosition=[0,0,3];
    easing.damp3(cameraPosition,cameraPosition,0.25,10)
  return (
    <group ref={group}>
        {children}
    </group>
  )
}

export default CameraRig