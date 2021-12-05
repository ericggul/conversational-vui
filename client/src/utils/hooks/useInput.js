import { useState } from "react";

function useInput({ initialValue, constraint }) {
  const [value, setValue] = useState(initialValue || "");
  const onChange = (e) => {
    if (constraint && !constraint(e.target.value)) return;
    setValue(e.target.value);
  };

  return { value, onChange, setValue };
}

export default useInput;
