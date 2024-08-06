import "./FormStyles.css";
export default function Modal({ isVisble, erorrMassege = null }) {
  if (isVisble) {
    return (
      <div id="model">
        <div id="modelContent">
          {/* <h1>The Form Has Been Submited successfully</h1> */}
          <h1 style={{
            color : erorrMassege != null ? "red" :"green"
          }}> 
            {erorrMassege != null
              ? erorrMassege
              : "The Form Has Been Submited successfully"}
          </h1>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
