import { useEffect, useState } from "react";

export const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop with hover capability
    const hasPointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasPointer) return;

    const onMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target.closest("[data-cursor], a, button, input, textarea");
      if (target) {
        setIsHovering(true);
        const customLabel = target.getAttribute("data-cursor");
        setCursorText(customLabel || "");
      } else {
        setIsHovering(false);
        setCursorText("");
      }
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {/* Primary Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#B8FF45] pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out shadow-[0_0_8px_#B8FF45]"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
        }}
      />

      {/* Trailing Ring & Context Label */}
      <div
        className={`fixed top-0 left-0 rounded-full border border-[#D9E0DF]/40 pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out flex items-center justify-center ${
          isHovering
            ? "w-12 h-12 bg-[#B8FF45]/10 border-[#B8FF45] scale-110"
            : "w-8 h-8 scale-100"
        }`}
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        {cursorText && (
          <span className="text-[8px] font-mono font-bold tracking-wider text-[#B8FF45] uppercase">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
};
