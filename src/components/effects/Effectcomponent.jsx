import { useState } from "react";
import EffectComponent2 from "./secondComponent";

const Effectcomponent3 = () => {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <EffectComponent2 />}
    </div>
  );
};

export default Effectcomponent3;
