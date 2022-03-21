import { useState } from "react";

export default function RadioButton() {
  const [gender, setGender] = useState("");
  return (
    <div>
      Gender:
      <input
        type="radio"
        checked
        // checked={gender === "Male"}
        onChange={() => setGender("Male")}
        // onClick={() => setGender("Male")}
        name="gender"
        value="Male"
      />
      Male
      <input
        type="radio"
        // checked={gender === "Female"}
        onChange={() => setGender("Female")}
        name="gender"
        value="Female"
      />
      Female
    </div>
  );
}
