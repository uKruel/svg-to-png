import React, { useEffect, useState, useRef, useCallback } from "react";
import { builderDirector } from "./CanvasBuilder";
const Director = () => {
  const [canvas, setCanvas] = useState<HTMLCanvasElement>();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (canvasRef.current) {
      setCanvas(canvasRef?.current);
    }
  }, [canvasRef]);
  const generateImages = useCallback(() => {
    if (canvas) {
      //set width and height of image to 100
      const commonContext = canvas.getContext("2d");
      //best quality
      commonContext!.imageSmoothingEnabled = true;
      commonContext!.imageSmoothingQuality = "high";

      //builder with director
      const builder = builderDirector(
        commonContext!,
        { width: 100, height: 100 },
        { width: 100, height: 100 }
      );
    }
  }, [canvas]);
  const generate = useCallback(() => {
    generateImages();
  }, [generateImages]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <canvas aria-label="canvas-label" ref={canvasRef}>
        <p>Can not display canvas.</p>
      </canvas>
      <br></br>
      <button onClick={() => generate()} style={{ padding: "1em" }}>
        Generate
      </button>
    </div>
  );
};

export default Director;