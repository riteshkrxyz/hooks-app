// import Profile from "./components/Profile";
// import { Asset } from "./components/Profile";
// import Effectcomponent3 from "./components/effects/Effectcomponent";
// import EffectFetching from "./components/effects/effectFetching";
// import EffectComponent from "./components/effects/firstComponent";
// import EffectComponent2 from "./components/effects/secondComponent";
// import FirstComponent from "./components/stateComponents/firstComponent";
// import SecondComponent from "./components/stateComponents/secondComponent";
import React from "react";
import ComponentC from "./components/context/ComponentC";
import ReducerComponent from "./components/reducer/ReducerComponent";
import RefComponent from "./components/ref/firstcomponent";
import CustomCompUse from "./components/custom/firstcomponent";

export const UserContext = React.createContext();
function App() {


  return (
    <>
      <div className="App">
        {/* <FirstComponent /> */}
        {/* <SecondComponent /> */}
        {/* <EffectComponent /> */}
        {/* <EffectComponent2 /> */}
        {/* <Effectcomponent3 /> */}
        {/* <EffectFetching /> */}

        {/* <UserContext.Provider value={"Ritesh"}>
          <ComponentC />
        </UserContext.Provider> */}

        {/* <ReducerComponent /> */}

        {/* <RefComponent /> */}

        <CustomCompUse />
      </div>
    </>
  );
}

export default App;
