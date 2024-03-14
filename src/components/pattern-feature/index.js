import "./index.css";
export default function pattern() {
  return (
    <>
      <input
        type="text"
        placeholder="i.e., GR-100200"
        pattern="[A-Z]{2}-[0-9]{6}"
        required
      />
      <span></span>
    </>
  );
}
