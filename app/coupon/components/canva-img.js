"use client";
import React, { useRef, useEffect, useState } from "react";
import bg from "../../../assets/bg5.jpeg";
import { saveAs } from "file-saver";
import { Button } from "@/components/ui/button";

const ImageWithTextOverlay = ({ name, attend_course }) => {
  const [isLoading, setIsLoading] = useState(true);
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    // Load the background image
    const backgroundImage = new Image();
    backgroundImage.src = bg.src;

    // Wait for the background image to load
    backgroundImage.onload = () => {
      // Set canvas size to match the background image
      canvas.width = backgroundImage.width;
      canvas.height = backgroundImage.height;
      // Draw the background image on the canvas
      ctx.drawImage(
        backgroundImage,
        0,
        0,
        backgroundImage.width,
        backgroundImage.height
      );

      // Overlay text at a specific position
      const text = name;
      const attendedCourse = attend_course;
      var attendTextWidth = ctx.measureText(attendedCourse).width;
      var nameTextWidth = ctx.measureText(text).width;

      //const acx = (canvas.width - attendTextWidth) / 2 - attendTextWidth / 2;
      const acx = 683;
      const acy = 340;
      //const x = (canvas.width - nameTextWidth) / 2 - (nameTextWidth / 2); // X-coordinate
      const x = 683;
      const y = 266; // Y-coordinate
      const fontSize = 36;
      ctx.font = `${fontSize}px Arial`; // Set font size and family
      ctx.fillStyle = "#921606"; // Set text color
      ctx.fillText(text, x, y); // Draw text on the canvas
      ctx.font = `36px Arial`; // Set font size and family
      ctx.fillStyle = "#921606";
      ctx.fillText(attendedCourse, acx, acy);
      setIsLoading(false);
    };
  }, []);

  return (
    <div className="container mx-auto px-5">
      <canvas
        ref={canvasRef}
        className={`${
          isLoading && "hidden"
        } w-[40%] shadow-md mx-auto rounded-2xl max-[425px]:w-full object-contain`}
      />
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <>
          <Button
            onClick={() => {
              const canvas = canvasRef.current;
              const dataURL = canvas.toDataURL("image/png");

              console.log(dataURL);
              saveAs(dataURL, `${name}.png`);
            }}
          >
            download
          </Button>
        </>
      )}
    </div>
  );
};

export default ImageWithTextOverlay;
