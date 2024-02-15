import { useContext } from "react";
import { UserContext } from "../../App";

const ComponentF = () => {
  const user = useContext(UserContext);
  return <div>{user}</div>;
};

export default ComponentF;
