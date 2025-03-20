import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

const HeroCamera = ({ isMobile, children }) => {
    const group = useRef();

    useFrame((state, delta) => {
        const { pointer, camera } = state;
        
        const targetPos = isMobile ? [0, 1.5, 25] : [0, 1, 35];
        easing.damp3(camera.position, targetPos, 0.3, delta);
        
        easing.dampE(group.current.rotation, [-pointer.y / 20, pointer.x / 40, 0], 0.4, delta);
    });

    return <group ref={group}>{children}</group>;
};

export default HeroCamera;
