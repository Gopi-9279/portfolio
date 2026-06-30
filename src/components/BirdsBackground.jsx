import { useEffect, useRef } from "react";

export const BirdsBackground = () => {
  const myRef = useRef(null);

  useEffect(() => {
    let effect;
    // Make sure VANTA is loaded globally from the CDN in index.html
    if (window.VANTA) {
      effect = window.VANTA.BIRDS({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0xffffff,
        backgroundAlpha: 0.0, // Transparent background so Tailwind theme colors show through
        color1: 0x94a3b8, // Elegant slate/silver
        color2: 0xe2e8f0, // Soft light silver
        colorMode: "variance",
        birdSize: 1.5, // Smaller, more elegant
        wingSpan: 30.0, // Majestic wingspan
        speedLimit: 3.5, // Slower, graceful flight
        separation: 30.0,
        alignment: 20.0,
        cohesion: 20.0,
        quantity: 4.0 // Less clustered
      });
    }
    
    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none z-0 block dark:hidden opacity-80"
      ref={myRef}
    />
  );
};
