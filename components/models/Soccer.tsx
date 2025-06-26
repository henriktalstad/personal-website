import { ModelProps } from '@/types/hobbies/models';
import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Group, Mesh } from 'three';
import { GLTF } from 'three-stdlib';

export default function Soccer({
    visible
}: ModelProps) {
    const groupRef = useRef<Mesh & Group>(null);
    const { scene } = useGLTF('/static/models/soccer/soccer.glb') as unknown as GLTF;
    
    // Enklere animasjon som holder modellen stabil i visningen
    useFrame(() => {
        if (!groupRef.current) return;
        
        // Hold en stabil og statisk skala - økt 3x fra tidligere
        groupRef.current.scale.set(0.06, 0.06, 0.06);
        
        // Let kun animasjonen forårsake en svak rotasjon for å gi liv til modellen
        // men hold posisjonen helt stabil
        if (visible) {
            groupRef.current.rotation.y += 0.001;
        }
    });

    return (
        <>
            {/* Forenklet struktur med fast posisjonering */}
            <group
                ref={groupRef}
                dispose={null}
                scale={0.06} // Økt størrelse til 3x av tidligere verdi
                position={[0, 0, 0]} // Sentrert i Canvas
                visible={visible}
                renderOrder={visible ? 1 : 0}
            >
                {/* Transparent box to avoid empty spaces in the group. PresentationControls don't grab empty spaces */}
                <mesh>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial opacity={0} transparent />
                </mesh>
                <primitive object={scene} />
            </group>
        </>
    );
};