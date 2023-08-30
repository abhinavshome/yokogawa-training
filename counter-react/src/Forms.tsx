import { useState } from "react";

function Forms() {
  const [username, setUsername] = useState("Abhinav");
  const [city, setCity] = useState("Banglore");
  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <div>
      username: {username} <br />
      is admin?: {isAdmin ? "YES" : "NO"} <br />
      city: {city} <br />
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="checkbox"
        checked={isAdmin}
        onChange={(e) => setIsAdmin(e.target.checked)}
      />
      <br />
      <select value={city} onChange={(e) => setCity(e.target.value)}>
        <option>Chennai</option>
        <option>Banglore</option>
        <option>Delhi</option>
        <option>Mumbai</option>
      </select>
    </div>
  );
}

export default Forms;
