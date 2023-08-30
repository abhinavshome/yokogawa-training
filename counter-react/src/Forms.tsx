import { useState } from "react";

function Forms() {
  const [username, setUsername] = useState("Abhinav");
  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <div>
      username: {username} <br />
      is admin?: {isAdmin ? "YES" : "NO"} <br />
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
    </div>
  );
}

export default Forms;
