import { useState } from "react";

function useFileInput({ constraint }) {
  const [value, setValue] = useState(null);
  const onChange = (e) => {
    console.log(e.target.files[0]);
    if (constraint && !constraint(e.target.files[0])) return;
    setValue(e.target.files[0]);
  };

  return { value, onChange, setValue };
}

export default useFileInput;
