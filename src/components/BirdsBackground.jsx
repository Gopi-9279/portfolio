import { useState, useEffect, useRef } from "react";

export const BirdsBackground = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
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
        color1: 0x8b5cf6, // Vibrant Violet
        color2: 0xf472b6, // Vibrant Pink
        colorMode: "variance",
        birdSize: 2.5, // Slightly larger for better visibility
        wingSpan: 35.0, // Wider wingspan
        speedLimit: 4.0, // Slightly slower, majestic flight
        separation: 25.0,
        alignment: 20.0,
        cohesion: 20.0,
        quantity: 5.0 // More birds for better aesthetics
      });
      setVantaEffect(effect);
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
