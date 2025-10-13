import useMacBookStore from "../store";
import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";
import { MackbookModel } from "./models/Macbook";
import MackbookModel14 from "./models/MackbookModel14";
import StudioLights from "./StudioLights";

export default function ProductViewer() {
  const { color, scale, setColor, setScale } = useMacBookStore();
  return (
    <>
      <section id="product-viewer">
        <h2>Take a better look</h2>
        <div className="controls">
          <p className="info">
            MacBook Pro {scale} in {color}
          </p>
          <div className="flex-center gap-5 mt-5">
            <div className="color-control">
              <div
                onClick={() => setColor("#adb5bd")}
                className={clsx(
                  "bg-neutral-300",
                  color === "#adb5bd" && "active"
                )}
              ></div>
              <div
                onClick={() => setColor("#2e2c2e")}
                className={clsx(
                  "bg-neutral-900",
                  color === "#2e2c2e" && "active"
                )}
              ></div>
            </div>
            <div className="size-control">
              <div
                onClick={() => setScale(0.06)}
                className={clsx(
                  scale === 0.06
                    ? "bg-white text-black"
                    : "bg-transparent text-white"
                )}
              >
                <p>14"</p>
              </div>
              <div
                onClick={() => setScale(0.08)}
                className={clsx(
                  scale === 0.08
                    ? "bg-white text-black"
                    : "bg-transparent text-white"
                )}
              >
                <p>16"</p>
              </div>
            </div>
          </div>
        </div>
        <Canvas
          id="canvas"
          camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
        >
          <ambientLight intensity={1} />
          <StudioLights />
          <MackbookModel14 scale={0.06} position={[-1, 0, 0]} />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </section>
    </>
  );
}
