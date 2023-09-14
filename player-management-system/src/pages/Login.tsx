import axios from "axios";
import { useState } from "react";
import Config from "../config";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUserAndToken } from "../redux/actions/authActions";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = async (e) => {
    e.preventDefault();
    const credentials = {
      email: email,
      password: password,
    };
    try {
      const res = await axios.post(Config.loginUrl, credentials);
      console.log(res);
      dispatch(setCurrentUserAndToken(res.data));
      navigate("/");
    } catch (err) {
      console.log(err);
      alert(err.response.data);
    }
  };

  return (
    <div>
      <h3>Log In</h3>
      <form onSubmit={login}>
        <div>
          Email:{" "}
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
