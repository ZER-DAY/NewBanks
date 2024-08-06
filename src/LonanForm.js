import "./FormStyles.css";
import Modal from "./Modal";
import { useState } from "react";
export default function LonanForm() {
  const [erorMansege, seterorMansege] = useState(null);
  const [showModel, setShowModel] = useState(false);
  // const [buttonIsDisabled, setbuttonIDisabled] = useState(false);
  let [loanInputs, setloanInput] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmploye: false,
    salaryRange: "",
  });

  function handleFormSubmit(event) {
    event.preventDefault();
    seterorMansege(null);
    const { age, phoneNumber } = loanInputs;
    if (age < 18 || age > 100) {
      console.log("age not ali");
      seterorMansege("The Age Not allowd");
    } else if (phoneNumber.length < 10 || phoneNumber.length > 12) {
      seterorMansege("The phone Numebr is Not allowd ");
    }
    setShowModel(true);
  }

  const buttonIsDisabled =
    loanInputs.name === "" ||
    loanInputs.age === "" ||
    loanInputs.phoneNumber === "";

  // let buttonClass = "";
  // if (buttonIsDisabled) {
  //   buttonClass = "disabled";
  // } else {
  //   buttonClass = "";
  // }
  function handleDivClick() {
    if (showModel) {
      setShowModel(false);
    }
  }
  return (
    <div className="felx" onClick={handleDivClick}>
      <form className="felx" id="loan-form">
        <h1>Requesting a Loan</h1>
        <hr />
        <label>Name :</label>
        <input
          value={loanInputs.naem}
          onChange={(event) => {
            setloanInput({ ...loanInputs, name: event.target.value });
          }}
        />

        <label>Phone Number :</label>
        <input
          value={loanInputs.phoneNumber}
          onChange={(event) => {
            setloanInput({ ...loanInputs, phoneNumber: event.target.value });
          }}
        />

        <label>Age :</label>
        <input
          value={loanInputs.age}
          onChange={(event) => {
            setloanInput({ ...loanInputs, age: event.target.value });
          }}
        />

        <label
          style={{
            marginTop: "30px",
          }}
        >
          Are u an employee
        </label>
        <input
          type="checkbox"
          checked={loanInputs.isEmploye}
          onChange={(event) => {
            setloanInput({ ...loanInputs, isEmploye: event.target.checked });
          }}
        />

        <label>Salary</label>
        <select
          value={loanInputs.salaryRange}
          onChange={(event) => {
            setloanInput({ ...loanInputs, salaryRange: event.target.value });
          }}
        >
          <option>less Than 500$</option>
          <option>between 500$ and 2000$</option>
          <option>above 500$</option>
        </select>

        <button
          className={buttonIsDisabled ? "disabled" : ""}
          onClick={handleFormSubmit}
          disabled={buttonIsDisabled}
          id="Submiteloan"
        >
          Submite
        </button>
      </form>

      <Modal isVisble={showModel} erorrMassege={erorMansege} />
    </div>
  );
}
