import React, { useState } from "react";
import { extend, Canvas } from "@react-three/fiber";
import { Text } from "troika-three-text";
import { OrbitControls } from "@react-three/drei"


/* ======================

This demo shows text rendering performed by the troika-three-text library. 
In this case we use Text directly within a `react-three-fiber` scene.

Also see the "drei" addon library for react-three-fiber, which formalizes
this integration: https://github.com/react-spring/drei#%EF%B8%8F-text-

*/

// Register Text as a react-three-fiber element
extend({ Text });



const text =
  "Aaron is way too fucking tall";




function Sham() {
  // State:
  const [rotation, setRotation] = useState([0, 0, 0, 0]);
  const [opts, setOpts] = useState({
    font: "Philosopher",
    fontSize: 12,
    color: "#99ccff",
    maxWidth: 300,
    lineHeight: 1,
    letterSpacing: 0,
    textAlign: "justify",
    materialType: "MeshPhongMaterial"
  });

  // Handlers:
  const onMouseMove = e => {
    document.addEventListener('onmouseover', (e) => {
        setRotation([
            ((e.clientY / e.target.offsetHeight - 0.5) * -Math.PI) / 8,
            ((e.clientX / e.target.offsetWidth - 0.5) * -Math.PI) / 8,
            0
          ])
    })
  };

  document.addEventListener('keydown', (e) => {
    setRotation([
        ((e.clientY / e.target.offsetHeight - 0.5) * -Math.PI) / 8,
        ((e.clientX / e.target.offsetWidth - 0.5) * -Math.PI) / 8,
        0
      ])
})

  return (
    <div>
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
        pixelRatio={window.devicePixelRatio}
        onMouseMove={e => onMouseMove(e)}
      >
        <text
          position-z={-180}
          rotation={rotation}
          {...opts}
          text={text}
          onMouseMove={e => onMouseMove(e)}
          anchorX="center"
          anchorY="middle"
        >
          {opts.materialType === "MeshPhongMaterial" ? (
            <meshPhongMaterial attach="material" color={opts.color} />
          ) : null}
        </text>
        <OrbitControls />
        <pointLight position={[-100, 0, -160]} />
        <pointLight position={[0, 0, -170]} />
        <pointLight position={[100, 0, -160]} />
      </Canvas>

    </div>
  );
}

export default Sham