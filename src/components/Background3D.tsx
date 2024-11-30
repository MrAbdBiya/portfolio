import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    meshRef.current.rotation.x = time * 0.1
    meshRef.current.rotation.y = time * 0.12
  })

  return (
    <Sphere ref={meshRef} args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#4299e1"
        attach="material"
        distort={0.5}
        speed={2}
      />
    </Sphere>
  )
}

export default function Background3D() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-50">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <AnimatedSphere />
      </Canvas>
    </div>
  )
}
