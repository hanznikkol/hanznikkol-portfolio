import { useEffect, useRef } from "react";
import gsap from "gsap";

const GradientCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    document.addEventListener("mousemove", moveCursor);

    // Optional: scale on click
    document.addEventListener("mousedown", () => {
      gsap.to(cursor, { scale: 0.8, duration: 0.2 });
    });
    document.addEventListener("mouseup", () => {
      gsap.to(cursor, { scale: 1, duration: 0.2 });
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousedown", () => {});
      document.removeEventListener("mouseup", () => {});
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] mix-blend-difference"
      style={{
        background: "linear-gradient(45deg, #C084FC, #3ABFF8)",
        transform: "translate(-50%, -50%)",
      }}
    ></div>
  );
};

export default GradientCursor;
