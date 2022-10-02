import type { NextPage } from 'next'
import { Canvas } from '@react-three/fiber'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const AnimatedBox = () => {
  const meshRef = useRef<THREE.Mesh>(null)
  useFrame (() => {
    console.log("Hi")
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
    }
  })
  return (
    <mesh ref={meshRef} scale={[0.5, 0.5, 0.5]}>
    <boxGeometry />
    <meshStandardMaterial />
  </mesh>
  )
}

const Home: NextPage = () => {

  return (
  <div className='container'>
    <Canvas>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />      
      <AnimatedBox/>
    </Canvas> 
  </div>
  )
}

export default Home
