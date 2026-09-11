// This component demonstrates JSX expressions
function ProfileCard(props) {
  // These are local variables inside the component
  const fullName = props.firstName + " " + props.lastName;

  // Calculate the birth year using the current year and the age prop
  const birthYear = 2026 - props.age;

  return (
    <div
      className="profile-card"
      style={{
        border: "1px solid #35d457",
        padding: "15px",
        margin: "10px",
        borderRadius: "10px",
      }}
    >
      <h2>{fullName}</h2>

      {/* Using a ternary operator */}
      {/* Syntax: condition ? 'if true' : 'if false' */}
      <p>Status: {props.age >= 18 ? "Adult" : "Student"}</p>

      <p>Age: {props.age}</p>
      <p>Birth Year: {birthYear}</p>
    </div>
  );
}

export default ProfileCard;