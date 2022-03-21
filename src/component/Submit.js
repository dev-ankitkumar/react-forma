import "./style.css";
export default function Submit({ BtnName }) {
  return (
    <>
      <input type="submit" value={BtnName} className="submitBtn" />
    </>
  );
}
