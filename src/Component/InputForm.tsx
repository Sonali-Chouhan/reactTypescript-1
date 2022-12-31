import { useState } from "react";
interface State {
  firstName: string;
  lastName?: string;
  title?: string;
  age: number;
}
const InputForm = () => {
  const [state, setState] = useState<State>({
    firstName: "",
    lastName: "",
    age: 0,
  });
  return (
    <div>
      <input
        type="text"
        name="firstName"
        value={state.firstName}
        onChange={(e) => setState({ ...state, firstName: e.target.value })}
      />
   
    </div>
  );
};

export default InputForm;
