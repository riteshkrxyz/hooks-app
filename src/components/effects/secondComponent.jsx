import { useEffect, useState } from "react";

const EffectComponent2 = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("use effect called");
    window.addEventListener("mousemove", logMousePosition);
    return () => {
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);
  return (
    <div>
      Hook X - {x} Y - {y}
    </div>
  );
};

export default EffectComponent2;
