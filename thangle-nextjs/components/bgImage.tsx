import Image from "next/image";
import styled from "styled-components";
import { useState, useEffect } from "react";

import SunSet from "./assets/sunset.png";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

export default function BGImage() {
  const [width, setWidth] = useState<number>();
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    function handleResize() {
      const { width, height } = getWindowDimensions();
      setWidth(width);
      setHeight(height);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  if (width && height) {
    return <Image src={SunSet} width={width} height={height} />;
  }
}
