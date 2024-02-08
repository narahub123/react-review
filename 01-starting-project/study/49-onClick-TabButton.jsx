export default function TabButton({ children }) {
  function handleClick() {
    console.log("Hello World");
  }

  return (
    <li>
      {/* the value for onClick prop is a function */}
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
