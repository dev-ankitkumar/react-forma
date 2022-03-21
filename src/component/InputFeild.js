import { useState } from "react";
import "./style.css";
export default function InputField({ BtnName, PlaceHolder, Requiredvalue }) {
  const [formValues, setFormValues] = useState("");
  const handleChange = (e) => {
    // const { name, value } = e.target;
    //setFormValues(e.target.value);
    // console.log(name);
    // console.log(value);
    setFormValues({ ...formValues, [e.taget.name]: e.target.value });
  };
  return (
    <input
      type="input"
      name={BtnName}
      placeholder={PlaceHolder}
      required={Requiredvalue}
      className="inputStyle"
      value={formValues}
      onChange={handleChange}
    />
  );
}
