import { useState } from "react";

const SecondComponent = () => {
  // name -> firstName, lastName

  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });

  const handleFirstName = (event) => {
    // console.log(event.target.value);
    setName({ ...name, firstName: event.target.value });
  };

  const handleLastName = (event) => {
    setName({ ...name, lastName: event.target.value });
  };
  return (
    <div>
      <h1>
        Your name is {name.firstName} and your last name is {name.lastName}
      </h1>
      <input
        type="text"
        id=""
        // value={name.firstName}
        onChange={handleFirstName}
      />
      <input
        type="text"
        name="firstname"
        id=""
        value={name.lastName}
        onChange={handleLastName}
      />
    </div>
  );
};

export default SecondComponent;
