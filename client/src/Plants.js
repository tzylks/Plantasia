import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Suspense } from "react";
import { Environment, OrbitControls, PerspectiveCamera, Html, Shadow, useProgress } from "@react-three/drei";
import { motion } from 'framer-motion'
import { useInView } from "react-intersection-observer";
import { Card, CardContent, Grid, Typography } from '@material-ui/core'
import { ThemeProvider } from "@material-ui/core"
import Theme from './components/Theme'
import { a, useTransition } from "@react-spring/web";
import * as THREE from 'three'
import { Text } from 'troika-three-text'
import { MeshText2D, textAlign } from 'three-text2d'
import {NavLink} from 'react-router-dom'




const text = 'Plantastia'

function GroundPlane() {
    return (
        <mesh receiveShadow rotation={[4.72, 0, 0]} position={[0, -100, 0]}>
            <planeBufferGeometry attach="geometry" args={[500, 500]} />
            <meshStandardMaterial attach="material" color="#ffea00" />
        </mesh>
    );
}

function BackDrop() {
    return (
        <mesh receiveShadow position={[0, -1, -200]}>
            <planeBufferGeometry attach="geometry" args={[500, 500]} />
            <meshStandardMaterial attach="material" color="#b7b7a4" />
        </mesh>
    );
}

function BackDrop2() {
    return (
        <mesh receiveShadow rotation={[40, 250, 300]} position={[-80, -1, -200]}>
            <planeBufferGeometry attach="geometry" args={[500, 500]} />
            <meshStandardMaterial attach="material" color="red" />
        </mesh>
    );
}


const Model = () => {

    const gltf = useLoader(GLTFLoader, "./scene.gltf");
    const ref = useRef();
    useFrame(() => {
        return (ref.current.rotation.y += 0.00);
    });
    const [inView] = useInView({
        threshold: 0,
    });

    gltf.materials.surfaceShader1.color.g = 1
    return (
        <>
            <HTMLContent />

            <primitive ref={ref} position={[0, -62, -5]} object={gltf.scene} scale={.5} />

        </>
    );
};





const HangingPlant = () => {

    const gltf = useLoader(GLTFLoader, "./hangingplant.gltf");
    const ref = useRef();
    useFrame(() => {
        return (ref.current.rotation.y += 0.0006);
    });
    const [inView] = useInView({
        threshold: 0,
    });
    // console.log(gltf.materials.surfaceShader1.color)
    // gltf.materials.surfaceShader1.color.r = 1

    console.log(gltf)
    return (
        <>
            <primitive ref={ref} rotation={[0, 59.3, 0]} position={[30, 200, -180]} object={gltf.scene} scale={4} />
        </>
    );
};


const Door = () => {

    const gltf = useLoader(GLTFLoader, "./door.gltf");
    const ref = useRef();
    useFrame(() => {
        return (ref.current.rotation.y += 0.000);
    });
    const [inView] = useInView({
        threshold: 0,
    });

    return (
        <>
            <primitive ref={ref} position={[160, -98, -200]} object={gltf.scene} scale={100} />
        </>
    );
};

const Window = () => {

    const gltf = useLoader(GLTFLoader, "./window.gltf");
    const ref = useRef();
    useFrame(() => {
        return (ref.current.rotation.y += 0.000);
    });
    const [inView] = useInView({
        threshold: 0,
    });

    return (
        <>
            <primitive ref={ref} rotation={[100, -300, 20.9]} position={[-70, 50, -196]} object={gltf.scene} scale={.08} />
        </>
    );
};

const Table = () => {

    const gltf = useLoader(GLTFLoader, "./table.gltf");
    const ref = useRef();
    useFrame(() => {
        return (ref.current.rotation.y += 0.000);
    });
    const [inView] = useInView({
        threshold: 0,
    });

    return (
        <>
            <primitive ref={ref} rotation={[0, 26.78, 0]} position={[-70, -66, -170]} object={gltf.scene} scale={33} />
        </>
    );
};

const Couch = () => {

    const gltf = useLoader(GLTFLoader, "./couch_test.gltf");
    const ref = useRef();
    useFrame(() => {
        return (ref.current.rotation.y += 0.000);
    });
    const [inView] = useInView({
        threshold: 0,
    });

    return (
        <>
            <primitive ref={ref} rotation={[0, -3, .1]} position={[-300, -100, -5]} object={gltf.scene} scale={70} />
        </>
    );
};

const Zizi = () => {

    const gltf = useLoader(GLTFLoader, "./grass.gltf");
    const ref = useRef();
    useFrame(() => {
        return (ref.current.rotation.y += 0.000);
    });
    const [inView] = useInView({
        threshold: 0,
    });

    return (
        <>
            <primitive ref={ref} rotation={[0, 0, 0]} position={[-70, -33, -160]} object={gltf.scene} scale={5} />
        </>
    );
};


const Rug = () => {

    const gltf = useLoader(GLTFLoader, "./rug.gltf");
    const ref = useRef();
    useFrame(() => {
        return (ref.current.rotation.y += 0.000);
    });
    const [inView] = useInView({
        threshold: 0,
    });

    return (
        <>
            <primitive ref={ref} rotation={[0, 190, 0]} position={[150, -99, -98]} object={gltf.scene} scale={130} />
        </>
    );
};


const Rug2 = () => {

    const gltf = useLoader(GLTFLoader, "./rug2.gltf");
    const ref = useRef();
    useFrame(() => {
        return (ref.current.rotation.y += 0.000);
    });
    const [inView] = useInView({
        threshold: 0,
    });

    return (
        <>
            <primitive ref={ref} rotation={[0, 0, 0]} position={[-40, -99, -40]} object={gltf.scene} scale={130} />
        </>
    );
};

const Window2 = () => {

    const gltf = useLoader(GLTFLoader, "./window2.gltf");
    const ref = useRef();
    useFrame(() => {
        return (ref.current.rotation.y += 0.000);
    });
    const [inView] = useInView({
        threshold: 0,
    });

    return (
        <>
            <primitive ref={ref} rotation={[0, 0, 0]} position={[0, 0, 0]} object={gltf.scene} scale={10} />
        </>
    );
};







const Grass = () => {

    const gltf = useLoader(GLTFLoader, "./animated.gltf");
    const ref = useRef();
    useFrame(() => {

        return (ref.current.rotation.y += -0.000);
    });
    const [inView] = useInView({
        threshold: 0,
    });
    let mixer
    if (gltf.animations.length) {

        mixer = new THREE.AnimationMixer(gltf.scene);
        gltf.animations.forEach(clip => {
            const action = mixer.clipAction(clip)
            action.play();
        });
    }

    useFrame((state, delta) => {
        mixer?.update(delta)
    })

    return (
        <>
            <primitive ref={ref} position={[-200, -99, -170]} object={gltf.scene} scale={.8} />
        </>
    );
};


const Cat = () => {

    const gltf = useLoader(GLTFLoader, "./cat.gltf");
    const ref = useRef();
    useFrame(() => {

        return (ref.current.rotation.y += -0.000);
    });
    const [inView] = useInView({
        threshold: 0,
    });
    let mixer
    if (gltf.animations.length) {

        mixer = new THREE.AnimationMixer(gltf.scene);
        gltf.animations.forEach(clip => {
            const action = mixer.clipAction(clip)
            action.play();
        });
    }

    useFrame((state, delta) => {
        mixer?.update(delta)
    })

    return (
        <>
            <primitive ref={ref} rotation={[0, 280, 0]} position={[-90, -100, -100]} object={gltf.scene} scale={2} />
        </>
    );
};



const HTMLContent = () => {

    return (

        <Html occlude>

            <ThemeProvider theme={Theme}>
                <Grid Container>
                    <Grid item lg={12} sm={12}>
                    
                        <Typography style={{ marginLeft: '-18vw', color: 'white', marginTop: '-10vh', fontSize: '10.4rem' }}>
                            Plantasia
                        </Typography>
                       
                    </Grid>
                </Grid>
            </ThemeProvider>
        </Html>

    )
}

function Plane(props) {

    return (
        <mesh receiveShadow rotation={[0, 0, 0]} position={[0, 0, 0]}>
            <planeBufferGeometry attach="geometry" attach="geometry" args={[500, 500]} />
            <shadowMaterial attach="material" color="#171717" opacity={1} />
        </mesh>
    )
}


function Plants() {


    return (
        <>
            <Canvas
                shadowMap
                camera={{ position: [0, -40, 20] }}
                style={{
                    position: "fixed",
                    left: 0,
                    top: 0,
                    background: '#f58549'
                }}
            >
                <ambientLight intensity={.3} />
                <directionalLight
                    castShadow
                    position={[0, 10, 0]}
                    intensity={1.5}
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                    shadow-camera-far={50}
                    shadow-camera-left={-10}
                    shadow-camera-right={10}
                    shadow-camera-top={10}
                    shadow-camera-bottom={-10}
                />

                <Suspense fallback={null}>
                    <Model />

                    <Door />
                    <GroundPlane />
                    <Grass />
                    <BackDrop />
                    <Window />
                    <Zizi />
                    <Rug2 />
                    <Rug />
                    <Table />
                    <Plane />
                    <HangingPlant />
                    <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false} enablePan={true} />
                </Suspense>


            </Canvas>

        </>
    );
}

export default Plants