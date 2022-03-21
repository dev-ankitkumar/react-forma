import { useEffect, useState } from "react";
import Submit from "./Submit";
import DateInput from "./DateInput";
import "./style.css";
export default function Form() {
  const initialValue = {
    FirstName: "",
    LastName: "",
    Email: "",
    MobileNumber: "",
    Password: "",
    ConfirmPassword: "",
  };
  const [formValues, setFormValues] = useState(initialValue);
  const [study, setStudy] = useState({
    percentage: "",
    institueName: "",
    degree: "",
  });
  const [studyDetails, setStudyDetails] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [gender, setGender] = useState("");
  let id = 0;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // validate(formValues);
    // if (formErrors) {
    //   setFormErrors(validate(formValues));
    // }
  };
  const handleStudy = (e) => {
    const { name, value } = e.target;
    setStudy({ ...study, [name]: value });
  };
  const HandleForm = (e) => {
    e.preventDefault();
    console.log(`First Name: ${formValues.FirstName}
    Last Name: ${formValues.LastName}
    Email: ${formValues.Email}
    mobile: ${formValues.MobileNumber}
    Password: ${formValues.Password}
    gender:${gender}
    `);
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(formValues);
  //   }
  // }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const numberRegex = /^[0-9]{1,10}$/;
    if (values.FirstName.length < 4) {
      errors.FirstName = "Please Enter valid First Name";
    } else if (values.FirstName.length > 15) {
      errors.FirstName = "Please Enter valid First Name";
    }
    if (values.LastName.length < 4) {
      errors.LastName = "Please Enter valid Last Name";
    } else if (values.LastName.length > 15) {
      errors.LastName = "Please Enter valid Last Name";
    }
    if (!regex.test(values.Email)) {
      errors.Email = "Please Enter Valid Email";
    }
    if (values.MobileNumber.length < 9) {
      errors.MobileNumber = "Please Enter Valid Number";
    }
    if (values.Password.length < 5 && values.ConfirmPassword.length < 5) {
      errors.Password = "Enter the Valid Password";
    } else if (values.Password !== values.ConfirmPassword) {
      errors.Password =
        "Password not matched with confirm password please enter again";
    }
    if (gender === "") {
      console.log("-----------");
      console.log(gender);
      errors.gender = "Please Enter Gender";
    }
    return errors;
  };
  const ValidateStudy = (e) => {
    if (
      study.percentage === "" ||
      study.degree === "" ||
      study.institueName === ""
    ) {
      console.log("enter the data");
      return false;
    } else {
      return true;
    }
  };
  const numberChange = (e) => {
    const re = /^[0-9]{0,10}$/;
    const { name, value } = e.target;
    if (re.test(value)) {
      setFormValues({ ...formValues, [name]: value });
    }
  };
  const Check = (e) => {
    const { name, value } = e.target;
    // console.log(`${study.percentage} ${study.institueName} ${study.degree}`);
    console.log(ValidateStudy(study));
    if (ValidateStudy(study)) {
      studyDetails.push({
        ...study,
      });
      setStudy({ percentage: "", institueName: "", degree: "" });
    } else {
      console.log("Something wrong");
    }
    // console.log(studyDetails);
    // <ul>
    //   {StudyDetails.map((artist) => (
    //     <li key={StudyDetails.id}>{StudyDetails}</li>
    //   ))}
    // </ul>;
    // StudyDetails.push(study, join(id + 1));
    // console.log(study);
  };
  return (
    <div>
      <form onSubmit={HandleForm}>
        <p>{formErrors.FirstName}</p>
        <p>{formErrors.LastName}</p>
        <div className="inputDiv">
          <input
            type="text"
            name="FirstName"
            placeholder="First Name"
            className="inputStyle"
            value={formValues.FirstName}
            onChange={handleChange}
          />

          <input
            type="text"
            name="LastName"
            placeholder="Last Name"
            className="inputStyle"
            value={formValues.LastName}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.Email}</p>
        <p>{formErrors.MobileNumber}</p>
        <div className="inputDiv">
          <input
            type="text"
            name="Email"
            placeholder="Email"
            className="inputStyle"
            value={formValues.Email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="MobileNumber"
            placeholder="Mobile Number"
            className="inputStyle"
            value={formValues.MobileNumber}
            onChange={numberChange}
          />
        </div>
        <p>{formErrors.Password}</p>
        <div className="inputDiv">
          <input
            type="password"
            name="Password"
            placeholder="Password*"
            className="inputStyle"
            value={formValues.Password}
            onChange={handleChange}
            autoComplete="on"
          />
          <input
            type="password"
            name="ConfirmPassword"
            placeholder="Confirm Password*"
            className="inputStyle"
            value={formValues.ConfirmPassword}
            onChange={handleChange}
            autoComplete="on"
          />
        </div>
        <div className="inputDiv">
          <DateInput />
          <div>
            <p>{formErrors.gender}</p>
            Gender:
            <input
              type="radio"
              // checked
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
        </div>
        <div>
          <h3>Enter Below Your Qualification Details</h3>
          <div className="inputDiv">
            <input
              type="text"
              name="degree"
              placeholder="Enter your Degree"
              className="inputStyle"
              value={study.degree}
              onChange={handleStudy}
            />
            <input
              type="text"
              name="institueName"
              placeholder="Enter your College/University Name"
              className="inputStyle"
              value={study.institueName}
              onChange={handleStudy}
            />
            <input
              type="text"
              name="percentage"
              placeholder="Enter your Percentage"
              className="inputStyle"
              value={study.percentage}
              onChange={handleStudy}
            />
          </div>
          {studyDetails.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Percentage</th>
                  <th>degree</th>
                  <th>institueName</th>
                </tr>
              </thead>
              <tbody>
                {studyDetails.map((studyDetails, index) => (
                  <tr key={index}>
                    <td>{studyDetails.percentage}</td>
                    <td>{studyDetails.degree}</td>
                    <td>{studyDetails.institueName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            ""
          )}
          <input
            type="button"
            className="submitBtn"
            value="Add Information"
            onClick={Check}
          />
        </div>
        <input type="submit" value="Submit Your Record" className="submitBtn" />
      </form>
    </div>
  );
}
