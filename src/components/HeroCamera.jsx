import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

const HeroCamera = ({ isMobile, children }) => {
    const group = useRef();

    useFrame((state, delta) => {

        if (isMobile) {
            easing.damp3(state.camera.position, [0, 2,23], 0.25, delta);

        } else {
            easing.damp3(state.camera.position, [0, 1, 35], 0.25, delta);
            easing.dampE(group.current.rotation, [-state.pointer.y / 15, state.pointer.x / 30, 0], 0.4, delta);
        }
    });

    return <group ref={group}>{children}</group>;
};

export default HeroCamera;
