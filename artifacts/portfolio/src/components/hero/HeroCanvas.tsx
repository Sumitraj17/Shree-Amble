import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm';
import CanvasErrorBoundary from '../shared/CanvasErrorBoundary';
import { useWebGL } from '../shared/useWebGL';

function Starfield() {
  const ref = useRef<any>(null);
  // Generate random points in a sphere
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.5 });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere as Float32Array} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#3b82f6"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          blending={2} // AdditiveBlending
        />
      </Points>
    </group>
  );
}

export default function HeroCanvas() {
  const webgl = useWebGL();
  if (!webgl) return null;

  return (
    <CanvasErrorBoundary>
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Starfield />
        </Canvas>
      </div>
    </CanvasErrorBoundary>
  );
}
